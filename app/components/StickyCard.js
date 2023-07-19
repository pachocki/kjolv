const StickyCard = ({className,icon,title,description}) => {
    return (
        <div className={`${className} sticky  rounded-xl min-h-[20vh] px-5 py-5 my-2 sm:my-1 sm:px-2`} >
        <div className="flex items-center gap-2 text-3xl xl:text-2xl pb-2 font-bold">
          <div className="p-2 bg-white/20 rounded-xl">
           {icon}
          </div>
          <h2 className="sm:text-xl">{title}</h2>
        </div>
        <p className="text-2xl xl:text-xl sm:text-sm">
        {description}
        </p>
      </div>
    );
}

export default StickyCard;