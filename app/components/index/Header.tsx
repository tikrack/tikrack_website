import Logo from "~/components/shared/Logo";
import Nav from "~/components/index/Nav";

const Header = () => {
  return (
    <>
      <header className={"w-full flex justify-between items-center"}>
        {/*Right*/}
        <div className={"flex justify-start items-center basis-1/2 gap-[30px]"}>
          <Logo className={"!w-[45px]"} />
          <Nav />
        </div>
        {/*Left*/}
        <div className={"flex justify-end items-center basis-1/2"}>
          <Logo className={"!w-[50px]"} />
        </div>
      </header>
    </>
  );
};

export default Header;
