import PieChart from '@/components/charts/pieChart/pieChart'
import ChartContainer from '@/components/containers/chartContainer/chartContainer'
import useFuelEfficiencyQuery from '@/hooks/queries/chartQueries/useFuelEfficiencyQuery'

const FuelEfficiencyChart = () => {
  const { fuels, isLoading } = useFuelEfficiencyQuery({})

  return (
    <ChartContainer
      title='Эффективность топлива'
      tooltipDescription='Описание эффективности топлива'
      className='col-span-1'
      isLoading={isLoading}
    >
      <PieChart data={fuels} />
    </ChartContainer>
  )
}

export default FuelEfficiencyChart
