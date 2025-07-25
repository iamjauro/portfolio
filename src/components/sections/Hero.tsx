export default function Hero() {
  return (
    <div
      id="hero"
      className="bg-[#D3AA5A] w-[100%] max-md:py-[150px] max-md:px-[10px] "
    >
      <div className="w-[70%] pt-[50px]  h-[100vh] mx-auto flex justify-between items-center max-md:w-[100%] max-md:flex-col-reverse max-md:justify-center max-md:gap-y-[40px]">
        <div className="w-[50%] space-y-[30px] max-md:w-[100%] ">
          <h1 className="font-[700] text-[50px] text-[#0F2943] w-[80%] max-md:w-[100%] max-md:text-[30px] max-md:text-center">
            Muhammad barkindo umar
          </h1>

          <p className="font-[200] text-[20px] w-[80%] max-md:w-[100%] max-md:text-center">
            Transforming ideas into elegant solutions through creative design
            and innovative development
          </p>
          <div className=" w-[68%]  flex justify-between items-center   max-md:w-[100%] max-md:flex-col max-md:gap-y-[20px] gap-x-[20px]">
            <a href="#project">
              <button className="w-[200px]  bg-[#E87532] text-white rounded-full p-[15px] font-bold  cursor-pointer max-md:w-[100%]">
                View My Work
              </button>
            </a>

            <a href="#contact">
              {" "}
              <button className="w-[200px] hover:bg-[#E87532] hover:text-white text-[#E87532] cursor-pointer max-md:w-[100%] border border-[#E87532] rounded-full p-[15px] font-bold">
                Let's Connect
              </button>
            </a>
          </div>
        </div>
        <div className="w-[50%] max-md:w-[100%]">
          <img
            src="/images/muhammad.jpg"
            alt=""
            className="w-[100%] rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
