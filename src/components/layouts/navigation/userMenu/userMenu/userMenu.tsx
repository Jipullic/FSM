import clsx from 'clsx'
import React from 'react'

import PersonImage from '@/components/elements/images/person/person'
import UserMenuList from '@/components/layouts/navigation/userMenu/userMenuList/userMenuList'
import UserMenuTitle from '@/components/layouts/navigation/userMenu/userMenuTitle/userMenuTitle'
import useToggleHidden from '@/hooks/useToggleHidden'

import styles from './userMenu.module.sass'

const UserMenu: React.FC = () => {
  const [userMenuRef, toggleHidden] = useToggleHidden<HTMLDivElement>()
  const userMenuStyle = clsx('hidden', styles['user-menu'])

  return (
    <div className={styles['user-menu-container']}>
      <UserMenuTitle />

      <button onClick={toggleHidden} className={styles['user-menu-button']}>
        <PersonImage className={styles.image} />
      </button>

      <div ref={userMenuRef} className={userMenuStyle}>
        <UserMenuList />
      </div>
    </div>
  )
}

export default UserMenu
