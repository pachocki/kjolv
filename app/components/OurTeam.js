import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div className="bg-white text-black px-10 py-20 md:py-10 sm:py-5 sm:px-5">
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto" data-aos="fade-in" data-aos-duration="2000">
        <div className="flex justify-between md:flex-col md:items-center">
          <div className="w-1/2 md:w-full">
            <h3 className="flex w-auto gap-5 text-7xl font-bold xl:text-5xl lg:text-4xl lg:w-full md:text-2xl md:gap-2  sm:justify-center sm:text-xl">
              Vårt<span className="text-teal-600 ">team</span>
            </h3>
          </div>
          <div className="w-1/2 md:w-full">
            <p className="2xl:text-3xl 2xl:leading-relaxed text-2xl leading-relaxed xl:text-xl lg:text-lg lg:w-full md:text-sm sm:text-center">
              I vårt team har vi personer med betydelig erfaring og ulike
              spesialiseringer. Sammen danner vi en samkjørt gruppe som streber
              mot å oppnå felles mål. Vi er motiverte til å levere tjenester av
              høy kvalitet og oppnå fremragende resultater.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full gap-5 pt-20 lg:gap-1 md:pt-5 md:grid md:grid-cols-2 md:gap-2 sm:flex sm:flex-nowrap  sm:overflow-x-auto">
          <TeamCard
            image="roar.webp"
            title="Daglig Leder"
            name="Roar Kjølv Jenssen"
          />
          <TeamCard
            image="bgwwomen.png"
            title="Daglig Leder"
            name="Mary Vaernes"
          />
          <TeamCard
            image="bgywomen.png"
            title="Daglig Leder"
            name="Beate Ringen"
          />
          <TeamCard
            image="gwomen.png"
            title="Daglig Leder"
            name="Ann Aaberg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
