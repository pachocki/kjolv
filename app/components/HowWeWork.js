import {
  BsPeopleFill as People,
  BsFillLightbulbFill as Idea,
} from "react-icons/bs";
import { AiTwotoneSetting as Process } from "react-icons/ai";
import { FaFlagCheckered as Finish } from "react-icons/fa";

const HowWeWork = () => {
  return (
    <div className="bg-white text-black  p-10 sm:px-5 sm:pb-5 sm:pt-4 ">
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto ">
        <div className="flex justify-between pb-20 lg:pb-5 md:gap-2 md:flex-col md:items-center" data-aos="fade-up" data-aos-duration="1000">
          <h3 className=" w-1/2 text-7xl font-bold xl:text-5xl lg:text-4xl lg:w-full md:text-2xl  md:w-auto sm:text-xl">
            Hvordan vi <span className="text-teal-600">jobber</span>
          </h3>
          <p className="w-1/2 text-2xl leading-relaxed xl:text-xl lg:w-full md:text-lg sm:text-sm  sm:text-center">
            Vi har en strukturert arbeidsprosess for å sikre at prosjektene vi
            håndterer blir gjennomført på en ordentlig måte og i tråd med dine
            behov. Her er noen vanlige trinn i arbeidsprosessen vi tilbyr:
          </p>
        </div>
        <div className="flex justify-between gap-10 py-10 relative xl:gap-5 lg:gap-2 md:grid md:grid-cols-2 sm:grid-cols-1 sm:py-2 sm:gap-5 text-center" data-aos="fade-in" data-aos-duration="2000">
          <div className="w-1/4 flex flex-col gap-5 justify-center items-center md:w-full sm:gap-2">
            <div className="bg-white w-24 h-24 flex justify-center items-center border rounded-full shadow-md z-[5] lg:w-20 lg:h-20 sm:w-16 sm:h-16">
              <People className="text-5xl text-teal-600 lg:text-4xl sm:text-3xl" />
            </div>
            <span className="text-4xl font-bold xl:text-2xl lg:text-xl">
              Behovsanalyse
            </span>
            <p className="text-gray-500 lg:text-sm">
              Vi starter med en grundig behovsanalyse for å forstå dine
              spesifikke krav og målsettinger. Dette hjelper oss med å
              skreddersy løsninger som passer best for deg.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-5 justify-center items-center md:w-full sm:gap-2">
            <div className="bg-white w-24 h-24 flex justify-center items-center border rounded-full shadow-md z-[5] lg:w-20 lg:h-20 sm:w-16 sm:h-16">
              <Idea className="text-5xl text-teal-600 lg:text-4xl" />
            </div>
            <span className="text-4xl font-bold xl:text-2xl lg:text-xl">
              Planlegging
            </span>
            <p className="text-gray-500 lg:text-sm">
              Basert på behovsanalysen utvikler vi en detaljert plan og designer
              løsningen eller prosjektet. Vi tar hensyn til dine ønsker og krav
              for å sikre at resultatet blir tilfredsstillende.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-5 justify-center items-center md:w-full sm:gap-2">
            <div className="bg-white w-24 h-24 flex justify-center items-center border rounded-full shadow-md  z-[5] lg:w-20 lg:h-20 sm:w-16 sm:h-16">
              <Process className="text-5xl text-teal-600 lg:text-4xl" />
            </div>
            <span className="text-4xl font-bold xl:text-2xl lg:text-xl">
              Implementering
            </span>
            <p className="text-gray-500 lg:text-sm">
              Etter planleggings- og designfasen går vi over til
              implementeringen av prosjektet. Dette innebærer å gjennomføre de
              nødvendige handlingene og sette planen ut i praksis.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-5 justify-center items-center md:w-full sm:gap-2">
            <div className="bg-white w-24 h-24 flex justify-center items-center border rounded-full shadow-md  z-[5] lg:w-20 lg:h-20 sm:w-16 sm:h-16">
              <Finish className="text-5xl text-teal-600 lg:text-4xl" />
            </div>
            <span className="text-4xl font-bold xl:text-2xl lg:text-xl">
              Overvåking{" "}
            </span>
            <p className="text-gray-500 lg:text-sm">
              Vi overvåker og kontrollerer prosjektets fremdrift for å sikre at
              det går som planlagt. Vi håndterer eventuelle utfordringer eller
              endringer som oppstår underveis for å holde prosjektet på rett
              spor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
