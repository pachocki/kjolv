const AboutUs = ({ title, description, image, className }) => {
  return (
    <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto " data-aos="fade-in" data-aos-duration="1500">
      <div
        className={`bg-white text-black flex justify-between gap-10 py-28 px-10 relative xl:py-16 lg:py-10 lg:gap-5 md:flex-col  md:gap-3  sm:py-3 sm:px-5 ${className}`}
      >
        <div className="w-1/2 flex md:w-full">
          <img src={image} alt="workshop" className="rounded-xl object-cover" />
        </div>
        <div className="w-1/2 md:w-full ">
          <div className="sticky top-40 mb-20 sm:mb-0">
            <h2 className="text-4xl font-semibold lg:text-2xl md:text-2xl sm:text-xl  pb-5 sm:pb-2">
              {title}
            </h2>
            <p className="text-2xl xl:text-xl lg:text-lg sm:text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
