import { useNavigate } from 'react-router-dom'

import PATHS from '@/constants/routesPaths'
import useAuthContext from '@/hooks/useAuthContext'

import styles from './userMenuList.module.sass'

const UserMenuList: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()

  return (
    <div className={styles['container']}>
      <div className='px-4 py-3 md:hidden'>
        <div>
          {user.firstname} {user.middlename} {user.lastname}
        </div>
        <div className={styles.username}>@{user?.username}</div>
      </div>
      <div className='px-4 py-3'>Настройки</div>
      <ul>
        <li>
          <a
            onClick={() => navigate(PATHS.logout)}
            className='block rounded-md px-4 py-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
          >
            Выйти
          </a>
        </li>
      </ul>
    </div>
  )
}

export default UserMenuList
