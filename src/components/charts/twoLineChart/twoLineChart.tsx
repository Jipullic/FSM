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

export interface TwoLineChartData {
  data: any[]
  dataKey_1: string
  dataKey_2: string
  nameLine_1: string
  nameLine_2: string
}

const calculateBoundaries = (
  data: any[],
  dataKey1: string,
  dataKey2: string
) => {
  const allValues = data.flatMap((item) => [item[dataKey1], item[dataKey2]])
  const minValue = Math.min(...allValues)
  const maxValue = Math.max(...allValues)
  const buffer = (maxValue - minValue) * 0.1 // 10% buffer
  return {
    minValue: Math.floor(minValue - buffer),
    maxValue: Math.ceil(maxValue + buffer)
  }
}

const TwoLineChart: React.FC<TwoLineChartData> = ({
  data,
  dataKey_1,
  dataKey_2,
  nameLine_1,
  nameLine_2
}) => {
  const initialState = {
    data: data,
    left: 'dataMin',
    right: 'dataMax',
    refAreaLeft: '',
    refAreaRight: '',
    animation: true,
    ...calculateBoundaries(data, dataKey_1, dataKey_2)
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
      ...calculateBoundaries(data, dataKey_1, dataKey_2)
    }))
  }, [data, dataKey_1, dataKey_2])

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
          <Tooltip />
          <Line
            yAxisId='1'
            type='natural'
            dataKey={dataKey_1}
            name={nameLine_1}
            stroke='#F89494'
            strokeWidth={3}
            animationDuration={300}
          />
          <Line
            yAxisId='1'
            type='natural'
            dataKey={dataKey_2}
            name={nameLine_2}
            stroke='#82ca9d'
            strokeWidth={3}
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
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TwoLineChart
