import BaseErrorPage from '@/pages/errors/baseErrorPage/baseErrorPage'

const Forbidden: React.FC = () => {
  return <BaseErrorPage statusCode={403} text='Доступ запрещён'></BaseErrorPage>
}

export default Forbidden
