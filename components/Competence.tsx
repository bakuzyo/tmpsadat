import React from 'react';
import { motion } from "framer-motion"
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
}

function Competence({ skill, directionLeft }: Props) {
    return (
        <div className='group/item group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 55 }}
                src={urlFor(skill?.image).url()}
                // src="https://cdn.sanity.io/images/rlw8j87m/production/b01f3b470d94b7f055e47d8370fb0fd2d596f79c-600x899.jpg"
                className='rounded-full border border-gray-500 object-cover w-24 h-24
                md:w-28 md:h-28 xl:w-32 xl:h-32 group-hover:rounded filter transition duration-900 ease-in-out'
            />
            <div className="transition-all transform
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 p-2 
                                group-hover:translate-y-0 flex justify-center">
                <div className="p-2 ">
                    <p className="mt-10 m-12 flex text-lg bg-[rgb(36,36,36)] absolute">
                        {skill?.title}
                    </p>
                    <a className="px-4 py-2 text-sm text-white bg-green-600"
                        href="https://www.doctolib.fr/medecin-generaliste/paris/isabelle-sadat#presentation"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Plus d&apos;info
                    </a>
                </div>
            </div>
            {/* <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">{skill?.title}</div> */}
        </div>
    )
}

export default Competence;