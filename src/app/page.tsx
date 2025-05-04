import MainAboutList from "@/components/Main-page/MainAboutList";
import MainAboutMe from "@/components/Main-page/MainAboutMe";
import MainHeader from "@/components/Main-page/MainHeader";
import MainProjects from "@/components/Main-page/MainProjects";
import MainServices from "@/components/Main-page/MainServices";

export default function Home() {

  return (
    <div className="bg-[#0E041D] inter">
      <MainHeader/>
      <MainAboutMe/>
      <MainAboutList/>
      <MainProjects/>
      <MainServices/>
    </div>
  );
}
