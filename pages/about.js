import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>MicheleMaretto | Portfolio</title>
        <meta name="keywords" content="MicheleMaretto"/>
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
  


    </>
  );
}
 
export default About;