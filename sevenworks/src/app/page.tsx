import Navbar from "./landing/navbar";
import Landing from "./landing/landing";
import TemplatePreview from "./landing/templatePrev";

export default function Home() {
  return (
    <div className = "flex flex-col w-full h-fit justify-start">
      <Navbar />
      <div className = "flex flex-col w-full h-fit justify-start pt-[60px]">
        <Landing />
        <TemplatePreview />
      </div>
    </div>
  );
}
