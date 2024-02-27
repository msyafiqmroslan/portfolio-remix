import type { MetaFunction } from "@remix-run/node";
import { Header, Footer, Navbar } from "./components/_index";
import { Overview, Experiences, Skills, Educations } from "./containers/_index";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-700">
      <div>
        <h1 className="text-3xl font-bold text-white text-center items-center pt-10 hover:text-gray-300 cursor-pointer">
          Welcome to My Portfolio!
        </h1>
      </div>
      <Navbar />
      <Header />
      <Overview />
      <Experiences />
      <Skills />
      <Educations />
      <Footer />
    </div>
  );
}
