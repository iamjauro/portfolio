import { BsGithub, BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      <div className="w-[100%] mx-auto flex justify-between items-center p-[20px] mt-[20px] fixed text-white font-bold px-[200px] max-md:hidden">
        <div>PORTFOLIO</div>
        <div className=" w-[40%] flex justify-around items-center">
          <a href="#hero">
            <span>Home</span>
          </a>
          <a href="#about">
            <span>About</span>
          </a>

          <a href="#project">
            <span>Project</span>
          </a>

          <a href="#contact">
            <span>Contact</span>
          </a>
        </div>
        <div className="flex  w-[8%] justify-between">
          <a target="_blank" href="https://x.com/iam_jauro?s=21">
            {" "}
            <BsTwitter />
          </a>
          <ImLinkedin />

          <a target="_blank" href="https://github.com/iamjauro">
            <BsGithub />
          </a>
        </div>
      </div>

      <MobileNav />
    </>
  );
}
