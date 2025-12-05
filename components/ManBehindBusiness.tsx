// "use client";
// import React from 'react'
// import Image from "next/image";
// import tower1 from "../public/tower1.png"
// import tower2 from "../public/towe2.png"
// import person from "../public/anishsir.png"
// import circle from "../public/spinner.png"
// import { motion, useScroll, useTransform } from "framer-motion";


// const ManBehindBusiness = () => {
//   // Detect scroll progress of the section
//   const { scrollYProgress } = useScroll({
    
//     offset: ["start end", "end start"],
//   });

//   // Map scroll progress (0 to 1) → rotation (0° to 180°)
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

//   return (
//     <div className="relative w-full min-h-screen bg-[#BA1D0B]/99 overflow-hidden ">
//       <Image
//         src={person}
//         alt="The Man"
//         className="absolute bottom-0 left-0 z-10 pt-100px "
//         width={527}
//         height={446}
//       />
//       <motion.div
//         style={{ rotate }}
//         className="absolute bottom-0 right-0"
//       >
//         <Image src={circle} alt="circle" width={426} height={426} />
//       </motion.div>
//       <Image
//         src={tower1}
//         alt="Tower Left"
//         className="absolute  bottom-0 left-0 -ml-[76px] -mb-[22px] opacity-40 "
//         width={299}
//         height={719}
//       />

//       {/* Tower Right */}
//       <Image
//         src={tower2}
//         alt="Tower Right"
//         className="absolute bottom-0 right-0 -mr-[107px] -mb-1 opacity-40 "
//         width={367}
//         height={704}
//       />
//       <div className="w-full  text-center flex flex-col items-center gap-[15px] ">
//         <h2 className=" text-[50px]  font-bold text-white pt-[100px] ">
//           The Man behind the Business
//         </h2>
//         <p className="w-[1000px] h-[106px] text-white/90 opacity-100">
//           A powerful beliefThe size of the fish doesn matter; the pond it swims in matters the most This is why he thrives in fast-paced, high-growth cities; environments that challenge him, push him, and align with his ambition to build something global.
//         </p>
//       </div>

//     </div>
//   );
// }


// export default ManBehindBusiness

"use client";
import React from 'react'
import Image from "next/image";
import tower1 from "../public/tower1.png"
import tower2 from "../public/towe2.png"
import person from "../public/anishsir.png"
import circle from "../public/spinner.png"
import { motion, useScroll, useTransform } from "framer-motion";


const ManBehindBusiness = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  // Clockwise rotation jab scroll down (0° to 720° for multiple rotations)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  // const line1Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0.3, 1]);
  // const line2Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0.3, 1]);
  // const line3Opacity = useTransform(scrollYProgress, [0.5, 0.65], [0.3, 1]);


  return (
    <div className="relative w-full  min-h-screen bg-[#BA1D0B]/99 overflow-hidden ">
      <Image
        src={person}
        alt="The Man"
        className="absolute bottom-0 -left-[100px] z-10 pt-100px "
        width={527}
        height={446}
      />
      <motion.div
        style={{ 
          rotate
        }}
        className="absolute -bottom-[130px] right-[300px] "
      >
        <Image src={circle} alt="circle" width={426} height={426} />
      </motion.div>
      <Image
        src={tower1}
        alt="Tower Left"
        className="absolute  bottom-0 left-0    opacity-40 "
        width={299}
        height={719}
      />
      <Image
        src={tower2}
        alt="Tower Right"
        className="absolute bottom-0 -right-[107px]  opacity-40 "
        width={367}
        height={704}
      />
      <div className="w-full h-[183px] text-center flex flex-col items-center gap-[15px] ">
        <h2 className="text-[65px] font-clash-display font-medium text-white pt-[100px] ">
          The Man behind the Business
        </h2>
        {/* <p className= "text-[25px] w-[1100px] h-[106px] font-clash-grotesk text-white/70 opacity-100 leading-[1.1] tracking-[-0.02em] font-medium">
         A powerful belief: "The size of the fish doesn't matter; the pond it swims in matters the most." This is why he thrives in fast-paced, high-growth cities; environments that challenge him, push him, and align with his ambition to build something global.
        </p> */}
        <p className="text-[20px] w-[1000px] h-[106px] font-clash-grotesk opacity-100 leading-[1.1] tracking-[-0.02em] font-medium">
          <motion.span 
            // style={{ opacity: line1Opacity }} 
            className="text-white"
          >
            A powerful belief: "The size of the fish doesn't matter; the pond it swims in matters the most."
          </motion.span>
          {" "}
          <motion.span 
            // style={{ opacity: line2Opacity }} 
            className="text-white"
          >
            This is why he thrives in fast-paced, high-growth cities;
          </motion.span>
          {" "}
          <motion.span 
            // style={{ opacity: line3Opacity }} 
            className="text-white"
          >
            environments that challenge him, push him, and align with his ambition to build something global.
          </motion.span>
        </p>
      </div>

    </div>
  );
}


export default ManBehindBusiness