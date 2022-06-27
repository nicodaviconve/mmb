import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MicheleMaretto</title>
      </Head>
      <h4 className="wordCarousel">
        <span>Michele Maretto </span>
        <div>
            <ul className="flip4">
                <li>Buildings</li>
                <li>Renovation</li>
                <li>Design</li>
                <li>Architecture</li>
            </ul>
        </div>
    </h4>
    </div>
  )
}
