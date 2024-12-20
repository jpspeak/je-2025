import React from "react";
import HeaderTicker from "./HeaderTicker";

function Header({ tickerLink }: { tickerLink?: string }) {
  return (
    <header className="bg-black">
      <HeaderTicker link={tickerLink || ""} />
    </header>
  );
}

export default Header;
