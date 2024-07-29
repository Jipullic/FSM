import BaseErrorPage from '@/pages/errors/baseErrorPage/baseErrorPage'

const Forbidden: React.FC = () => {
  return <BaseErrorPage statusCode={500} text='Ошибка сервера'></BaseErrorPage>
}

export default Forbidden
