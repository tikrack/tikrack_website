import { Link } from "react-router";

const Main = () => {
  return (
    <>
      <main
        className={
          "md:pt-[100px] py-[70px] w-full h-full flex justify-between md:flex-row md:flex-nowrap flex-wrap flex-col"
        }
      >
        <div className="basis-full md:basis-1/2">
          <div className={"w-[50px] h-[50px] flex justify-center items-center"}>
            <img
              src="/images/profile.jpg"
              className={"w-full h-full rounded-full object-cover"}
              alt=""
            />
          </div>
          <h1
            className={
              "font-semibold md:leading-[65px] leading-[60px] text-[40px] lg:text-[50px] tracking-[0] mt-[20px]"
            }
          >
            Hello! I'm
            <br />
            MohamadReza
            <span className={"block text-gray-200 text-[35px] font-bold"}>
              TikRack
            </span>
          </h1>
        </div>
        <div className="basis-full md:basis-1/2">
          <h1
            className={
              "font-semibold md:leading-[60px] leading-[50px] mt-10 text-[35px] xl:text-[42px] tracking-[0]"
            }
          >
            A Front & Back Developer
            <br />
            with a World of Ideas!
          </h1>
          <blockquote
            className={
              "leading-[28px] text-gray-400 mt-3 md:text-[15px] xl:text-[17px]"
            }
          >
            Coming together is a beginning. Keeping together is progress. and
            <br />
            Working together is
            <span className={"text-green-500"}> success</span>.
            <span className={"text-[13px] text-black text-gray-600"}>
              {" "}
              Henry Ford
            </span>
          </blockquote>
          <div className="flex justify-start items-start gap-[20px] mt-[35px]">
            <Link
              to={"/"}
              className={
                "rounded-[12px] block h-[45px] w-[140px] bg-black flex justify-center items-center text-white"
              }
            >
              Talk with me
            </Link>
            <Link
              to={"/"}
              className={
                "rounded-[12px] block h-[45px] w-[140px] bg-white flex justify-center border-2 border-gray-200 items-center text-black"
              }
            >
              See my work
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
