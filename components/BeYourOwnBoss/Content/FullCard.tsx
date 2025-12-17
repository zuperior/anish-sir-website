/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
// BeYourOwnBoss/Content/FullCard.tsx
import React, { CSSProperties, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Counter } from "./Counter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Business data
const businessesDetailedData: Record<string, any> = {
    "booming-bulls-group": {
        icon: "/icons/booming-bulls-logo.png",
        title: "Booming Bulls",
        logo: "/icons/booming-bulls-logo.png",
        description: "The core educational brand led by Anish Sir. Focused on empowering individuals through structured trading courses, mentorship, and market psychology sessions that teach discipline, risk management, and long-term consistency.",
        fullDescription: "The core educational brand led by Anish Sir. Focused on empowering individuals through structured trading courses, mentorship, and market psychology sessions that teach discipline, risk management, and long-term consistency.",
        stats: [
            { value: "75k+", label: "Students Mentored" },
            { value: "336M+", label: "Youtube Views" },
            { value: "100+", label: "Youtube Videos" }
        ],
        website: "www.boomingbulls.com"
    },
    "market-genius": {
        icon: "/icons/market-genius.png",
        title: "Market Genius",
        logo: "/icons/market-genius.png",
        description: "Market Genius is the trading-market updates hub of the Booming Bulls ecosystem, delivering timely, data-backed alerts, market analysis, and trade",
        fullDescription: "Market Genius is the trading-market updates hub of the Booming Bulls ecosystem, delivering timely, data-backed alerts, market analysis, and trade setup notifications to help traders stay informed and act with clarity.",
        website: "www.marketgenius.com"
    },
    "traders-cafe": {
        icon: "/icons/traders-cafe.png",
        title: "Trader's Cafe",
        logo: "/icons/traders-cafe.png",
        description: "Trader's Café is a vibrant concept brought to life under the vision of Anish Sir and the Booming Bulls ecosystem. It is India's first trading-themed café.",
        fullDescription: "Trader's Café is a vibrant concept brought to life under the vision of Anish Sir and the Booming Bulls ecosystem. It is India's first trading-themed café where market learners and professionals come together to experience trading, discussions, and collaboration in a creative, community-driven space.",
        website: "https://www.instagram.com/thetraderscafe__"
    },
    "bb-academy": {
        icon: "/icons/booming-bulls-logo.png",
        title: "Booming Bulls Academy",
        logo: "/icons/booming-bulls-logo.png",
        description: "Our flagship channel, Booming Bulls Academy, has grown to over 256,664 subscribers, making it a trusted space where traders receive structured learning, daily motivation, mindset principles, and market-awareness guidance.",
        fullDescription: "Our flagship channel, Booming Bulls Academy, has grown to over 256,664 subscribers, making it a trusted space where traders receive structured learning, daily motivation, mindset principles, and market-awareness guidance.",
        website: "t.me/boomingbullscompany"
    },
    "bb-india": {
        icon: "/icons/booming-bulls-logo.png",
        title: "Booming Bulls Indian",
        logo: "/icons/booming-bulls-logo.png",
        description: "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest educational movements in India's trading landscape.",
        fullDescription: "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest educational movements in India's trading landscape.",
        website: "t.me/BoomingbullsIndianMarket"
    },
    "exness": {
        title: "Exness (Broker)",
        icon: "ex",
        description: "Anish has worked with several platforms over the years, but he has found that Exness consistently stands out for its reliability, transparency, and seamless trading experience. Its stable execution, competitive spreads, and accurate pricing make it his preferred choice for disciplined trading and informed market analysis.",
        fullDescription: "Exness is a highly trusted global trading platform known for its stability, transparency, and smooth trading experience. With tight spreads, fast execution, and reliable pricing, it provides traders with the precision and consistency they need for disciplined market participation. Whether during high volatility or normal sessions, Exness delivers a dependable environment that supports serious analysis and responsible trading. Its user-friendly interface, quick withdrawals, and honest fee structure make it stand out as one of the most preferred platforms for professional and self-directed traders. Built on clarity and trust, Exness offers a seamless trading experience that aligns perfectly with the principles of discipline, logic, and structure making it a reliable choice for anyone committed to long-term trading success.",
        website: "https://www.exness.global/"
    },
    "funding-friday": {
        title: "FundingFriday (PropFirm)",
        icon: "ff",
        description: "FundedFriday is Anish Sir's preferred prop firm, valued for its clear guidelines, trader-friendly structure, and consistent payout integrity. It offers a dependable pathway for committed traders to demonstrate skill, access larger capital, and building long-term trading discipline.",
        fullDescription: "Funded Friday is a trusted prop firm that gives disciplined traders a real opportunity to trade larger capital through a simple, transparent, and fair evaluation process. It rewards skill, consistency, and proper risk management making it an ideal platform for serious traders who want to grow responsibly without relying on luck or shortcuts. With clear rules, reliable payouts, and no hidden conditions, Funded Friday offers a supportive, trader-first environment. Proudly featured in Yahoo, Benzinga, Insider Monkey, and MarketWatch, it stands out as a professional and credible prop-firm choice for traders committed to long-term success.",
        website: "https://fundedfriday.com/"
    },
    "mazi-finance": {
        title: "MaziFinance (Broker)",
        icon: "mf",
        description: "MaziFinance is a trusted platform for trading and financial services.",
        fullDescription: "MaziFinance is a trading platform offering access to Forex and CFD markets with a user-friendly interface and smooth execution environment. It provides multiple trading instruments, straightforward account setup, and convenient funding options for new and experienced traders. While the platform aims to deliver an accessible trading experience, users are encouraged to review its regulatory standing and conduct proper due diligence to ensure it aligns with their trading and risk-management expectations.",
        website: "https://mazifinance.com/"
    }
};

// eslint-disable-next-line react/display-name
export const FullCard = React.memo(({ cardId, activeSection }: { cardId: string; activeSection: string }) => {
    const data = businessesDetailedData[cardId];
    if (!data) return null;

    const cardStyle: CSSProperties = {
        background: `
    linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.02)
    ),
    linear-gradient(360deg, rgb(48, 3, 3) 0%, rgb(31, 4, 4) 100%)
  `,
        borderRadius: "22px",
        boxShadow: `
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 16px 8px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    inset 1px 0 0 rgba(255, 255, 255, 0.04)
  `
    };

    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const gsapCtx = useRef<gsap.Context | null>(null);

    useEffect(() => {
        const element = descriptionRef.current;
        if (!element || !["BOOMING BULLS", "BB FINSERV", "BOOMING REALM"].includes(activeSection)) {
            // unmount pe cleanup
            if (gsapCtx.current) gsapCtx.current.revert();
            return;
        }

        if (gsapCtx.current) gsapCtx.current.revert();

        const timer = setTimeout(() => {
            gsapCtx.current = gsap.context(() => {
                const text = element.innerText;
                const words = text.split(" ");

                element.innerHTML = words
                    .map(
                        (word) =>
                            `<span class="word" style="color: rgba(255, 255, 255, 0.25)">${word}</span>`
                    )
                    .join(" ");

                const wordSpans = element.querySelectorAll(".word");
                if (!wordSpans.length) return;

                ScrollTrigger.create({
                    trigger: element,
                    start: "top 85%",
                    end: "top 30%",
                    scrub: 1.2,
                    markers: false,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        wordSpans.forEach((word: any, index: number) => {
                            const wordProgress = index / wordSpans.length;
                            gsap.to(word, {
                                color:
                                    progress >= wordProgress
                                        ? "rgba(255, 255, 255, 0.5)"
                                        : "rgba(255, 255, 255, 0.25)",
                                duration: 0.1,
                                overwrite: "auto",
                            });
                        });
                    },
                });
            }, element);
        }, 100);

        return () => {
            clearTimeout(timer);
            if (gsapCtx.current) gsapCtx.current.revert();
        };
    }, [activeSection]);

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.3 }} className="w-full space-y-3.5">
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="relative w-20 h-24">
                    <Image src={data.logo} alt={data.title} fill className="object-contain" />
                </div>
                <h3 className="text-4xl font-medium tracking-[-0.02em] leading-[1.2em] font-clash-display text-white text-center">{data.title}</h3>
            </div>

            <div className="flex gap-x-6 mt-1 mx-auto justify-center items-center">
                <a
                    href="https://www.instagram.com/anishsinghthakur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor">
                        <path d="M 0 8 C 0 4.229 0 2.343 1.172 1.172 C 2.344 0.001 4.229 0 8 0 L 10 0 C 13.771 0 15.657 0 16.828 1.172 C 17.999 2.344 18 4.229 18 8 L 18 10 C 18 13.771 18 15.657 16.828 16.828 C 15.656 17.999 13.771 18 10 18 L 8 18 C 4.229 18 2.343 18 1.172 16.828 C 0.001 15.656 0 13.771 0 10 Z M 15 4.5 C 15 3.672 14.328 3 13.5 3 C 12.672 3 12 3.672 12 4.5 C 12 5.328 12.672 6 13.5 6 C 14.328 6 15 5.328 15 4.5 Z M 9 12 C 7.895 12 7 11.105 7 10 C 7 8.895 7.895 8 9 8 C 10.105 8 11 8.895 11 10 C 11 11.105 10.105 12 9 12 Z M 13 10 C 13 7.791 11.209 6 9 6 C 6.791 6 5 7.791 5 10 C 5 12.209 6.791 14 9 14 C 11.209 14 13 12.209 13 10 Z" />
                    </svg>
                </a>

                <a
                    href="https://www.facebook.com/ianishsinghthakur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" fill="currentColor" overflow="visible">
                        <path d="M 7 11.5 L 9.5 11.5 L 10.5 7.5 L 7 7.5 L 7 5.5 C 7 4.47 7 3.5 9 3.5 L 10.5 3.5 L 10.5 0.14 C 10.174 0.097 8.943 0 7.643 0 C 4.928 0 3 1.657 3 4.7 L 3 7.5 L 0 7.5 L 0 11.5 L 3 11.5 L 3 20 L 7 20 Z" />
                    </svg>
                </a>

                <a
                    href="https://t.me/boomingbullscompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" overflow="visible">
                        <path d="M 1.345 6.974 C 6.591 4.688 10.09 3.181 11.842 2.452 C 16.841 0.373 17.879 0.012 18.556 0 C 18.706 -0.003 19.038 0.034 19.254 0.21 C 19.436 0.357 19.486 0.557 19.51 0.697 C 19.534 0.837 19.564 1.156 19.54 1.405 C 19.27 4.252 18.097 11.159 17.5 14.347 C 17.248 15.695 16.752 16.147 16.27 16.192 C 15.225 16.288 14.432 15.502 13.42 14.838 C 11.835 13.799 10.94 13.152 9.402 12.139 C 7.625 10.968 8.777 10.324 9.79 9.272 C 10.055 8.997 14.66 4.808 14.75 4.428 C 14.76 4.38 14.771 4.203 14.666 4.11 C 14.561 4.016 14.406 4.048 14.293 4.074 C 14.133 4.11 11.603 5.783 6.701 9.092 C 5.981 9.585 5.331 9.826 4.749 9.813 C 4.106 9.799 2.869 9.45 1.951 9.151 C 0.823 8.784 -0.073 8.591 0.005 7.968 C 0.045 7.644 0.492 7.313 1.345 6.974" />
                    </svg>
                </a>

                <a
                    href="https://x.com/anishsthakur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" overflow="visible">
                        <path d="M 15.575 0 L 10.579 5.711 L 6.259 0 L 0 0 L 7.477 9.776 L 0.391 17.875 L 3.425 17.875 L 8.894 11.625 L 13.674 17.875 L 19.776 17.875 L 11.982 7.571 L 18.607 0 Z M 14.511 16.06 L 3.542 1.719 L 5.345 1.719 L 16.191 16.059 Z" />
                    </svg>
                </a>

                <a
                    href="https://www.youtube.com/@BoomingBulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="currentColor" overflow="visible">
                        <path d="M 8.8 11.429 L 14.509 8 L 8.8 4.571 Z M 21.516 2.48 C 21.659 3.017 21.758 3.737 21.824 4.651 C 21.901 5.566 21.934 6.354 21.934 7.04 L 22 8 C 22 10.503 21.824 12.343 21.516 13.52 C 21.241 14.549 20.603 15.211 19.613 15.497 C 19.096 15.646 18.15 15.749 16.698 15.817 C 15.268 15.897 13.959 15.931 12.749 15.931 L 11 16 C 6.391 16 3.52 15.817 2.387 15.497 C 1.397 15.211 0.759 14.549 0.484 13.52 C 0.341 12.983 0.242 12.263 0.176 11.349 C 0.099 10.434 0.066 9.646 0.066 8.96 L 0 8 C 0 5.497 0.176 3.657 0.484 2.48 C 0.759 1.451 1.397 0.789 2.387 0.503 C 2.904 0.354 3.85 0.251 5.302 0.183 C 6.732 0.103 8.041 0.069 9.251 0.069 L 11 0 C 15.609 0 18.48 0.183 19.613 0.503 C 20.603 0.789 21.241 1.451 21.516 2.48" />
                    </svg>
                </a>
            </div>

            <p ref={descriptionRef} className="text-center text-white/45 text-base leading-[1.1em] tracking-[-0.02em] max-w-[818px] mx-auto font-clash-grotesk font-medium">
                {data.fullDescription}
            </p>

            {data.stats && data.stats.length > 0 && (
                <div className="flex items-center justify-center gap-12 py-1 font-clash-display">
                    {data.stats && data.stats.length > 0 && (
                        <div
                            className="
      flex flex-col items-center justify-center
      gap-6
      py-2

      sm:flex-row
      sm:gap-12
    "
                        >
                            {data.stats.map((stat: { value: string; label: string }, idx: number) => (
                                <React.Fragment key={idx}>
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl font-semibold font-raleway leading-[1em] tracking-[-0.05em]">
                                            <Counter
                                                target={parseInt(stat.value)}
                                                suffix={stat.value.replace(/\d+/g, "")}
                                            />
                                        </div>

                                        <span className="text-white/55 font-clash-display text-sm leading-[1.2em] tracking-[-0.02em] whitespace-nowrap">
                                            {stat.label}
                                        </span>
                                    </div>

                                    {/* divider only on desktop */}
                                    {idx < data.stats.length - 1 && (
                                        <div className="hidden sm:block w-px h-[29px] bg-linear-to-b from-white/60 to-white/30" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )}

                </div>
            )}

            {cardId === "booming-bulls-group" && (
                <div className="space-y-6 pt-6.5">
                    <h4 className="text-[26px] font-medium text-white/70 leading-[1.2em] tracking-[-0.02em] font-clash-display">Booming Bulls Group</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.entries({
                            "Booming Bulls Academy": {
                                logo: "/icons/booming-bulls-logo.png",
                                description: "Booming Bulls Group is the umbrella organisation created and led by Anish Singh Thakur, built around the mission of transforming how people learn trading, finance, discipline, and personal growth. It is not just one brand, it is a multi-vertical ecosystem consisting of education, financial research, real-estate, community spaces, market updates, and strategic partnerships.",
                                website: "www.boomingbulls.com"
                            },
                            "Booming Bulls FinServe": {
                                logo: "/icons/booming-bulls-logo.png",
                                description: "The financial services extension of Booming Bulls. It operates as a SEBI-registered Research Analyst firm and offers data-driven, technically grounded market research, trade-setup signals, and resources to help self-directed traders make informed decisions.",
                                website: "www.bbvip.com"
                            },
                            "Booming Realm": {
                                logo: "/icons/booming-realm.png",
                                description: "Founded under the vision of Anish Sir, Booming Realm is the Dubai-focused real-estate vertical of the Booming Bulls ecosystem. It represents trust, transparency, and smart investment connecting financial growth with premium real-estate opportunities across Dubai's most promising developments.",
                                website: "www.boomingrealmllc.com"
                            }
                        }).map(([title, data]) => {
                            let cardGradient = cardStyle;
                            if (activeSection === "BB FINSERV" && title === "Booming Bulls FinServe") {
                                cardGradient = { ...cardStyle, background: "linear-gradient(360deg, rgb(66, 3, 3) 0%, rgb(153, 17, 17) 100%)" };
                            }
                            if (activeSection === "BOOMING REALM" && title === "Booming Realm") {
                                cardGradient = { ...cardStyle, background: "linear-gradient(360deg, rgb(66, 3, 3) 0%, rgb(153, 17, 17) 100%)" };
                            }
                            return (
                                <motion.div key={title} layout transition={{ duration: 0.3 }} className="rounded-[22px] p-6 pt-5 pl-4 text-white w-full cursor-pointer transition-all duration-300 hover:border-[#BB2215] hover:scale-[1.02]" style={cardGradient}>
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="relative w-13 h-14 shrink-0">
                                            <Image src={data.logo} alt={title} fill className="object-contain w-11 h-[55px]" />
                                        </div>
                                        <h5 className="font-medium text-white/80 text-[19px] leading-[1.2em] font-clash-display tracking-[-0.02em] pt-5">{title}</h5>
                                    </div>
                                    <p className="text-white/65 text-sm leading-[1.2em] tracking-[0.01em] font-clash-grotesk mb-4">{data.description}</p>
                                    {data.website && (
                                        <a href={`https://${data.website.replace("www.", "")}`} target="_blank" rel="noopener noreferrer" className="text-[#DCB5B2] hover:text-[#BB2215] transition-colors text-sm font-medium inline-flex items-center gap-2 underline font-clash-display leading-[1.2em]">
                                            {data.website}
                                            <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45" />
                                        </a>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}
        </motion.div>
    );
}, (prevProps, nextProps) => prevProps.cardId === nextProps.cardId && prevProps.activeSection === nextProps.activeSection);
