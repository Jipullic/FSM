import OneLineChart from '@/components/charts/oneLineChart/oneLineChart'
import ChartContainer from '@/components/containers/chartContainer/chartContainer'
import useCostPerKmQuery from '@/hooks/queries/chartQueries/useCostPerKm'

const CostPerKmChart = () => {
  const { costsPerKm, isLoading } = useCostPerKmQuery({})

  return (
    <ChartContainer
      title='Себестоимость километра'
      tooltipDescription='Описание себестоимость километра'
      className='col-span-1 md:col-span-3'
      isLoading={isLoading}
    >
      <OneLineChart
        data={costsPerKm}
        dataKey='cost'
        nameLine='Стоимость километра'
      />
    </ChartContainer>
  )
}

export default CostPerKmChart
