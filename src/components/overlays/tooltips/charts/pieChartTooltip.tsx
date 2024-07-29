import type React from 'react'

interface Props {
  active?: boolean
  payload?: any
}

const PieChartTooltip: React.FC<Props> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className='rounded-lg border bg-white p-2 shadow-lg'>
        <p>{`${data.name} : ${data.value}`}</p>
      </div>
    )
  }

  return null
}

export default PieChartTooltip
