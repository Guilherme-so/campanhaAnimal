import { Adoption } from "../components/Adoption";
import { Banner } from "../components/Banner";
import { Benefits } from "../components/Benefits";
import { Campaigns } from "../components/Campaigns";
import { Contact } from "../components/Contact";
import { Patronize } from "../components/Patronize";
import { SEO } from "../SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Criada por uma equipe 100% voluntária
para ajudar animais de todas as espécies
pelo Brasil"
      />
      <main>
        <Banner />
        <Benefits />
        <Campaigns />
        <Adoption />
        <Patronize />
        <Contact />
      </main>
    </>
  );
}
