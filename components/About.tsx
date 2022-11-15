import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
    return <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='visible max-sm:invisible
         absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Â propos
        </h3>
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
                Isabelle Sadat,{" "}
                <span className="underline decoration-[#F7AB0A]/50">psychothérapeute</span>
                ,<br /> à Paris 10ème
            </h4>
            <p className='text-base'>
            {`
                Docteur Isabelle Sadat est médecin généraliste et Psychothérapeute depuis plusieurs années.`}<br />{`
                Elle Pratique plusieurs types de thérapies brèves. elle a été formée à la thérapie comportementale et cognitive (TTC), `}<br />{`
                à la thérapie des schémas (TTC 3ème vague), à la thérapie de l'acceptation et de l'engagement (ACT) thérapie `}<br />{`
                systémique, à la thérapie analytique et à l'hypnothérapie intégrative. `}<br />{`
                La psychothérapie est l'utilisation d'une méthode thérapeutique qui fait uniquement appel à des moyens`}<br />{`
                psychologiques pour traiter des troubles psychiques ou somatiques.`}
            </p>
        </div>
    </motion.div>
}