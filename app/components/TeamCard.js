const TeamCard = ({title,name,image}) => {
    return (
        <div className="p-2 border border-gray-200 rounded-xl shadow-lg w-full sm:mb-1">
          <div className="sm:w-[210px]">
            <img src={image} alt="leder" className=" rounded-xl w-full  object-cover h-[400px] " />
          </div>
          <div className="flex flex-col gap-2 pt-5">
            <span className="2xl:text-3xl 2xl:leading-relaxed text-2xl text-teal-600 font-bold lg:text-lg">{title}</span>
            <span className="2xl:text-3xl 2xl:leading-relaxed text-2xl lg:text-lg">{name}</span>
          </div>
        </div>
    );
}

export default TeamCard;