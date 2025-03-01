const Main = () => {
  return (
    <>
      <main className={"pt-[100px] w-full h-full flex justify-between"}>
        <div className="basis-1/2">
          <div className={"w-[50px] h-[50px] flex justify-center items-center"}>
            <img
              src="/images/profile.jpg"
              className={"w-full h-full rounded-full object-cover"}
              alt=""
            />
          </div>
          <h1
            className={
              "font-semibold leading-[65px] text-[50px] tracking-[0] mt-[20px]"
            }
          >
            Hello! I'm
            <br />
            MohamadReza
            <span className={"block text-gray-300 text-[40px] font-bold"}>
              TikRack
            </span>
          </h1>
        </div>
        <div className="basis-1/2">
          <h1
            className={"font-semibold leading-[60px] text-[40px] tracking-[0]"}
          >
            A Front & Back Developer
            <br />
            with a World of Ideas!
          </h1>
          <blockquote className={"text-gray-400 mt-3 text-[17px]"}>
            Coming together is a beginning. Keeping together is progress. and
            <br />
            Working together is
            <span className={"text-green-500"}> success</span>.
            <span className={"text-[13px] text-black text-gray-600"}>
              {" "}
              Henry Ford
            </span>
          </blockquote>
        </div>
      </main>
    </>
  );
};

export default Main;
