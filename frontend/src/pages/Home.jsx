import Suggestioncard from "../components/Suggestioncard";
import HowItWork from "../components/HowItWork";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";
import TitleText from "../components/TitleText";
import titleTextData from "../data/titleTextData";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <main>
      <Hero />
      <TitleText titleTextData={titleTextData} />
      <Suggestioncard />
      <HowItWork />
      <Benefits />
      <CardProject />
    </main>
  );
}
