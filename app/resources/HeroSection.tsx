"use client"
import Image from 'next/image'
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='bg-black pt-[100px] pb-[175px] flex-center text-white overflow-hidden'>
        <div className='flex justify-between gap-2.5 items-start max-w-[1350px] w-full lg:flex-row flex-col lg:items-start items-center px-4 lg:px-0'>

            {/* Title and subtitle - Desktop layout maintained, mobile optimized */}
            <div className='flex flex-col pt-[100px] gap-[25px] lg:w-auto w-full'>
                <h1 className='font-medium lg:text-[52px] text-[36px] leading-[1.2em] -tracking-[0.01em] max-w-[440px] text-left'>
                  Lover of Books & Writer at Heart
                </h1>
                <p className='font-clash-grotesk lg:text-lg text-base leading-[1.4em] lg:leading-[1.2em] text-white/70 lg:max-w-[600px] w-full text-left '>
                  Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world&apos;s largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform
                </p>
            </div>

            {/* Image Section - Desktop layout unchanged, mobile optimized */}
            <div className='lg:pl-[267px] relative lg:w-auto w-full lg:mt-0 mt-10'>
              
              {/* Main Reading Magazine Image - Stacked on mobile */}
              <motion.div 
                initial={{opacity: 0, x: 150}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{duration: 0.4}} 
                viewport={{once: true}}
                className='lg:block flex justify-center'
              >
                <Image 
                  src="/resources/reading-mag.png" 
                  alt='Reading Magzine' 
                  width={400} 
                  height={550}
                  className='lg:w-[400px]  lg:h-[550px] w-[280px] h-[385px] object-contain'
                />
              </motion.div>

              {/* Magazine Cover Image - Desktop: absolute positioned, Mobile: below main image */}
              <motion.div 
                initial={{opacity: 0, x: -150}} 
                whileInView={{opacity: 1, x: 0}} 
                transition={{duration: 0.8, delay: 0.2}} 
                viewport={{once: true}} 
                className='lg:absolute lg:left-5 lg:-bottom-6  lg:block flex justify-center mt-6 lg:mt-0'
              >
                <Image 
                  src="/resources/magzine-cover.png" 
                  alt='Anish Singh Thakur on Magazine Cover' 
                  width={300} 
                  height={331}
                  // className='lg:w-[300px] -bottom-5 left-0 absolute lg:relative lg:h-[331px] w-[200px] h-[220px] object-contain'
                  className='lg:w-[300px] -bottom-5 left-0 lg:-bottom-5 lg:left-0 absolute lg:relative lg:h-[331px] w-[200px] h-[220px] md:left-[80px] object-contain'
                />
              </motion.div>  

            </div>

        </div>
    </section>
  )
}

export default HeroSection