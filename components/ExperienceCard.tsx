import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
};


export default function ExperienceCard({ experience }: Props) {

    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
           w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-6 
              hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
                  overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
             object-center'
                src={urlFor(experience?.companyImage).url()}
                // src="https://cdn.sanity.io/images/rlw8j87m/production/5480cc8d0ee57b00173df4da54f66e84892da7da-650x435.jpg"
                // // src="https://cdn.sanity.io/images/rlw8j87m/production/9a463677b172d5259f7cfc5368400c2627b44ce5-4992x3744.jpg"
                // // src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                // Sadat-min.png"
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Isabelle sadat</h4>
                <p className='font-bold text-2xl mt-1'>Psychothérapie</p>
                <div className='flex space-x-2 my-2'>
                    {/* <img
                    className='h-10 w-10 rounded-full'
                    src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                    alt=""
                />
                <div>
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                    alt=""
                />
                </div>
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                    alt=""
                /> */}
                    {experience.technologies.map(technology => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 object-cover rounded-full"
                            src={urlFor(technology.image).url()}
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}

                </ul>
            </div>
        </article>
    )
}