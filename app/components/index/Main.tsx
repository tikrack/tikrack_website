const Main = () => {
  return (
    <>
      <main className={"pt-[130px] w-full h-full flex justify-between"}>
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
            Hello! I'm MohamadReza
            <span className={"block text-gray-300 text-[40px] font-bold"}>
              TikRack
            </span>
          </h1>
        </div>
        <div className="basis-1/2"></div>
      </main>
    </>
  );
};

export default Main;
