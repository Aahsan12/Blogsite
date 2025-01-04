
import Home from "../app/home/page";
import Section from "../app/section/page";
import React from "react";
import HtmlCss  from "./htmlCss/page";

export const metadata = {
  title: 'Home',
}


export default function demo () {
  return (
      <div>
        <Home/>
        <Section/>
        {/* <HtmlCss/> */}
    </div>
  );
}


