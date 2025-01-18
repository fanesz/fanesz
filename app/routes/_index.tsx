import { Link, MetaFunction } from "@remix-run/react";
import Card from "~/components/Card";
import profile from "../../assets/profile.png";
import SectionTitle from "~/components/SectionTitle";
import RedirectLink from "~/components/RedirectLink";
import chevron_right from "../../assets/chevron-right.svg";
import logo_discord from "../../assets/logos/discord.svg";
import logo_github from "../../assets/logos/github.svg";
import logo_linkedin from "../../assets/logos/linkedin.svg";
import logo_instagram from "../../assets/logos/instagram.svg";
import logo_email from "../../assets/logos/email.svg";
import SocialMedia from "~/components/SocialMedia";
import FadeInComponent from "~/components/FadeInComponent";
import { useEffect } from "react";
import SkillsCard from "~/components/SkillsCard";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export const meta: MetaFunction = () => {
  return [
    {
      title: "Fanes's Portfolio - Full-Stack Website Developer from Indonesia",
    },
    {
      name: "description",
      content:
        "Discover Fanes, a skilled full-stack website developer from Indonesia. Specializing in website development and project management, Fanes delivers visually appealing, innovative, and high-quality solutions.",
    },
    {
      name: "keywords",
      content:
        "Fanes, full-stack developer, website development, project management, Indonesian developer, web design, innovative solutions, high-quality projects",
    },
    { name: "author", content: "Fanes" },
    {
      property: "og:title",
      content:
        "Fanes's Portfolio - Full-Stack Website Developer from Indonesia",
    },
    {
      property: "og:description",
      content:
        "Explore the portfolio of Fanes, an expert full-stack developer from Indonesia with a focus on website development and project management, delivering innovative and high-quality solutions.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.fanes.my.id" },
    {
      property: "og:image",
      content: "https://www.fanes.my.id/build/_assets/profile-C3NWOEPH.png",
    },
    { rel: "canonical", href: "https://www.fanes.my.id" },
    { name: "language", content: "en" },
  ];
};

export default function Index() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const bioList = [
    {
      year: "2003",
      content: <div>Born in Palembang, Indonesia</div>,
    },
    {
      year: "Jun, 2021",
      content: (
        <div>
          Graduated from{" "}
          <RedirectLink link="https://www.smaxaverius3.sch.id/">
            Xaverius 3 High School
          </RedirectLink>{" "}
          in Palembang with a major in{" "}
          <span className="font-semibold">Natural Sciences</span>.
        </div>
      ),
    },
    {
      year: "Jul, 2021 - now",
      duration: "3 yrs+",
      content: (
        <div>
          Student at{" "}
          <RedirectLink link="https://mdp.ac.id/">
            Multi Data Palembang University
          </RedirectLink>{" "}
          with a major in{" "}
          <span className="font-semibold">Information System</span>.
        </div>
      ),
    },
    {
      year: "Aug, 2023 - Jan, 2024",
      duration: "6 mos",
      skills: ["Python", "Tensorflow"],
      content: (
        <div>
          Cohort at{" "}
          <RedirectLink link="http://g.co/bangkit">Bangkit 2023</RedirectLink>{" "}
          with a <span className="font-semibold">Machine Learning</span> path.
        </div>
      ),
    },
    {
      year: "Feb, 2024 - Jun, 2024",
      duration: "5 mos",
      skills: [
        "Javascript",
        "React.js",
        "Express.js",
        "OOP",
        "React-Context",
        "Redux",
      ],
      content: (
        <div>
          Internship at{" "}
          <RedirectLink link="https://www.bukitvista.com/">
            Bukit Vista
          </RedirectLink>{" "}
          as a <span className="font-semibold">Full-stack Web Developer</span>.
        </div>
      ),
    },
  ];

  const socmedList = [
    {
      link: "https://www.linkedin.com/in/fanes-pratama-37a769149/",
      img: logo_linkedin,
      username: "Fanes Pratama",
    },
    {
      link: "https://github.com/fanesz",
      img: logo_github,
      username: "fanesz",
    },
    {
      link: "https://www.instagram.com/fanes_pratama/",
      img: logo_instagram,
      username: "fanes_pratama",
    },
    {
      link: "https://discordapp.com/users/278169600728760320/",
      img: logo_discord,
      username: "vanezzz",
    },
    {
      img: logo_email,
      username: "fanes23.pratama@gmail.com",
    },
  ];

  return (
    <div>
      <FadeInComponent delay={0} slideIn={true}>
        <Card>
          <div className="md:flex gap-10 text-center w-full">
            <div className="w-fit md:ms-8 mx-auto">
              <div className="relative w-24 h-24">
                <img
                  className="rounded-full border-2 border-gray-100 shadow-sm"
                  src={profile}
                  alt="profile picture"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="font-semibold text-3xl font_sans">
                Fanes Pratama
              </div>
              <div className="text-lg">
                Fast Learner / Dedicated Programmer / Project Maestro
              </div>
            </div>
          </div>
        </Card>
      </FadeInComponent>

      <FadeInComponent delay={0.3} slideIn={true}>
        <Card className="mb-10">
          <div className="px-2">
            <div>
              <div>
                <SectionTitle text="Desc" />
              </div>
              <div className="md:text-justify">
                Fanes, a full-stack developer from Indonesia, emphasizes his
                primary expertise in technology, with a particular focus on
                software development and project management. His skills extend
                beyond crafting visually appealing solutions with the latest
                technology, reaching towards efficient, innovative, and
                high-quality outcomes for every project.
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Bio" />
              </div>
              <div>
                {bioList.map((item, index) => (
                  <div key={index} className="flex flex-col mb-3">
                    <div className="flex gap-2 items-baseline">
                      <span className="font-bold text-[0.9rem]">
                        {item.year}
                      </span>
                      {item.duration && (
                        <span className="text-gray-400 text-[0.75rem]">
                          ({item.duration})
                        </span>
                      )}
                    </div>
                    <div className="-mt-1">{item.content}</div>
                    {item.skills && (
                      <div className="mt-1">
                        <SkillsCard skills={item.skills} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Programming Skills" />
              </div>
              <div>
                Javascript, Typescript, Golang, Python, Java, Dart, React.js
                (Next, Vite, Remix, etc.), Tailwind CSS, Bootstrap, Flutter,
                GetX, Express.js, Gin, Fiber, Strapi, Electron, MySQL,
                PostgreSQL, SQLite, MongoDB, Redis, Discord.js, Tensorflow, etc.
              </div>
              <Link
                preventScrollReset={true}
                to="/projects"
                className="flex gap-2 w-fit mt-3 rounded-md text-sm p-1.5 px-3 bg-green-300 bg-opacity-50 hover:bg-opacity-60 hover:duration-200 transition-colors cursor-pointer"
              >
                <div className="pb-0.5">My Projects</div>
                <div className="my-auto">
                  <img className="w-3" src={chevron_right} />
                </div>
              </Link>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Interest" />
              </div>
              <div>
                Art, Music, Nature, Anime, Game, Technology, Machine Learning,
                and Coding!
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Social Media" />
              </div>
              <div>
                {socmedList.map((item, index) => (
                  <SocialMedia
                    key={index}
                    link={item.link}
                    img={item.img}
                    username={item.username}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </FadeInComponent>
    </div>
  );
}
