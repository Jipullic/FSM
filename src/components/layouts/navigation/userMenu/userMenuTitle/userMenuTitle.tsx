import useAuthContext from '@/hooks/useAuthContext'

import styles from './userMenuTitle.module.sass'

const UserMenuTitle: React.FC = () => {
  const { user } = useAuthContext()

  return (
    <div className={styles.container}>
      <div className={styles['full-name']}>
        {user.firstname} {user.middlename} {user.lastname}
      </div>
      <div className={styles.username}>@{user.username}</div>
    </div>
  )
}

export default UserMenuTitle
