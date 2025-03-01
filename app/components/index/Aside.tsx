import Social from "~/components/shared/Social";

const Aside = () => {
  return (
    <>
      <div
        className={
          "fixed top-[100px] right-[28px] flex flex-col gap-[15px] w-[50px]"
        }
      >
        <Social name={"instagram"} />
      </div>
    </>
  );
};

export default Aside;
