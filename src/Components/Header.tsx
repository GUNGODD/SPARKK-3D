export default function Header() {
  return (
    <>
      <div className="main-conatiner">
        <div className=" NavContainer  justify-between bg-transparent align-baseline   sm:h-10  md:h-auto flex  gap-8   ">
          <div className="Logo p-4 m-4 h-auto md:h-[40%]  md:p-8 md:m-8  ">
            <h1 className="text-white sm:font-bold  md:font-thin text-xl md:pl-16  fixed md:text-4xl   ">
              {" "}
              S P A<span className="text-opacity-70"> R</span>{" "}
              <span className="text-opacity-40"> K</span>{" "}
              <span className="text-opacity-20"> K</span>
            </h1>
          </div>

          {/*    menu bar container             */}

          <div className="secondHalf flex  gap-0 justify-between">
            <div className="Lang hidden md:flex p-12">
              <div className=" flex  self-baseline">
                <button className=" text-white font-bold text-sm"> EN</button>
                <span className=" text-white font-bold text-sm p-2  text-opacity-55">
                  {" "}
                  |
                </span>
                <button className="text-white text-opacity-70 font-bold text-sm">
                  {" "}
                  FR
                </button>
              </div>
            </div>

            <div className="Menu  bg-emerald-400 mt-4  md:mr-6 md:mt-6 h-16  md:h-[80%] m-2 p-2 md:p-5 ">
              <h1 className="font-bold text-lg md:text-3xl m-2 md:m-2   ">
                {" "}
                Menu
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
