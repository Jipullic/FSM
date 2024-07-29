import React, { memo } from 'react'

import LogoImage from '@/components/elements/images/logo/logo'
import NavMenu from '@/components/layouts/navigation/navMenu/navMenu/navMenu'
import NavMenuButton from '@/components/layouts/navigation/navMenu/navMenuButton/navMenuButton'
import UserMenu from '@/components/layouts/navigation/userMenu/userMenu/userMenu'
import useToggleHidden from '@/hooks/useToggleHidden'

import styles from './header.module.sass'

const Header: React.FC = () => {
  const [navMenuRef, navMenuToggleHidden] = useToggleHidden<HTMLDivElement>()

  return (
    <nav className={styles['outer-container']}>
      <div className={styles['inner-container']}>
        <LogoImage className='h-8' />
        <UserMenu />
        {/* <!-- Mobile nav menu button --> */}
        <NavMenuButton navMenuToggleHidden={navMenuToggleHidden} />

        <NavMenu ref={navMenuRef} />
      </div>
    </nav>
  )
}

export default memo(Header)
