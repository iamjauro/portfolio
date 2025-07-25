import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

export default function Stacks() {
  return (
    <div className="w-[100%] py-[100px] bg-white">
      <div className="w-[70%] mx-auto flex justify-between items-center max-md:flex-col max-md:space-y-[30px]">
        <FaHtml5 className="w-[100px] h-[100px]" />
        <FaCss3 className="w-[100px] h-[100px]" />
        <SiTailwindcss className="w-[100px] h-[100px]" />
        <IoLogoJavascript className="w-[100px] h-[100px]" />
        <FaReact className="w-[100px] h-[100px]" />
        <FaNodeJs className="w-[100px] h-[100px]" />
      </div>
    </div>
  );
}
