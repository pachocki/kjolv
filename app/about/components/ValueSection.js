import { GiRoad } from "react-icons/gi";
import { AiFillBulb } from "react-icons/ai";
import { BiSolidGroup } from "react-icons/bi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BiBrain } from "react-icons/bi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BiGroup } from "react-icons/bi";
import { FaLeaf } from "react-icons/fa";
import ValueCard from "./ValueCard";

const valuesData = [
  {
    icon: <GiRoad className="text-3xl" />,
    title: "Personlig Utvikling",
    description:
      "Motiverende vekst driver oss kontinuerlig fremover. Verdifulle erfaringer og utvikling trenger ikke alltid en krise. Vi støtter individuell vekst, læring og et miljø for fremgang.",
  },
  {
    icon: <AiFillBulb className="text-3xl" />,
    title: "Innovasjon og Utvikling",
    description:
      "Lidenskap for bedrifters innovasjon og utvikling. Vår unike kommunikasjonsstil engasjerer, øker forståelse og fremmer kreativitet. Vi leder organisasjoner mot fremtidsrettet endring.",
  },
  {
    icon: <BiSolidGroup className="text-3xl" />,
    title: "Aktiv Involvering",
    description:
      "Fokus på individ og fellesskap. Engasjement på arbeidsplassen og mangfoldets anerkjennelse. Alle stemmer blir hørt og verdsatt.",
  },
  {
    icon: <RiEmotionHappyLine className="text-3xl" />,
    title: "Skap Begeistring",
    description:
      "Ekte kontakt og nysgjerrighet bygger broer mellom mennesker. Samskaping skaper glede og positiv energi for ansatte.",
  },
  {
    icon: <BiBrain className="text-3xl" />,
    title: "Growth Mindset",
    description:
      "Lærende tankesett som nøkkelen til suksess. Endre tankesett, utforske og lære kontinuerlig.",
  },
  {
    icon: <HiOutlineChatAlt2 className="text-3xl" />,
    title: "Effektiv Kommunikasjon",
    description:
      "Veileder for bedre kommunikasjon, positivt samspill, og energioverføring.",
  },
];

const ValueSection = () => {
  return (
    <div className="bg-black text-white relative  overflow-hidden pt-10 pb-20 px-10 sm:px-2 sm:py-5" >
      <div className="flex justify-center pt-10 sm:pt-5 relative z-20" data-aos="fade-in" data-aos-duration="3000">
        <h2 className="text-6xl font-bold xl:text-5xl lg:text-3xl lg:w-full md:text-2xl md:w-auto sm:text-2xl xs:text-xl   ">
          Det som er viktig <span className="text-teal-600">for oss</span>
        </h2>
      </div>

      <div className="w-full h-full absolute right-0 top-0 bg-gradient-to-r  from-sky-600 to-pink-600 opacity-20"></div>
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto " data-aos="fade-in" data-aos-duration="3000">
        <div className="grid grid-cols-3 2xl:gap-5 gap-2 py-10  sm:grid-cols-1 sm:py-5 sm:px-5">
          {valuesData.map((data, index) => (
            <ValueCard
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueSection;
