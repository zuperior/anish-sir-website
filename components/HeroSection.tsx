import React from 'react'

const HeroSection = () => {
  return (
    
    <>
    <div>LargestTradingFloor - juhi</div>
     <div className="relative w-full h-screen bg-[#BA1D0B]/99 overflow-hidden">
      {/* <Image
        src={person}
        alt="The Man"
        className="absolute bottom-0 -left-20 z-10 pt-100px"
        width={527}
        height={446}
      /> */}
      {/* <motion.div
        style={{
          rotate,
          transformOrigin: "center center",
        }}
        className="absolute -bottom-[130px] right-[350px]"
      >
        <Image src={circle} alt="circle" width={426} height={426} />
      </motion.div> */}
      {/* <Image
        src={tower1}
        alt="Tower Left"
        className="absolute bottom-0 -left-20 opacity-[0.70]"
        width={299}
        height={719}
      />
      <Image
        src={tower2}
        alt="Tower Right"
        className="absolute bottom-0 -right-[107px] opacity-[0.70]"
        width={367}
        height={704}
      /> */}
      <div className="w-full h-[183px] text-center flex flex-col items-center gap-[15px]">
        <h2 className="text-[52px] font-clash-display font-medium text-white pt-[100px]">
          The Man behind the Business
        </h2>
        <p 
          // ref={textRef}
          className="text-[20px] text-[#FFFFFF]/70 w-[1000px] h-[106px] font-clash-grotesk opacity-100 leading-[1.1] tracking-[-0.02em] font-medium"
        >
          A powerful belief: &quot;The size of the fish doesn&apos;t matter; the pond it swims in matters the most.&quot;
          This is why he thrives in fast-paced, high-growth cities; environments that challenge him, push him, and align with his ambition to build something global.
        </p>
      </div>
    </div>
    </>
  )
  
}

export default HeroSection