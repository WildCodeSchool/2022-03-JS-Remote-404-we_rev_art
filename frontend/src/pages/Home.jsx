import Hero from "../components/Hero";
import TitleText from "../components/TitleText";
import titleTextData from "../data/titleTextData";

export default function Home() {
  return (
    <div>
      <Hero />
      <TitleText titleTextData={titleTextData} />
    </div>
  );
}
