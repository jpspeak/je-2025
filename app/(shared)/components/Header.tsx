import React from "react";
import Ticker from "./Ticker";

function Header({ tickerLink }: { tickerLink?: string }) {
  return (
    <header>
      <Ticker link={tickerLink || ""} />
    </header>
  );
}

export default Header;
