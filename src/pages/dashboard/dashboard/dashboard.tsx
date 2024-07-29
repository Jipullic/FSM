import PageContainer from '@/components/containers/pageContainer/pageContainer'
import Header from '@/components/layouts/header/header'

import styles from './dashboard.module.sass'
import CostPerKmChart from '../charts/costPerKmChart/costPerKmChart'
import FuelEfficiencyChart from '../charts/fuelEfficiencyChart/fuelEfficiencyChart'
import FuelLimitAndConsumptionChart from '../charts/fuelLimitAndConsumptionChart/fuelLimitAndConsumptionChart'

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <div className={styles['dashboard-container']}>
        <FuelEfficiencyChart />
        <CostPerKmChart />
        <FuelLimitAndConsumptionChart />
      </div>
    </PageContainer>
  )
}

export default Dashboard
