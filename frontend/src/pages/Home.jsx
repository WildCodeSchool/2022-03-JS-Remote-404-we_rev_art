import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TitleText from "../components/TitleText";
import titleTextData from "../data/titleTextData";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <TitleText titleTextData={titleTextData} />
    </div>
  );
}
