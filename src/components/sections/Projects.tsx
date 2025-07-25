import { BsArrowRight } from "react-icons/bs";

const projectDetails = [
  {
    title: "PiggyVest Replica",
    Image: "/images/piggy.png",
    description:
      "Recreated the PiggyVest landing page with pixel-perfect accuracy, focusing on responsive layout, and interactive elements. Demonstrated strong attention to UI detail and modern fintech design principles.",
    liveUrl: "https://piggy-collab.vercel.app/",
  },

  {
    title: "MOOVE",
    Image: "/images/moove.png",
    description:
      "Built a high-fidelity replica of Moove's official landing page using clean layout structures, mobile responsiveness, and sharp visual hierarchy. Showcased ability to replicate real-world product websites with precision and performance.",
    liveUrl: "https://midestic.github.io/moove/",
  },

  {
    title: "META WEBSITE",
    Image: "/images/meta.png",
    description:
      "Developed a responsive Meta (Facebook) landing page clone, emphasizing modern UI design, accessibility, and responsiveness. Successfully mimicked the structure, typography, and call-to-action flows of a major tech brand.",
    liveUrl: "https://midestic.github.io/meta/",
  },
  //   {
  //     title: "hshshhdhdhd",
  //     Image:
  //       "https://bootstrapmade.com/content/demo/EasyFolio/assets/img/profile/profile-square-2.webp",
  //     description: "shhdhdhdhdhhd",
  //     liveUrl: "sshshshshsshhshs",
  //   },
];

export default function Projects() {
  return (
    <div
      id="project"
      className="w-[100%] flex flex-col justify-center items-center gap-y-[40px] py-[50px] max-md:px-[10px]"
    >
      <div className="w-[100%]">
        <p className="text-[#83513A] text-center font-[700] text-[50px]">
          Projects
        </p>

        <p className="text-center w-[50%] mx-auto max-md:w-[100%]">
          Crafted pixel-perfect clones of popular landing pages (PiggyVest,
          Moove, Meta) to demonstrate attention to UI detail, responsive design,
          and modern frontend skills.
        </p>
      </div>

      <div className="w-[80%] flex justify-between flex-wrap gap-y-[25px] max-md:flex-col max-md:w-[100%]">
        {projectDetails.map((project, i) => (
          <div
            key={i}
            className="w-[49%] flex flex-col gap-y-[5px] overflow-hidden rounded-[20px] shadow shadow-gray-600 hover:translate-[-5px] max-md:w-[100%]"
          >
            <div
              style={{
                backgroundImage: `url(${project.Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-[100%] h-[400px]   "
            >
              {/* <img
                className="w-[100%] h-[100%] object-fill"
                src={project.Image}
                alt=""
              /> */}
            </div>
            <div className="w-[100%] p-[30px] space-y-[20px]">
              <p className="text-[#E87532] text-[15px] font-bold">
                {project.title.toUpperCase()}
              </p>

              <p> {project.description} </p>

              <a target="_blank" href={project.liveUrl}>
                <button className="flex justify-between items-center bg-[#E87532] rounded-full text-white  px-[30px] py-[20px] cursor-pointer">
                  View Project <BsArrowRight />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
