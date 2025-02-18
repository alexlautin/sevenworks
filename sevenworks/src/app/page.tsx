import Navbar from "./home/navbar";
import Landing from "./home/landing";
import TemplatePreview from "./home/templatePrev";

export default function Home() {
  return (
    <div className = "flex flex-col w-full h-fit justify-start">
      <Navbar />
      <div className = "flex flex-col w-full h-fit justify-start pt-[75px]">
        <Landing />
        <TemplatePreview />
      </div>
    </div>
  );
}
