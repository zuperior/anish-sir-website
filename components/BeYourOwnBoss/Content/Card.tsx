// BeYourOwnBoss/Content/Card.tsx
import React, { CSSProperties } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Card = ({ id, icon, title, text, activeSection, onSectionChange }: any) => {
    const IconComponent = typeof icon === "function" ? icon : null;
    const isClickable = activeSection === "OVERVIEW" && ["booming-bulls-group", "market-genius", "traders-cafe"].includes(id);

    const handleClick = () => {
        if (!onSectionChange) return;
        const sectionMap: Record<string, string> = {
            "booming-bulls-group": "BOOMING BULLS",
            "market-genius": "MARKET GENIUS",
            "traders-cafe": "TRADERS CAFE",
            "exness": "FAVOURITES",
            "funding-friday": "FAVOURITES",
            "mazi-finance": "FAVOURITES",
            "bb-academy": "TELEGRAMS",
            "bb-india": "TELEGRAMS",
        };
        const section = sectionMap[id];
        if (section) onSectionChange(section);
    };

    const cardStyle: CSSProperties = {
        background: "linear-gradient(360deg, rgb(48, 3, 3) 0%, rgb(31, 4, 4) 100%)",
        borderRadius: "22px",
        boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(255, 255, 255, 0.07) 1px 0px 0px inset, rgba(0, 0, 0, 0.02) 0px -1px 0px inset, rgba(0, 0, 0, 0.02) -1px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 2px 8px"
    };

    return (
        <div
            className={`rounded-[22px] p-[22px] pt-[30px] pl-6 text-white w-full sm:w-[350px] shrink-0 cursor-pointer transition-all duration-200 hover:border-[#BB2215] hover:scale-[1.02] ease-in-out ${isClickable ? "cursor-pointer" : "cursor-default"}`}
            style={cardStyle}
            onClick={handleClick}
        >
            <div className="flex items-start gap-1 mb-2">
                {IconComponent ? <IconComponent /> : icon}
                <span className="font-medium font-clash-display text-[19px] leading-[1.2em] tracking-[-0.02em] pt-[5px] flex-1 text-white/80">
                    {title} <span className="text-white/60">↗</span>
                </span>
            </div>
            <p className="text-white/65 font-normal text-sm font-clash-grotesk tracking-[0.01em] leading-[1.2em] max-w-[300px]">{text}</p>
        </div>
    );
};
