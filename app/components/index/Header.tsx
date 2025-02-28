import Logo from "~/components/shared/Logo";
import Nav from "~/components/shared/Nav";
import Time from "~/components/shared/Time";

const Header = () => {
  return (
    <>
      <header className={"w-full flex justify-between items-center"}>
        {/*Start*/}
        <div className={"flex justify-start items-center basis-1/2 gap-[30px]"}>
          <Logo className={"!w-[45px]"} />
          <Nav />
        </div>
        {/*End*/}
        <div className={"flex justify-end items-center basis-1/2"}>
          <Time />
        </div>
      </header>
    </>
  );
};

export default Header;
