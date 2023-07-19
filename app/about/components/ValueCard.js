"use client"
const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-teal-600/20 2xl:p-5 p-2 rounded-xl relative z-20">
      <div className="flex items-center gap-2">
        {icon}
        <span className="2xl:text-4xl text-2xl font-bold xl:text-xl sm:text-lg">{title}</span>
      </div>
      <p className="2xl:text-3xl 2xl:leading-relaxed text-xl pt-5 xl:text-lg md:text-sm md:pt-2 sm:text-sm">{description}</p>
    </div>
  );
};

export default ValueCard;
