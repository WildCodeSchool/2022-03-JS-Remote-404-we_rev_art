import Suggestioncard from "../components/Suggestioncard";
import HowItWork from "../components/HowItWork";
import Hero from "../components/Hero";
import CardProject from "../components/CardProject";
import TitleText from "../components/TitleText";
import titleTextData from "../data/titleTextData";
import suggestionsData from "../data/suggestionsData";

export default function Home() {
  return (
    <div>
      <Hero />
      <TitleText titleTextData={titleTextData} />
      <Suggestioncard suggestionsData={suggestionsData} />
      <HowItWork />
      <CardProject />
    </div>
  );
}
