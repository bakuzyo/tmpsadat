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
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skill?.image).url()}
                // src="https://cdn.sanity.io/images/rlw8j87m/production/b01f3b470d94b7f055e47d8370fb0fd2d596f79c-600x899.jpg"
                className='rounded-full border border-gray-500 object-cover w-24 h-24
                md:w-28 md:h-28 xl:w-32 xl:h-32 filter hover:h-30 group-hover:grayscale transition duration-300 ease-in-out'
            />
        </div>
    )
}

export default Competence;