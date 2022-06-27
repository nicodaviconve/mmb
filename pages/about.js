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
        <title>MicheleMaretto | Contact</title>
        <meta name="keywords" content="MicheleMaretto"/>
      </Head>
      <h4 class="wordCarousel">
        <span>Michele Maretto </span>
        <div>
            <ul class="flip4">
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