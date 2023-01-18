




// nextjs imports
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// firebase imports
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { app } from '../../Firebase'

// component and page imports
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

// react imports 
import { useState, useEffect, useContext } from 'react'
import { MainContext } from '../components/Context'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const [user, setUser] = useState(null)

	const signin = () => {
		const provider = new GoogleAuthProvider()
		const auth = getAuth()
		signInWithPopup(auth, provider)
		.then((result) => console.log(result.user))
		.catch((error) => console.log(error))
	}

	useEffect(() => {
		const auth = getAuth(app)
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
	}, [])

	return (
		<MainContext.Provider value={{ user, signin }}>
		<Head>
			<title>Infotech Ecommerce</title>
			<meta name="description" content="Ecommerce by Infotech, Rengkai" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		</Head>
		<main className={`p-4 Montserrat min-h-screen bg-[#f0f0f0]`}>
			<Header />
			<Footer />
		</main>
		</MainContext.Provider>
	)
}
