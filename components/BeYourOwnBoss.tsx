"use client";

import React, { useState } from "react";
import { BeYourOwnBossSidebar } from "./BeYourOwnBoss/Sidebar";
import { BeYourOwnBossContent } from "./BeYourOwnBoss/Content/index";

const BeYourOwnBoss = () => {
  const [activeSection, setActiveSection] = useState("OVERVIEW");

  const menuItems = [
    "OVERVIEW",
    "BOOMING BULLS",
    "BB FINSERV",
    "BOOMING REALM",
    "MARKET GENIUS",
    "TRADERS CAFE",
    "FAVOURITES",
    "REFERRALS",
    "TELEGRAMS",
  ];

  return (
    <div
      id="beYourOwnBoss"
      className="h-screen bg-[#8A1A0E] text-white flex flex-col lg:flex-row"
    >
      {/* Sidebar (handles desktop + mobile internally) */}
      <BeYourOwnBossSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuItems={menuItems}
      />

      {/* Content */}
      <div className="flex-1 bg-[#8A1A0E] overflow-hidden border-8 lg:border-0 rounded-[10px] lg:rounded-none" style={{ borderColor: '#8A1A0E' }}>
        <BeYourOwnBossContent
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>
    </div>
  );
};

export default BeYourOwnBoss;
