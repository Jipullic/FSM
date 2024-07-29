import React from 'react'

import menuSvg from '@/assets/images/menu.svg'

import styles from './navMenuButton.module.sass'

interface Props {
  navMenuToggleHidden: () => void
}

const NavMenuButton: React.FC<Props> = ({ navMenuToggleHidden }) => {
  return (
    <button onClick={navMenuToggleHidden} className={styles['nav-menu-button']}>
      <img src={menuSvg} className='h-5 w-5'></img>
    </button>
  )
}

export default NavMenuButton
