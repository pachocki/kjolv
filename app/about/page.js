import Hero from "../components/Hero";
import OurTeam from "../components/OurTeam";
import ValueSection from "./components/ValueSection";

const page = () => {
  return (
    <div>
      <Hero
        line1="Vi bygger broer mellom"
        line2="selskaper og arbeidere."
        image="/team.png"
        description="Vi hjelper bedrifter med innovativ kommunikasjon og skaper aktiv involvering og begeistring blant ansatte. Vi aktiverer ressurser og stimulerer lysten til kontinuerlig utvikling."
      />
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto " data-aos="fade-in" data-aos-duration="3000">
        <div className="bg-white text-black flex justify-between gap-5 px-10 py-10 md:pt-5  relative md:flex-col  sm:px-5 sm:pb-5">
          <div className="w-1/2  md:w-full">
            <div className="sticky top-40 ">
              <h2 className="text-6xl font-bold xl:text-5xl lg:text-3xl lg:w-full md:text-2xl  md:w-auto sm:text-2xl xs:text-xl">
                Sammen er vi <span className="text-teal-600">sterke.</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-2xl w-2/4 2xl:text-3xl 2xl:leading-relaxed  md:w-full lg:text-lg sm:text-sm">
            <p>
              KJØLV AS er dedikert til å fremme innovativ kommunikasjon og
              utvikling i bedrifter. Deres tilnærming fokuserer på å skape et
              stimulerende miljø som lar ulike behov bli hørt og oppmuntrer til
              engasjerende samtaler. I stedet for å spørre enkeltpersoner om
              deres nåværende styrker, spør KJØLV AS om deres ambisjoner for
              forbedring, da de sterkt tror at ønsket om personlig vekst er en
              kraftfull drivkraft. Med omfattende erfaring innen
              bedriftskommunikasjon har KJØLV AS hjulpet utallige selskaper med
              å styrke ansattes deltakelse, engasjement og tverrfaglig
              forståelse.
            </p>
            <p>
              {" "}
              De spesialiserer seg i å dyrke et vekstmindset, der de prioriterer
              belønningen av innsats og læring fremfor kun å fokusere på
              endelige resultater. Gjennom omfattende kurs og skreddersydde
              treningsøkter formidler KJØLV AS effektive
              kommunikasjonsteknikker, slik at enkeltpersoner kan uttrykke seg
              trygt, engasjere publikum og bygge videre på hverandres bidrag. I
              tillegg vektlegger de viktigheten av rolleforståelse og har trent
              kundeadvisorer og ledere i ulike organisasjoner.{" "}
            </p>
            <p>
              KJØLV AS er stolte av å inspirere nysgjerrighet og oppmuntre
              ansatte til å oppdage sitt uutnyttede potensial og ressurser. Ved
              å skape et miljø som fremmer åpenhet, refleksjon og tydelige
              retningslinjer, streber de etter å innprente en følelse av formål
              og kollektiv vekst blant arbeidsstyrken.
            </p>
          </div>
        </div>
      </div>
      <ValueSection />
      <div className=" flex items-center justify-center w-full h-[60vh] m-auto  bg-[url('/course.png')] bg-fixed bg-center bg-cover "></div>
      <OurTeam />
    </div>
  );
};

export default page;
