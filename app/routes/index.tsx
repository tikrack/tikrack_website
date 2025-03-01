import Container from "~/components/shared/Container";
import Header from "~/components/index/Header";
import Aside from "~/components/index/Aside";

const meta = () => {
  return [{ title: "Tikrack" }, { name: "description", content: "" }];
};

const Index = () => {
  return (
    <>
      <Container className={"pt-[15px]"}>
        <Header />
        <Aside />
      </Container>
    </>
  );
};

export { meta };
export default Index;
