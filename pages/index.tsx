import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Competences from '../components/Competences'
import Diplomes from '../components/Diplomes'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MessageMe from '../components/MessageMe'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar 
       scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Isabelle Sadat</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className='snap-start'>
        <Competences />
      </section>

      <section id="diplomes" className="snap-start">
        <Diplomes />
      </section>

      <section id='contact' className='snap-start'>
        <MessageMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className="h-10 w-10 rounded-fll filter grayscale hover:grayscale-0
               cursor-pointer"
              src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
               Sadat-min.png
            " alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
