import Container from "~/components/shared/Container";
import Header from "~/components/index/Header";

const meta = () => {
  return [{ title: "Tikrack" }, { name: "description", content: "" }];
};

const Index = () => {
  return (
    <>
      <Container className={"pt-[15px]"}>
        <Header />
      </Container>
    </>
  );
};

export { meta };
export default Index;
