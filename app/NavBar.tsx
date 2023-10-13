'use client'

import classNames from 'classnames'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {AiFillBug} from 'react-icons/ai'

const NavBar = () => {
	const currentPath = usePathname()
	const links = [
		{ label: 'Dashboard', href: '/' },
		{ label: 'Issues', href: '/issues' }
	]

	return (
		<nav className={'flex space-x-6 border border-emerald-300 mb-5 mt-1 px-5 h-14 items-center'}>
			<Link href={'/'}><AiFillBug /></Link>
			<ul className={'flex space-x-6'}>
				{links.map((link, key) =>
					// 'text-pink-500 hover:text-pink-800 transition-colors'
					<li key={key} className={classNames({
						'text-pink-900': link.href !== currentPath,
						'text-pink-500': link.href === currentPath,
						'hover:text-pink-500 transition-colors': true
					})}>
						<Link href={link.href}>{ link.label }</Link>
					</li>)
				}
			</ul>
		</nav>
	)
}

export default NavBar