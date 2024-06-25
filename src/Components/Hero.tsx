import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Scene from "../ThreeComponents/Scene";

export default function Hero() {
  return (
    <>
      <div className="HeroContainer grid   mt-y-0 ">
        <div className="inner-Container  grid-cols-2  pl-12  ">
          <div className="Hero-Text  grid   pl-2  md:pl-48">
            <h1 className="text-white   flex-row md:hidden      font-extrabold text-5xl ">
              LET US
            </h1>

            {/* large screen short discription  */}
            <div className="mdDevice hidden  md:flex gap-32 ">
              <h1 className="text-white  md:flex flex-row    h-64 justify-self-center   font-extrabold text-5xl md:text-9xl">
                LET US
              </h1>
              <div className="hidden md:flex gap-8 mt-14 ">
                <div className=" short-discripion hidden  text-white md:flex flex-col  text-3xl  ">
                  <p className=" ">Web Agency</p>
                  <p>Front end</p>
                </div>
                <div className="short-discription hidden  text-white md:flex flex-col text-3xl  ">
                  <p>UI/UX design</p>
                  <p>Backend</p>
                </div>
              </div>
            </div>

            {/*  end of large screen short discription  */}
            <div className="flex ">
              <div className="canvas-class hidden md:grid ">
                <Scene />
              </div>

              <h1 className="text-white font-extrabold  md:mt-0 ml-4  md:h-64 text-5xl md:ml-50 md:text-9xl">
                Play with
              </h1>
            </div>
            <div className="flex  gap-96  ">
              <div>
                <h1 className=" flex gap-4 text-white font-extrabold  md:h-64  text-5xl  md:text-9xl ">
                  Your
                  <span className="   font-mono  text-green-500 ml-3  font-extralight md:text-9xl">
                    {" "}
                    ideas
                  </span>
                </h1>
              </div>
              <div className=" gap-12     h-64 hidden social-media text-end flex-col md:flex    md:m-4 md: ">
                <div className="fixed ">
                  <div className="w-full h-full flex flex-col gap-4 pl-48 ">
                    <a
                      className="w-full text-white"
                      href="https://www.instagram.com/ascenzennn"
                      target="_blank"
                    >
                      <Icon icon="mage:facebook" width="36" height="36" />
                    </a>

                    <a
                      className="w-full text-white"
                      href="https://www.instagram.com/ascenzennn"
                      target="_blank"
                    >
                      <Icon icon="line-md:instagram" width="36" height="36" />
                    </a>

                    <a
                      className="w-full text-white"
                      href="https://www.instagram.com/ascenzennn"
                      target="_blank"
                    >
                      <Icon icon="line-md:twitter-x" width="36" height="36" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*   mobile screen short discription  */}
            <div className="flex m-2 flex-row gap-y-4  md:hidden ">
              <div className=" short-discription  m-4 ">
                <p className="text-white font-light text-sm">web agency</p>
                <p className="text-white font-light text-sm"> front end</p>
              </div>

              <div className=" gap-4  m-4 ">
                <p className="text-white font-light text-sm  "> ux-ui design</p>
                <p className="text-white font-light text-sm"> back-end</p>
              </div>
            </div>
          </div>

          {/* Socail media  */}
        </div>
      </div>
    </>
  );
}
