// "use client"
// import Image from 'next/image'
// import {motion} from 'framer-motion'

// const HeroSection = () => {
//   return (
//     <section className='bg-black pt-[100px] pb-[175px] flex-center text-white overflow-hidden'>
//         <div className='flex justify-between gap-2.5 items-start max-w-[1350px] w-full'>

//             {/* Title and subtitle */}
//             <div className='flex flex-col pt-[100px] gap-[25px]'>
//                 <h1 className='font-medium text-[52px] leading-[1.2em] -tracking-[0.01em] max-w-[440px]'>Lover of Books & Writer at Heart</h1>
//                 <p className='font-clash-grotesk text-lg leading-[1.2em] text-white/70 max-w-[600px]'>Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world&apos;s largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform</p>
//             </div>

//             {/* Image Section */}
//             <div className='pl-[267px] relative'>
//               <motion.div initial={{opacity: 0, x: 150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.4}} viewport={{once: true}}>
//                 <Image src="/resources/reading-mag.png" alt='Reading Magzine' width={400} height={550} />
//               </motion.div>

//               <motion.div initial={{opacity: 0, x: -150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.2}} viewport={{once: true}} className='absolute left-5 -bottom-6'>
//                 <Image src="/resources/magzine-cover.png" alt='Anish Singh Thakur on Magazine Cover' width={300} height={331} />
//               </motion.div>  

//             </div>

//         </div>
//     </section>
//   )
// }

// export default HeroSection
"use client"
import Image from 'next/image'
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='bg-black pt-[100px] pb-[175px] flex-center text-white overflow-hidden'>
        <div className='flex justify-between  max-w-[1350px] w-full lg:flex-row flex-col lg:items-start items-center lg:gap-2.5 gap-12 px-4 lg:px-0'>

            {/* Title and subtitle */}
            <div className='flex flex-col pt-[100px] gap-[25px] lg:pt-[100px]  lg:max-w-[590px] w-full'>
                <h1 className='font-medium lg:text-[52px] text-[32px] leading-[1.2em] -tracking-[0.01em] lg:max-w-[440px] w-full text-center lg:text-left'>
                  Lover of Books & Writer at Heart
                </h1>
                <p className='font-clash-grotesk lg:text-lg text-base leading-[1.4em] lg:leading-[1.2em] text-white/70 lg:max-w-[700px] md:max-w-[500px] max-w-full text-center lg:text-left px-2 lg:px-0'>
                  Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world&apos;s largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform
                </p>
            </div>

            {/* Image Section */}
            <div className='lg:pl-[267px] relative lg:block flex flex-col items-center lg:w-auto w-full'>
              <motion.div 
                initial={{opacity: 0, x: 150}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{duration: 0.4}} 
                viewport={{once: true}}
                className='lg:w-auto w-full flex justify-center'
              >
                <Image 
                  src="/resources/reading-mag.png" 
                  alt='Reading Magzine' 
                  width={400} 
                  height={550}
                  className='lg:w-[400px] lg:h-[550px] w-[300px] h-[412px] object-contain'
                />
              </motion.div>

              <motion.div 
                initial={{opacity: 0, x: -150}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{duration: 0.8, delay: 0.2}} 
                viewport={{once: true}} 
                className='absolute left-5 -bottom-6 lg:block hidden'
              >
                <Image 
                  src="/resources/magzine-cover.png" 
                  alt='Anish Singh Thakur on Magazine Cover' 
                  width={300} 
                  height={331}
                  className='lg:w-[300px] lg:h-[331px]'
                />
              </motion.div>  

              {/* Mobile version of the magazine cover */}
              <motion.div 
                initial={{opacity: 0, y: 50}} 
                whileInView={{opacity: 1, y: 0}} 
                transition={{duration: 0.8, delay: 0.2}} 
                viewport={{once: true}} 
                className='lg:hidden block mt-8'
              >
                <Image 
                  src="/resources/magzine-cover.png" 
                  alt='Anish Singh Thakur on Magazine Cover' 
                  width={250} 
                  height={276}
                  className='w-full h-full object-contain'
                />
              </motion.div>

            </div>

        </div>
    </section>
  )
}

export default HeroSection