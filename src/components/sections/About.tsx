export default function About() {
  return (
    <div className="w-[100%] flex flex-col items-center gap-y-[50px] bg-[#FAF9FB] py-[50px] max-md:px-[10px]">
      <div className="w-[70%] mx-auto max-md:w-[100%]">
        <h1 className="text-[#83513A] text-center font-[700] text-[50px]">
          About
        </h1>

        <p className=" font-[300] text-center w-[70%] mx-auto text-[17px] max-md:w-[100%]">
          I’m a passionate Fullstack Developer with hands-on experience building
          responsive web applications from front to back. I specialize in modern
          JavaScript frameworks like React and Next.js on the frontend, and
          Node.js, Express, and MongoDB/PostgreSQL on the backend.
        </p>
      </div>

      <div
        id="about"
        className="w-[80%] mx-auto flex justify-between items-start max-md:flex-col max-md:w-[100%]"
      >
        <div className="w-[35%] max-md:hidden">
          <img
            className="w-[100%] rounded-[50px]"
            src="/images/muhammad.jpg"
            alt="image"
          />
        </div>
        <div className="w-[60%] space-y-[30px] max-md:w-[100%]">
          <div className="w-[100%] max-md:space-y-[20px]">
            <h4 className="text-[#E87532] font-[700] text-[15px]">About Me</h4>
            <h1 className="text-[40px] text-[#0F2943] font-[700]">
              FullStack Web Developer
            </h1>

            {/* <p className="italic text-[20px] max-md:text-[15px]">
              Bala blu different transmission army 50million blu bala bala eba
              townhall recruit blu pdapc transmission highway line bala
              different symbol{" "}
            </p> */}
          </div>

          <div className=" flex justify-between items-start p-[20px] bg-white rounded-[20px] shadow shadow-gray-500 max-md:flex-col max-md:w-[90%] max-md:mx-auto">
            <div className="w-[40%]  space-y-[30px]">
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">Name</p>
                <p className="text-[20px] text-[#0F2943] font-bold">
                  Muhammad Barkindo Umar
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Nationality
                </p>
                <p className="text-[20px] text-[#0F2943] font-bold">Nigerian</p>
              </div>
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Occupation
                </p>
                <p className="text-[20px] text-[#0F2943] font-bold">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="w-[60%]  space-y-[30px]">
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Phone Number
                </p>
                <p className="text-[20px] text-[#0F2943] font-bold">
                  +234 703 919 7371
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-[500] text-[15px]">Email</p>
                <p className="text-[20px] text-[#0F2943] font-bold">
                  Chiromajauro@gmail.com
                </p>
              </div>
              {/* <div>
                <p className="text-gray-400 font-[500] text-[15px]">
                  Occupation
                </p>
                <p className="text-[20px] text-[#0F2943] font-bold">
                  Full Stack Developer
                </p>
              </div> */}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
