



import { useState, useEffect } from 'react'

const Footer = () => {
	return (
		<div className={`border border-2 bg-white rounded-md p-8`}>
			<div>
				Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
			</div>
			<div className={`py-4`}>
				<i className="fa-brands fa-whatsapp cursor-pointer fa-2xl mr-2"></i>
				<i className="fa-brands fa-facebook cursor-pointer fa-2xl mr-2"></i>
				<i className="fa-brands fa-instagram cursor-pointer fa-2xl mr-2"></i>
				<i className="fa-brands fa-github cursor-pointer fa-2xl mr-2"></i>
			</div>
			<hr className={`border border-gray-700 rounded-full`}/>
			<div className={`py-4`}>
				© 2023 Infotech, Rengkai - All rights reserved.
			</div>
		</div>
	)
}

export {
	Footer
}
