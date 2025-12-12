"use client"
import Image from 'next/image'
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='bg-black pt-[100px] pb-[175px] flex-center text-white overflow-hidden'>
        <div className='flex justify-between gap-2.5 items-start max-w-[1350px] w-full'>

            {/* Title and subtitle */}
            <div className='flex flex-col pt-[100px] gap-[25px]'>
                <h1 className='font-medium text-[52px] leading-[1.2em] -tracking-[0.01em] max-w-[440px]'>Lover of Books & Writer at Heart</h1>
                <p className='font-clash-grotesk text-lg leading-[1.2em] text-white/70 max-w-[600px]'>Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world&apos;s largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform</p>
            </div>

            {/* Image Section */}
            <div className='pl-[267px] relative'>
              <motion.div initial={{opacity: 0, x: 150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.4}} viewport={{once: true}}>
                <Image src="/resources/reading-mag.png" alt='Reading Magzine' width={400} height={550} />
              </motion.div>

              <motion.div initial={{opacity: 0, x: -150}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8, delay: 0.2}} viewport={{once: true}} className='absolute left-5 -bottom-6'>
                <Image src="/resources/magzine-cover.png" alt='Anish Singh Thakur on Magazine Cover' width={300} height={331} />
              </motion.div>  

            </div>

        </div>
    </section>
  )
}

export default HeroSection
