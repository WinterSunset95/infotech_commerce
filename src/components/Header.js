




import { useState, useEffect } from "react";
import Link from 'next/link'

const Header = () => {
	const [drop, setDrop] = useState(false)
	return (
		<nav className={`flex flex-col md:flex-row justify-between items-center rounded-md border border-2 bg-white`}>
			<div className={`flex flex-row justify-between items-center p-2 w-full md:w-1/2 `}>
				<h2 className={`text-xl md:text-2xl font-bold w-full p-1 bg-red-400 rounded-md text-white`}>Ecommerce</h2>
				<div className={`flex flex-row justify-around items-center w-full text-sm`}>
					<Link className={`flex flex-row justify-center items-center p-1 text-gray-500 hover:text-black hover:underline`} href="#">Latest</Link>
					<Link className={`flex flex-row justify-center items-center p-1 text-gray-500 hover:text-black hover:underline`} href="#">Popular</Link>
				</div>
				<div className={`w-8/12 md:hidden flex flex-row justify-end items-center`} onClick={() => setDrop(!drop)}>
					<i class="fa-solid fa-bars cursor-pointer"></i>
				</div>
			</div>
			<div className={`flex flex-row justify-between items-center p-2 w-full ${drop ? 'dropper' : ''}`}>
				<input type="text" placeholder="Search" className={`border border-2 rounded-lg p-2 w-1/2`}/>
				<button className={`p-2 bg-blue-400 rounded-md text-white cursor-pointer`}>Sign In</button>
			</div>
		</nav>
	)
}

export {
	Header
}
