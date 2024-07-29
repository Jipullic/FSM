import BaseErrorPage from '@/pages/errors/baseErrorPage/baseErrorPage'

const NotFound: React.FC = () => {
  return (
    <BaseErrorPage statusCode={404} text='Страница не найдена'></BaseErrorPage>
  )
}

export default NotFound
