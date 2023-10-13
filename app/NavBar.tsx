import Link from 'next/link'
import {AiFillBug} from 'react-icons/ai'

const NavBar = () => {
	const links = [
		{ label: 'Dashboard', href: '/' },
		{ label: 'Issues', href: '/issues' }
	]

	return (
		<nav className={'flex space-x-6 border border-emerald-300 mb-5 mt-1 px-5 h-14 items-center'}>
			<Link href={'/'}><AiFillBug /></Link>
			<ul className={'flex space-x-6'}>
				{links.map((link, key) =>
					<li key={key} className={'text-pink-500 hover:text-pink-800 transition-colors'}>
						<Link href={link.href}>{ link.label }</Link>
					</li>)
				}
			</ul>
		</nav>
	)
}

export default NavBar