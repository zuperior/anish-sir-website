"use client";

import React, { useState } from "react";
import { BeYourOwnBossSidebar } from "./BeYourOwnBoss/Sidebar";
import { BeYourOwnBossContent } from "./BeYourOwnBoss/Content";

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
    <div className="flex h-screen bg-black text-white">
      <BeYourOwnBossSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuItems={menuItems}
      />
      <BeYourOwnBossContent
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </div>
  );
};

export default BeYourOwnBoss;