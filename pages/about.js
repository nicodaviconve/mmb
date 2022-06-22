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
      <div className={styles.wrapper}>
        <h1 className={styles.title}><a>CONTACT</a></h1>

        <a className={styles.text}><p>{">"} MAIL </p></a>
        <a>michelemaretto@style.com</a>
        <a className={styles.text}><p>{">"} PHONE </p></a>
        <a>+3935922661</a>
        <a className={styles.text}><p>{">"} SOCIAL </p></a>
        <a>@michelePussyfucker</a>
      </div>
    


    </>
  );
}
 
export default About;