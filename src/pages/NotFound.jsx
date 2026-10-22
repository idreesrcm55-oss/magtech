import { Home } from "lucide-react";
import Seo from "../components/ui/Seo";
import PageHero from "../components/ui/PageHero";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { PAGES } from "../data/pages";

const page = PAGES.notFound;

export default function NotFound() {
  return (
    <>
      <Seo title={page.title} />
      <PageHero title={page.title} />
      <section className="section">
        <Container className="flex flex-col items-center text-center">
          <p className="font-heading text-8xl font-bold text-primary md:text-9xl">{page.code}</p>
          <p className="mt-4 max-w-md text-lg">{page.text}</p>
          <Button href={page.button.href} icon={Home} className="mt-10">
            {page.button.label}
          </Button>
        </Container>
      </section>
    </>
  );
}
