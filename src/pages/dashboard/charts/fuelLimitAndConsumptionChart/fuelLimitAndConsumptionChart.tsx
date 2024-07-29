import TwoLineChart from '@/components/charts/twoLineChart/twoLineChart'
import ChartContainer from '@/components/containers/chartContainer/chartContainer'
import useFuelLimitAndConsumption from '@/hooks/queries/chartQueries/useFuelLimitAndConsumption'

const FuelLimitAndConsumptionChart = () => {
  const { fuelLimitAndConsumption, isLoading } = useFuelLimitAndConsumption({})

  return (
    <ChartContainer
      title='Расход топлива'
      tooltipDescription='Описание расхода топлива'
      className='col-span-1 md:col-span-4'
      isLoading={isLoading}
    >
      <TwoLineChart
        data={fuelLimitAndConsumption}
        dataKey_1='fuelLimit'
        dataKey_2='fuelConsumption'
        nameLine_1='Лимит топлива'
        nameLine_2='Топлива потрачено'
      ></TwoLineChart>
    </ChartContainer>
  )
}

export default FuelLimitAndConsumptionChart
