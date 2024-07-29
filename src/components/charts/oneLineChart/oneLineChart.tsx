import React, { useState, useEffect, useCallback } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer
} from 'recharts'

export interface OneLineChartData {
  data: any[]
  dataKey: string
  nameLine: string
}

const OneLineChart: React.FC<OneLineChartData> = ({
  data = [],
  dataKey,
  nameLine
}) => {
  const calculateBoundaries = (data: any[], dataKey: string) => {
    if (data.length === 0) {
      return { minValue: 0, maxValue: 0 }
    }

    const allValues = data.map((item) => item[dataKey])
    const minValue = Math.min(...allValues)
    const maxValue = Math.max(...allValues)
    const buffer = (maxValue - minValue) * 0.1
    return {
      minValue: Math.floor(minValue - buffer),
      maxValue: Math.ceil(maxValue + buffer)
    }
  }

  const initialState = {
    data: data,
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    animation: true,
    ...calculateBoundaries(data, dataKey)
  }

  const [state, setState] = useState(initialState)

  const handleMouseDown = useCallback((e) => {
    if (e && e.activeLabel !== undefined) {
      setState((prevState) => ({ ...prevState, refAreaLeft: e.activeLabel }))
    }
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (state.refAreaLeft && e && e.activeLabel !== undefined) {
        setState((prevState) => ({ ...prevState, refAreaRight: e.activeLabel }))
      }
    },
    [state.refAreaLeft]
  )

  const handleMouseUp = useCallback(() => {
    if (state.refAreaLeft && state.refAreaRight) {
      const [left, right] = [state.refAreaLeft, state.refAreaRight].sort()
      setState((prevState) => ({
        ...prevState,
        left,
        right,
        refAreaLeft: '',
        refAreaRight: ''
      }))
    }
  }, [state.refAreaLeft, state.refAreaRight])

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      data,
      ...calculateBoundaries(data, dataKey)
    }))
  }, [data, dataKey])

  const { left, right, refAreaLeft, refAreaRight, minValue, maxValue } = state

  return (
    <div
      className='highlight-bar-charts'
      style={{ userSelect: 'none', width: '100%' }}
    >
      <ResponsiveContainer width='100%' height={200}>
        <LineChart
          width={1600}
          data={data}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            allowDataOverflow
            dataKey='date'
            domain={[left, right]}
            type='category'
          />
          <YAxis
            allowDataOverflow
            domain={[minValue, maxValue]}
            type='number'
            yAxisId='1'
          />
          <Line
            yAxisId='1'
            name={nameLine}
            type='natural'
            dataKey={dataKey}
            stroke='#0E62D0'
            strokeWidth={3}
            opacity={0.8}
            animationDuration={300}
          />
          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId='1'
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OneLineChart
