import clsx from 'clsx'
import { forwardRef } from 'react'

import PATHS from '@/constants/routesPaths'

import styles from './navMenu.module.sass'
import NavItem from '../navItem/navItem'

const NavMenu = forwardRef<HTMLDivElement, any>(function NavMenu(_, ref) {
  const navMenuStyle = clsx('hidden', styles['nav-menu'])

  return (
    <nav ref={ref} className={navMenuStyle}>
      <ul className={styles['ul-menu']}>
        <NavItem title='Главная' url={PATHS.home} />
        <NavItem title='Заявки' url={PATHS.application.view} />
      </ul>
    </nav>
  )
})

export default NavMenu
