const Container = ({children}) => {
    return (
        <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto relative">
          {children}
        </div>
    );
}

export default Container;