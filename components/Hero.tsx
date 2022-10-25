import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Cabinet Isabelle Sadat",
            "Psychothérapeute",
            "Paris 10 ème",
            "Prochainement..."
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
         text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                alt="Isabelle Sadat Medecin"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Psychothérapeute</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>À propos</button>
                    </Link>
                    <Link href="#exp">
                        <button className='heroButton'>Expérience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Compétences</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projets</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}