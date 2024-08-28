import { Container } from "../components/Container/styled";
import Header from "../components/Header/Header";
import Item from "../components/Item/Item";
import Navbar from "../components/Navbar/Navbar";
import { exercises } from "../constants/exercises";

export default function MainPage() {
  return (
    <>
      <Header heading="Eyer" />
      <Container>
        {exercises.map((el, index) => (
          <Item
            key={index}
            heading={el.heading}
            time={el.time}
            icon={el.icon}
            exerciseId={index}
          />
        ))}
      </Container>

      <Navbar />
    </>
  );
}
