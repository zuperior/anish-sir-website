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
    <main className="bg-[#F2EFE9]/90 h-screen flex-center relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 opacity-10">
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
      <div className="flex justify-center gap-12 z-10 items-stretch">
        {platforms.map((item, index) => (
          <React.Fragment key={item.name}>
            {/* Link Block */}
            <div className="flex-center flex-col gap-2.5">
              <Link
                href={item.url}
                className="font-semibold text-black/70 hover:text-[#BB2215] text-[32px] tracking-tighter leading-[1.3em] underline"
              >
                {item.name}
              </Link>
              <p className="font-regular text-black/70 text-lg -tracking-tighter leading-[1.2em]">
                {item.stat}
              </p>
            </div>

            {/* Separator Line — skip after last item */}
            {index !== platforms.length - 1 && (
              <div className="h-full min-h-[78px] w-px bg-linear-to-b from-[#AEADB0] to-black/50" />
            )}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};

export default page;
