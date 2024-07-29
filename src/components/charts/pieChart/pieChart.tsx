import type React from 'react'
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Label
} from 'recharts'
import type { PolarViewBox } from 'recharts/types/util/types'

import PieChartTooltip from '@/components/overlays/tooltips/charts/pieChartTooltip'

const COLORS = ['#84cc16', '#fde047', '#f87171']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='gray'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
      pointerEvents='none'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

interface CustomLabelProps {
  viewBox?: PolarViewBox
  text: string
}

const CustomLabel: React.FC<CustomLabelProps> = ({ viewBox, text }) => {
  const { cx, cy } = viewBox

  return (
    <text
      x={cx}
      y={cy}
      fill='#3d405c'
      className='recharts-text recharts-label'
      textAnchor='middle'
      dominantBaseline='central'
    >
      {text}
    </text>
  )
}
export interface PieChartData {
  total: number
  greenZone: number
  yellowZone: number
  redZone: number
}

interface Props {
  data: PieChartData
}

const PieChart: React.FC<Props> = ({ data }) => {
  const dataProps = [
    { name: 'Норма', value: data !== undefined ? data.greenZone : 0 },
    {
      name: 'Менее 10%',
      value: data !== undefined ? data.yellowZone : 0
    },
    { name: 'Более 10%', value: data !== undefined ? data.redZone : 0 }
  ]

  const totalValue = data !== undefined ? data.total : 0

  return (
    <ResponsiveContainer>
      <RePieChart>
        <Pie
          data={dataProps}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          innerRadius={40}
          dataKey='value'
        >
          {dataProps.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            content={<CustomLabel text={`${totalValue} л`} />} // общее количество в центре
            position='center' // позиция центра
          />
        </Pie>
        <Legend layout='vertical' align='right' verticalAlign='middle' />
        <Tooltip content={<PieChartTooltip />} />
      </RePieChart>
    </ResponsiveContainer>
  )
}

export default PieChart
