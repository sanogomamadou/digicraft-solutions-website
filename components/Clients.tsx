"use client";

import React from "react";

import { companies, temoignages } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="temoignages" className="py-20">
      <h1 className="heading">
        Ils nous ont fait confiance… 
        <span className="text-purple"> et ils en parlent mieux que nous.</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={temoignages}
            direction="right"
            speed="slow"
          />
        </div>

      </div>
    </section>
  );
};

export default Clients;
