import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion";
import doctolib from '../public/doctolib.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { faFileMedical } from '@fortawesome/free-solid-svg-icons'

type Props = {}


export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
            <motion.div
                initial={{
                    x: - 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    url="https://www.linkedin.com/in/isabelle-sadat-631b06184/"
                    fgColor="gray"
                    bgColor="transparent"
                    label="Linkedin"
                />
                {/* <SocialIcon
                    url="https://www.doctolib.fr/medecin-generaliste/paris/isabelle-sadat"
                    fgColor="gray"
                    bgColor="transparent"
                    label="Doctolib"
                /> */}
                <a
                    className='ml-4'
                    href="https://www.doctolib.fr/medecin-generaliste/paris/isabelle-sadat">
                  
                    <FontAwesomeIcon color="gray" size='lg' icon={faFileMedical} />
                </a>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor="gray"
                    bgColor="transparent"
                />
                <a href="mailto:isabelle.sadat@wanadoo.fr" className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                    Me contacter
                </a>
            </motion.div>
        </header>
    )
}