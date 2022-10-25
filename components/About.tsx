import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About</h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
            Sadat-min.png"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
             md:rounded-lg md:w-95 md:h-64 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                ici un 
                <span className='underlined decoration-[#F7AB0A]/50'>petit</span> 
                background:
            </h4>
            <p className='text-base'>
                Docteur Isabelle Sadat est médecin généraliste et psychothérapeute depuis plusieurs années.
                Elle pratique plusieurs types de thérapies brèves. Elle a été formée à la thérapie comportementale et cognitive (TCC), à la thérapie des schémas (TCC 3ème vague), à la thérapie de l'acceptation et de d'engagement (ACT) thérapie systémique, à la thérapie analytique et à l'hypnothérapie intégrative.
                La psychothérapie est l'utilisation d'une méthode thérapeutique qui fait uniquement appel à des moyens psychologiques pour traiter des troubles psychiques ou somatiques.
            </p>
        </div>
    </motion.div>
}