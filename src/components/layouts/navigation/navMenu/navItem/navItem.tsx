import clsx from 'clsx'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { getFormatLocationPathname } from '@/utils/getLocationPathname'

import styles from './navItem.module.sass'

interface Props {
  title: string
  url: string
}
const NavItem: React.FC<Props> = ({ title, url }) => {
  const location = useLocation()
  const currentPath = getFormatLocationPathname(location.pathname)
  const navigate = useNavigate()

  const style = clsx(
    currentPath === url ? styles['nav-item-current'] : styles['nav-item']
  )

  return (
    <li>
      <h3 onClick={() => navigate(url)} className={style}>
        {title}
      </h3>
    </li>
  )
}

export default NavItem
