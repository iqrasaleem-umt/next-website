
import React from 'react'
import Image from 'next/image'
export default function Project() {
  return (
   <section id="projects" className='scroll-mt-28'  >
    <h2 className=' flex justify-center text-3xl font-medium capitalize mb-8 '>My Project</h2>
    
   <div> 
   <Image
            src="/rmtdev.png"
            alt=""
            width={325}
            height={325}
            />
   </div>
   <div> 
   <Image
            src="/corpcomment.png"
            alt=""
            width={325}
            height={325}
            className='mt-5'
            />
   </div>
  
   </section>
  )
}
