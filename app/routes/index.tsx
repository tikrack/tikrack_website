import Container from "~/components/shared/Container";
import Header from "~/components/index/Header";

const meta = () => {
  return [{ title: "Tikrack" }, { name: "description", content: "" }];
};

const Index = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
};

export { meta };
export default Index;
