import {
  PiStrategyBold as Strategy,
  PiDatabaseFill as Resources,
  PiBrainFill as Mindset,
} from "react-icons/Pi";
import { BsPersonWorkspace as Workshops } from "react-icons/bs";
import StickyCard from "./StickyCard";

const WhatWeDo = () => {
  const cardsData = [
    {
      icon: <Strategy />,
      className: "top-20 bg-teal-800",
      title: "Strategisk rådgivning",
      description:
        "Vi nøye analyserer dine behov og mål for å utvikle en skreddersydd strategi som passer perfekt til din virksomhet. Vår erfarne ekspertise gir deg verdifull veiledning og innsikt som optimaliserer driften og gir deg konkurransefortrinn i markedet. Ta kontakt med oss for å oppnå din virksomhets suksess.",
    },
    {
      icon: <Resources />,
      className: "top-24 bg-orange-400",
      title: "Kurs og prosesser for bedriftsutvikling",
      description:
        "Vi hjelper deg med å utnytte ressursene dine ved å aktivere og utnytte potensialet du kanskje ikke er klar over at du har. Vår tilnærming skaper større dialog og bredde mellom gründere og rådgivere, samtidig som vi utvikler kommunikasjonsmetoder som gir rom for relasjonelle og faglige kvaliteter og øker synligheten.",
    },
    {
      icon: <Workshops />,
      className: "top-28 bg-sky-800",
      title: "Samlinger og workshops",
      description:
        " Våre samlinger og workshops er dedikert til å fremme utradisjonelle tanker og nysgjerrighet. Vi legger vekt på å avdekke og utvikle hverandres ressurser, og skaper en atmosfære med aktiv involvering og begeistring gjennom engasjerende samhandlinger og tett kontakt. Dette bidrar til å styrke teamet og skape positive resultater.",
    },
    {
      icon: <Mindset />,
      className: "top-36 bg-purple-800",
      title: "Growth Mindset",
      description:
        " Growth Mindset-filosofien bygger på kontinuerlig læring og utvikling, der fokus ligger på prosessen fremfor bare resultatet. Vi hjelper deltakerne med å oppdage og utnytte ressursene som kan være skjult under måloppnåelsen. Gjennom å gi deltakerne frihet til å eksperimentere og utforske, bidrar vi til å drive utviklingen og veksten av bedriften.",
    },
  ];

  return (
    <div className="bg-black relative">
      <div className="w-full h-full absolute right-0 top-0 bg-gradient-to-r  from-sky-600  to-pink-600 blur-xl opacity-20 "></div>
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto flex justify-between gap-5 py-28 xl:py-20 md:pt-5 px-10  md:flex-col  sm:px-5 sm:pb-5" data-aos="fade-up" data-aos-duration="3000">
        <div className="  pt-10 w-1/2 sm:pt-0 md:w-full ">
          <div className="sticky top-40 mb-20 md:mb-5 sm:mb-0">
            <h2 className="text-4xl font-semibold lg:text-3xl sm:text-xl pb-5 sm:pb-2">
              Løsninger til dine behove
            </h2>
            <p className="2xl:w-2/3 text-2xl xl:text-xl lg:text-lg sm:text-sm">
              Vi tilbyr et bredt spekter av tjenester designet for å hjelpe deg
              med å oppnå dine mål, fra strategisk rådgivning og prosjektledelse
              til opplæring og teknisk støtte. Vårt erfarne team er dedikert til
              å levere skreddersydde løsninger som passer dine spesifikke behov.
            </p>
          </div>
        </div>
        <div className="w-2/4  md:w-full">
          {cardsData.map((card, index) => (
            <StickyCard
              key={index}
              icon={card.icon}
              className={card.className}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
