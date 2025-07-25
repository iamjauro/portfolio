import { BiSend } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-[100%] flex flex-col items-center bg-[#FAF9FB] py-[50px] max-md:px-[10px]"
    >
      <div className="w-[70%] flex justify-between items-start max-md:flex-col max-md:w-[100%] max-md:gap-y-[50px]">
        <div className="w-[49%]  space-y-[50px] max-md:w-[100%]">
          <div>
            <h1 className="text-[#83513A]  font-[700] text-[20px]">CONTACT</h1>

            <p className="text-[50px] text-[#0F2943] max-md:text-[20px]">
              Have a project in mind, collaboration opportunity, or just want to
              say hello? Feel free to reach out — I’d love to hear from you.
            </p>
          </div>

          <div className="w-[100%] space-y-[20px]">
            <span className="flex items-center gap-x-[10px] text-[20px]">
              <CgMail className="text-[#E87532] text-[30px]" />{" "}
              Chiromajauro@gmail.com
            </span>
            <span className="flex items-center gap-x-[10px] text-[20px]">
              <BsTelephone className="text-[#E87532] text-[30px]" /> +234 703
              919 7371
            </span>
          </div>
        </div>
        <div className="w-[49%] max-md:w-[100%]">
          <form className="p-[20px] rounded-[20px] bg-white flex flex-col gap-y-[20px] shadow shadow-gray-500 ">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-[100%] border border-gray-200 p-[20px] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-[100%] border border-gray-200 p-[20px] rounded-[10px]"
            />

            <textarea className="w-[100%] h-[300px] border border-gray-200 rounded-[10px]"></textarea>

            <button className="w-[100%] bg-[#E87532] text-white p-[20px] rounded-[10px] flex justify-center items-center gap-x-[10px]">
              Send Message <BiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
