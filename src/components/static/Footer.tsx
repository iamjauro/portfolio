import { BsTwitterX } from "react-icons/bs";
import { DiGithub } from "react-icons/di";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="py-[50px] flex justify-center items-center">
      <div className="w-[15%] flex justify-between items-center max-md:w-[60%]">
        <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center border-gray-400 p-[5px]">
          <a target="_blank" href="https://x.com/iam_jauro?s=21">
            <BsTwitterX className=" h-[200px]" />
          </a>
        </div>

        <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center border-gray-400 p-[5px]">
          <LiaLinkedin className="w-[300px] h-[200px]" />
        </div>

        <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center border-gray-400 p-[5px]">
          <a target="_blank" href="https://github.com/iamjauro">
            <DiGithub className="w-[100px] h-[100px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
