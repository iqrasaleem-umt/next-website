import React from 'react'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
export default function Skills() {
  return (
    <section  id="skills"className="-mb-10  -mt-10 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"> 
        <h1 className='text-3xl font-medium capitalize mb-8'> 
            My Skills
        </h1>
        <ul className="flex flex-wrap justify-center gap-2 text-lg  text-gray-800"> 
        {skillsData.map((skill, index) => (
        <li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" key={index}>{skill}</li>
       ))}
        </ul>
        <div>
        <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"></Image></div>

        
    </section>
  )
}
