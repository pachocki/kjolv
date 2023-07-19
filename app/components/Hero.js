
const Hero = ({ line1, line2, line3, description, image }) => {
  return (
    <div className="  text-white relative  h-full overflow-hidden pb-5 ">
      <div className="w-full h-full absolute right-0 top-0 bg-gradient-to-r z-[1] from-sky-600  to-pink-600  opacity-20 "></div>
      <div className="w-full h-[5vh] bg-white absolute right-0 bottom-0 z-[2]"></div>
      <div className="bg-black relative ">
        <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto relative z-20 " >
          <div className=" flex flex-col w-full  gap-3 px-10 pt-24 pb-10 relative   xl:pb-5 lg:pt-20 sm:px-5  " data-aos="fade-up" data-aos-duration="500">
            <h1 className="w-full text-5xl font-bold  leading-normal xl:text-4xl md:text-3xl sm:text-xl  ">
              {" "}
              {line1}
              <br />
              {line2}
              <span className="text-teal-600">{line3}</span>
            </h1>
            <p className=" w-1/2 text-2xl leading-relaxed xl:text-xl lg:w-5/6 md:text-lg md:w-full sm:text-sm">
              {description}
            </p>
          </div>
          <div className="flex justify-center px-10 sm:px-5 xs:px-2" data-aos="zoom-in" data-aos-duration="700">
            <img
              src={image}
              alt="hero"
              className="w-full 2xl:h-[80vh] xl:h-[60vh]  rounded-xl object-cover object-top" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
