import Container from "~/components/shared/Container";
import Header from "~/components/index/Header";
import Aside from "~/components/index/Aside";
import Main from "~/components/index/Main";

const meta = () => {
  return [{ title: "Tikrack" }, { name: "description", content: "" }];
};

const Index = () => {
  return (
    <>
      <Container className={"pt-[15px]"}>
        <Header />
        <Aside />
        <Main />
      </Container>
    </>
  );
};

export { meta };
export default Index;
