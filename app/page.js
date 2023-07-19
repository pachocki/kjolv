"use client";
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import HowWeWork from "./components/HowWeWork";
import OurTeam from "./components/OurTeam";
import AOS from "aos";
import "aos/dist/aos.css";

const heroDescription = `Skap bærekraftig vekst, dypt engasjement og langvarig suksess ved
å utnytte kraften i innovativ kommunikasjon og kontinuerlig
utvikling.`;

const aboutTitle = "Vår Dedikasjon til Deg";
const aboutDescription = `KJØLV AS er et samarbeid mellom en skuespiller fra Rogaland Teater
og rådgivere fra Innovasjon Norge. Vårt mål er å skape en bredere
dialog mellom gründere og rådgivere, der ulike behov blir møtt. Vi
tror på å aktivere uutnyttede ressurser og fremme personlig
utvikling uten behov for en krise. Gjennom innovativ kommunikasjon
og årelang erfaring tilbyr vi kurs og prosesser som skaper vekst og
engasjement i bedrifter.`;
const aboutImage = "/workshop.png";

const missionImage = "/mission.png";
const missionTitle = "Aktiverer ressurser, bygger broer og frigjør potensialet";
const missionDescription = `På KJØLV er vårt mål å styrke enkeltpersoner og bedrifter ved å aktivere 
deres skjulte ressurser og fremme et vekstorientert tankesett. Vi ønsker å skape et miljø der alle kan bidra
, og øke engasjementet og forståelsen på tvers av arbeidsoppgaver og avdelinger. Gjennom våre tjenester, 
inkludert workshops og kommunikasjonstrening, hjelper vi organisasjoner med å bygge sterke relasjoner, 
inspirere entusiasme og frigjøre deres fulle potensial.`;
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="min-h-screen" >
      <Hero
        line1="Vi er her for å hjelpe deg"
        line2="med å utnytte ditt fulle potensial."
      
        description={heroDescription}
        image="/hero1.png"
      />
      <HowWeWork />
      <AboutUs
        className="flex-row-reverse"
        image={aboutImage}
        title={aboutTitle}
        description={aboutDescription}
      />
      <AboutUs
        image={missionImage}
        title={missionTitle}
        description={missionDescription}
      />
      <WhatWeDo />
      <OurTeam />
    </main>
  );
}
