/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { gsap, ScrollTrigger } from "gsap/all";
import { FullCard } from "./FullCard";
import { Card } from "./Card";

declare global {
    interface Window {
        lenisDisabled?: boolean;
    }
}

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

// Heading text mapping
const headingText: Record<string, string> = {
    OVERVIEW: "Be your own Boss",
    "MARKET GENIUS": "Market Genius",
    "TRADERS CAFE": "Trader's Cafe",
    FAVOURITES: "Favourites",
    REFERRALS: "Referrals",
    TELEGRAMS: "Telegram Channels",
    "BOOMING BULLS": "Booming Bulls",
    "BB FINSERV": "BB FinServ",
    "BOOMING REALM": "Booming Realm",
};

// Card style
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

export const BeYourOwnBossContent = ({ activeSection, onSectionChange }: { activeSection: string; onSectionChange?: (section: string) => void }) => {
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const gsapInstanceRef = useRef<any>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = descriptionRef.current;

        if (gsapInstanceRef.current) {
            gsapInstanceRef.current.kill();
        }
        ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.vars.id === "boss-text-trigger") {
                trigger.kill();
            }
        });

        if (!element || !["BOOMING BULLS", "BB FINSERV", "BOOMING REALM"].includes(activeSection)) {
            return;
        }

        const timer = setTimeout(() => {
            const text = element.innerText;
            const words = text.split(" ");

            element.innerHTML = words
                .map((word) => `<span class="word" style="color: rgba(255, 255, 255, 0.25)">${word}</span>`)
                .join(" ");

            const wordSpans = element.querySelectorAll(".word");

            if (wordSpans.length === 0) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    id: "boss-text-trigger",
                    trigger: element,
                    start: "top 85%",
                    end: "top 30%",
                    scrub: 1.2,
                    markers: false,
                    onUpdate: (self) => {
                        wordSpans.forEach((word: any, index: number) => {
                            const progress = self.progress;
                            const wordProgress = index / wordSpans.length;

                            if (progress >= wordProgress) {
                                gsap.to(word, {
                                    color: "rgba(255, 255, 255, 0.5)",
                                    duration: 0.1,
                                    overwrite: "auto"
                                });
                            } else {
                                gsap.to(word, {
                                    color: "rgba(255, 255, 255, 0.25)",
                                    duration: 0.1,
                                    overwrite: "auto"
                                });
                            }
                        });
                    }
                }
            });

            gsapInstanceRef.current = tl;
        }, 100);

        return () => {
            clearTimeout(timer);
            if (gsapInstanceRef.current) {
                gsapInstanceRef.current.kill();
            }
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [activeSection]);

    const heading = headingText[activeSection] || "Be your own Boss";

    const myBusinesses = [
        {
            id: "booming-bulls-group",
            icon: <Image src="/icons/booming-bulls-logo.png" width={26} height={32} alt="Logo" className="inline-block mr-2 mb-1" />,
            title: "Booming Bulls Group",
            text: "The core educational brand led by Anish Sir. Focused on empowering individuals through structured trading courses, mentorship, and"
        },
        {
            id: "market-genius",
            icon: <Image src="/icons/market-genius.png" width={25} height={32} alt="Market Genius" className="inline-block mr-2 mb-1" />,
            title: "Market Genius",
            text: "Market Genius is the trading-market updates hub of the Booming Bulls ecosystem, delivering timely, data-backed alerts, market analysis, and trade"
        },
        {
            id: "traders-cafe",
            icon: <Image src="/icons/traders-cafe.png" width={32} height={32} alt="Trader's Cafe" className="inline-block mr-2 mb-1" />,
            title: "Trader's Cafe",
            text: "Trader's Café is a vibrant concept brought to life under the vision of Anish Sir and the Booming Bulls ecosystem. It is India's first trading-themed"
        }
    ];

    const favouriteBrokers = [
        {
            id: "exness",
            icon: <Image src="/icons/exness.png" width={30} height={30} alt="Exness" className="inline-block mr-2 mb-1" />,
            title: "Exness (Broker)",
            text: "Anish has worked with several platforms over the years, but he has found that Exness consistently stands out for its reliability, transparency, and seamless trading experience. Its stable execution, competitive spreads, and accurate pricing make it his preferred choice for disciplined trading and informed market analysis."
        },
        {
            id: "funding-friday",
            icon: <Image src="/icons/funding-friday.png" width={33} height={23} alt="FundingFriday" className="inline-block mr-2 mb-1" />,
            title: "FundingFriday (PropFirm)",
            text: "FundedFriday is Anish Sir's preferred prop firm, valued for its clear guidelines, trader-friendly structure, and consistent payout integrity. It offers a dependable pathway for committed traders to demonstrate skill, access larger capital, and building long-term trading discipline."
        },
        {
            id: "mazi-finance",
            icon: <Image src="/icons/mazi-finance.png" width={27} height={31} alt="MaziFinance" className="inline-block mr-2 mb-1" />,
            title: "MaziFinance (Broker)",
            text: "MaziFinance is a platform Anish appreciates for its user-centric design, reliable trade execution, and responsive support framework. Its balanced combination of technology, accessibility, and straightforward pricing makes it a solid choice for traders seeking a smooth and efficient trading environment."
        }
    ];

    const BBTelegramIcon = () => (
        <div className="relative inline-block w-8 h-8 mr-2 mb-1">
            <Image src="/icons/booming-bulls-logo.png" width={27} height={33} alt="Booming Bulls Logo" className="object-contain" />
            <div className="absolute -bottom-0.5 -right-px">
                <Image src="/icons/bb-telegram.png" width={15} height={15} alt="Telegram Icon" className="object-contain" />
            </div>
        </div>
    );

    const telegramChannels = [
        {
            id: "bb-academy",
            icon: BBTelegramIcon,
            title: "Booming Bulls Academy",
            text: "Our flagship channel, Booming Bulls Academy, has grown to over 256,664 subscribers, making it a trusted space where traders receive "
        },
        {
            id: "bb-india",
            icon: BBTelegramIcon,
            title: "Booming Bulls India",
            text: "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest"
        }
    ];

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.stopPropagation();

            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            const isAtTop = scrollTop === 0;

            if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
                if (window.lenis) {
                    window.lenisDisabled = false;
                }
            } else {
                if (window.lenis) {
                    window.lenisDisabled = true;
                }
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            if (window.lenis) {
                window.lenisDisabled = false;
            }
        };
    }, [activeSection]);

    const cardMap: Record<string, string> = {
        "BOOMING BULLS": "booming-bulls-group",
        "BB FINSERV": "booming-bulls-group",
        "BOOMING REALM": "booming-bulls-group",
    };

    if (["BOOMING BULLS", "BB FINSERV", "BOOMING REALM"].includes(activeSection)) {
        return (
            <div ref={scrollContainerRef} className="flex-1 bg-black lg:bg-black pt-[65px] pb-16 px-4 lg:px-6 h-full overflow-y-auto no-scrollbar border-[#8A1A0E] rounded-xl lg:rounded-none relative" style={{ pointerEvents: "auto" }}>
                <div className="max-w-5xl xl:max-w-6xl mx-auto">
                    <FullCard cardId={cardMap[activeSection]} activeSection={activeSection} />
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 bg-black pt-2 border-[#8A1A0E] lg:border-0 rounded-xl lg:rounded-none lg:pt-[65px] pb-0 lg:pb-20 relative h-full overflow-hidden">
            <h2
                className={`
    font-medium font-clash-display text-white text-center
    tracking-[-0.02em] leading-[1.2em] mb-5 pt-4 lg:pt-0
    text-2xl sm:text-3xl lg:text-4xl
    ${activeSection === "OVERVIEW" ? "hidden lg:block" : ""}
  `}
            >
                {heading}
            </h2>

            {activeSection === "OVERVIEW" && (
                <div className="hidden lg:block absolute bottom-0 right-0 w-[260px] h-[476px] pointer-events-none overflow-hidden z-20">
                    <Image src="/anish-sir-beyourownboss.png" alt="Anish Sir" fill className="object-cover object-right opacity-100 brightness-110 translate-x-4" priority />
                </div>
            )}

            <div ref={scrollContainerRef} className="pt-0 pl-4 md:px-8 relative z-10 h-full overflow-y-auto overflow-x-hidden no-scrollbar" style={{ pointerEvents: "auto" }}>
                {activeSection === "OVERVIEW" && (
                    <div className="space-y-5 pb-5 lg:pb-20">
                        <section className="pt-4 lg:pt-0">
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">Projects</p>
                            <div
                                className="
    flex gap-[15px]
    overflow-x-auto no-scrollbar
    pr-[50px]
    lg:flex-wrap lg:overflow-visible lg:pr-0
  "
                            >
                                {myBusinesses.map((item) => <Card key={item.id} {...item} activeSection={activeSection} onSectionChange={onSectionChange} />)}
                            </div>
                        </section>
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">Favourite Brokers</p>
                            <div
                                className="
    flex gap-[15px]
    overflow-x-auto no-scrollbar
    pr-[50px]
    lg:flex-wrap lg:overflow-visible lg:pr-0
  "
                            >
                                {favouriteBrokers.map((item) => <Card key={item.id} {...item} activeSection={activeSection} onSectionChange={onSectionChange} />)}
                            </div>
                        </section>
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">Telegram Channels</p>
                            <div
                                className="
    flex gap-[15px]
    overflow-x-auto no-scrollbar
    pr-[50px]
    lg:flex-wrap lg:overflow-visible lg:pr-0
  "
                            >
                                {telegramChannels.map((item) => <Card key={item.id} {...item} activeSection={activeSection} onSectionChange={onSectionChange} />)}
                            </div>
                        </section>
                    </div>
                )}

                {activeSection === "FAVOURITES" && (
                    <div className="space-y-5 pb-20">
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">Favourite Brokers</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 items-start justify-center">
                                {favouriteBrokers.map((item) => {
                                    const detailed = businessesDetailedData[item.id];
                                    const description = detailed?.fullDescription || item.text;
                                    return (
                                        <div key={item.id} className="rounded-[22px] lg:rounded-none p-5 text-white w-[calc(100%-1rem)] md:w-full mr-4 md:mr-0 cursor-pointer transition-all duration-300 hover:border-[#BB2215] hover:scale-[1.02]" style={cardStyle}>
                                            <div className="flex items-start gap-1 mb-2">
                                                {item.icon}
                                                <span className="font-medium font-clash-display text-[19px] leading-[1.2em] tracking-[-0.02em] flex-1">
                                                    {item.title} <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45 inline ml-2" />
                                                </span>
                                            </div>
                                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="text-white/65 text-[14px] font-clash-grotesk tracking-[-0.03em] leading-[1.2em] mb-3">{description}</motion.p>
                                            {detailed?.website && (
                                                <a href={detailed.website} target="_blank" rel="noopener noreferrer" className="text-[#DCB5B2] hover:text-[#BB2215] transition-colors text-sm font-medium inline-flex items-center gap-2 underline">
                                                    {detailed.website}
                                                    <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45" />
                                                </a>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                )}

                {activeSection === "REFERRALS" && (
                    <div className="space-y-5">
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">Favourite Brokers</p>
                            <div
                                className="
    flex gap-[15px]
    overflow-x-auto no-scrollbar
    pr-[70px]
    lg:flex-wrap lg:overflow-visible lg:pr-0
  "
                            >

                                {favouriteBrokers.map((item) => <Card key={item.id} {...item} activeSection={activeSection} onSectionChange={onSectionChange} />)}
                            </div>
                        </section>
                    </div>
                )}

                {activeSection === "TELEGRAMS" && (
                    <div className="space-y-5 pb-20">
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">Telegram Channels</p>
                            <div className="flex flex-wrap gap-[15px]">
                                {telegramChannels.map((item) => (
                                    <div key={item.id} className="rounded-[22px] lg:rounded-none p-[22px] pt-[30px] pl-6 text-white w-[calc(100%-1rem)] sm:max-w-[350px] mr-4 sm:mr-0 cursor-pointer transition-all duration-300 hover:border-[#BB2215] hover:scale-[1.02]" style={cardStyle}>
                                        <div className="flex items-start gap-1 mb-2">
                                            {typeof item.icon === "function" ? <item.icon /> : item.icon}
                                            <span className="font-medium font-clash-display text-[19px] leading-[1.2em] tracking-[-0.02em] flex-1">
                                                {item.title} <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45 inline ml-2" />
                                            </span>
                                        </div>
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="text-white/70 text-sm font-clash-grotesk tracking-[0.01em] leading-[1.2em] mb-4">{businessesDetailedData[item.id]?.fullDescription}</motion.p>
                                        {businessesDetailedData[item.id]?.website && (
                                            <a href={`https://${businessesDetailedData[item.id].website.replace("www.", "")}`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#BB2215] transition-colors text-sm font-medium inline-flex items-center gap-2 underline">
                                                {businessesDetailedData[item.id].website}
                                                <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {activeSection === "MARKET GENIUS" && (
                    <div className="space-y-5">
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">My Businesses</p>
                            <div className="flex flex-wrap gap-[15px]">
                                {[myBusinesses[1]].map((item) => (
                                    <div key={item.id} className="rounded-[22px] lg:rounded-none p-[22px] pt-[30px] pl-6 text-white w-full sm:w-[350px] cursor-pointer transition-all duration-300 hover:border-[#BB2215] hover:scale-[1.02] mr-4 lg:mr-0" style={cardStyle}>
                                        <div className="flex items-start gap-1 mb-2">
                                            {item.icon}
                                            <span className="font-medium font-clash-display text-[19px] leading-[1.2em] tracking-[-0.02em] flex-1">
                                                {item.title} <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45 inline ml-2" />
                                            </span>
                                        </div>
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="text-white/70 text-sm font-clash-grotesk tracking-[0.01em] leading-[1.2em] mb-4">{businessesDetailedData[item.id]?.fullDescription}</motion.p>
                                        {businessesDetailedData[item.id]?.website && (
                                            <a href={`https://${businessesDetailedData[item.id].website.replace("www.", "")}`} target="_blank" rel="noopener noreferrer" className="text-[#DCB5B2] hover:text-[#BB2215] transition-colors text-sm font-medium inline-flex items-center gap-2 underline">
                                                {businessesDetailedData[item.id].website}
                                                <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {activeSection === "TRADERS CAFE" && (
                    <div className="space-y-5">
                        <section>
                            <p className="text-white/75 text-sm tracking-[-0.01em] leading-[1.3em] font-clash-grotesk font-normal mb-3">My Businesses</p>
                            <div className="flex flex-wrap gap-[15px]">
                                {[myBusinesses[2]].map((item) => (
                                    <div key={item.id} className="rounded-[22px] lg:rounded-none p-[22px] pt-[30px] pl-6 text-white w-[calc(100%-1rem)] sm:max-w-[350px] cursor-pointer transition-all duration-300 hover:border-[#BB2215] hover:scale-[1.02] mr-4" style={cardStyle}>
                                        <div className="flex items-start gap-1 mb-2">
                                            {item.icon}
                                            <span className="font-medium font-clash-display text-[19px] leading-[1.2em] tracking-[-0.02em] flex-1">
                                                {item.title} <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45 inline ml-2" />
                                            </span>
                                        </div>
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="text-white/70 text-sm font-clash-grotesk tracking-[0.01em] leading-[1.2em] mb-4">{businessesDetailedData[item.id]?.fullDescription}</motion.p>
                                        {businessesDetailedData[item.id]?.website && (
                                            <a href={businessesDetailedData[item.id].website} target="_blank" rel="noopener noreferrer" className="text-[#DCB5B2] hover:text-[#BB2215] transition-colors text-sm font-medium inline-flex items-center gap-2 underline">
                                                {businessesDetailedData[item.id].website.replace("https://", "")}
                                                <Image src="/arrow.svg" width={9} height={15} alt="arrow" className="rotate-45" />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
};
