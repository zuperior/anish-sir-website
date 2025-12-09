"use client";
import { useState } from "react";
import Image from "next/image";

 export default function HobbiesSection() {
   const [active, setActive] = useState(0);
 
   const slides = [
     {
       image: "/airplane.jpg",
       title: "FITNESS, DISCIPLINE& DAILY RITUALS",
       content:
         "A strong advocate of physical excellence, he never compromises on his workout. Whether he is in India or Dubai, travelling or teaching, fitness remains a non-negotiable foundation of his routine. He also writes daily journal entries, reflecting on his performance, thoughts, and goals. ",
     },
     {
       image: "/Content.png",
       title: "A MINDSET BUILT FOR GROWTH",
       content:
         "Anish lives by a powerful belief: The size of the fish doesn't matter; the pond it swims in matters the most. This is why he chooses to live in fast-paced, high-growth cities; environments that challenge him, push him, and align with his ambition to build something global.",
     },
     {
       image: "/card1.png",
       title: "A MAN WITH A LEGACY, NOT JUST A GOAL",
       content:
         "Anish is building something much larger than a business, he is building a movement.  Help people become the best version of themselves mentally, emotionally, financially, and spiritually And everything he builds carries this purpose.  A movement that stands for:  • courage  • discipline  • mindset  • self-belief  • financial literacy  • personal transformation  His goal is simple: Help people become the best version of themselves mentally, emotionally, financially, and spiritually And everything he builds carries this purpose.",
     },
     {
       image: "/spritiual1.png",
       title: "A LEADER WHO BUILDS LEADERS",
       content:
         "For Anish, success is not personal, it is collective. He believes deeply in training, upgrading, and empowering his team to stay aligned with global standards. He invests his time into mentoring his people, ensuring they grow in knowledge, mindset, and discipline, just like his students.",
     },
   ];
 
   return (
     <div className="min-h-screen bg-[#151515] flex items-center justify-center p-7">
       <div className="w-full ">
         {/* SLIDER */}
         <div className="flex gap-4 items-center justify-center overflow-hidden">
           {slides.map((s, i) => {
             const isActive = i === active;
 
             return (
               <div
                 key={i}
                 onMouseEnter={() => setActive(i)}
                 className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-400`}
                 style={{
                   width: isActive ? "480px " : "240px",
                   height: "550px",
                 }}
               >
                 {/* BG IMAGE */}
                 <Image
                   src={s.image}
                   alt={s.title}
                   fill
                   className={`object-cover transition-all duration-400`}
                 />
 
                 {/* CONTENT */}
                 <div
                   className={`absolute bottom-0 left-0 right-0 text-white font-clash-grotesk transition-all duration-400 ${
                     isActive
                       ? "opacity-100 translate-y-0 pointer-events-none  bg-linear-to-t from-black to-transparent px-10 pb-10"
                       : "opacity-0 translate-y-6"
                   }`}
                 >
                   <h2 className="text-4xl font-medium leading-tight uppercase mb-3">
                     {s.title}
                   </h2>
                   <p className="text-white/70 font-medium  text-base leading-5">{s.content}</p>
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     </div>
   );
 }