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
      className="h-screen bg-black text-white flex flex-col lg:flex-row"
    >
      {/* Sidebar (handles desktop + mobile internally) */}
      <BeYourOwnBossSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuItems={menuItems}
      />

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <BeYourOwnBossContent
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>
    </div>
  );
};

export default BeYourOwnBoss;
