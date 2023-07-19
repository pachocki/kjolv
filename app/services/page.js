import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import WhatWeDo from "../components/WhatWeDo";

const Services = () => {
  return (
    <div>
      <Hero
        line1="Veiledning Mot Suksess og Vekst"
        line2=""
        image="/services.png"
        description="Vårt erfarne rådgiverteam tilbyr skreddersydde løsninger og strategisk veiledning for fremtidsrettede bedrifter. Sammen skaper vi en sterk plattform for varig suksess gjennom innovasjon og engasjement. Ta det første skrittet mot suksess i dag."
      />
      <div>
        <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto text-black bg-white  pt-10 pb-20 px-10  md:pt-5 md:pb-10 sm:px-5 sm:pt-0 sm:pb-5" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="w-6/7 text-[2vw] font-bold lg:w-full lg:text-2xl md:text-xl sm:text-lg xs:text-[1rem]">
            I våre tjenester legger vi stor vekt på å forstå dine unike behov og
            mål. Vi tilbyr skreddersydde løsninger som driver bærekraftig vekst
            og innovasjon. Vår erfarne veiledning hjelper deg med å utnytte ditt
            fulle potensial og skape engasjerende og effektive
            kommunikasjonsstrategier. Sammen bygger vi broer mot suksess og
            skaper en inspirerende arbeidsplass der mangfold og aktiv
            involvering blomstrer. Ta kontakt med oss i dag for å starte din
            reise mot fremtidig suksess.
          </h2>
        </div>
        <div className=" flex items-center justify-center w-full h-[60vh] m-auto  bg-[url('/mission.png')] bg-fixed bg-center bg-cover sm:h-[40vh] "></div>
        <WhatWeDo />
        <HowWeWork />
      </div>
    </div>
  );
};

export default Services;
