import Link from "next/link";
import React from "react";

const page = () => {
  const platforms = [
    {
      name: "Youtube",
      url: "https://www.youtube.com/@BoomingBulls",
      stat: "4M+ Subscribers",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/anishsinghthakur/",
      stat: "700K+ Followers",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ianishsinghthakur",
      stat: "60K+ Followers",
    },
    {
      name: "Twitter/X",
      url: "https://x.com/anishsthakur",
      stat: "700K+ Followers",
    },
    {
      name: "Telegram",
      url: "https://t.me/boomingbullscompany",
      stat: "250k+ Subscribers",
    },
  ];

  return (
    <main className="bg-[#F2EFE9]/90 min-h-screen flex flex-col justify-center items-center gap-12 relative overflow-hidden px-6 md:px-0 py-12 md:py-0">
      {/* Background sparkles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: "url('/sparkles.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row justify-center md:gap-12 gap-8 z-10 items-center md:items-stretch w-full max-w-6xl">
        {platforms.map((item, index) => (
          <React.Fragment key={item.name}>
            {/* Link Block */}
            <div className="flex flex-col items-center md:items-start gap-2.5 min-w-[120px]">
              <Link
                href={item.url}
                className="font-semibold text-black/70 hover:text-[#BB2215] text-[24px] md:text-[32px] tracking-tighter leading-[1.3em] underline"
              >
                {item.name}
              </Link>
              <p className="font-regular text-black/70 text-base md:text-lg -tracking-tighter leading-[1.2em] text-center md:text-left">
                {item.stat}
              </p>
            </div>

            {/* Separator Line — skip after last item */}
            {index !== platforms.length - 1 && (
              <div className="hidden md:block h-full min-h-[78px] w-px bg-linear-to-b from-[#AEADB0] to-black/50" />
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};

export default page;
