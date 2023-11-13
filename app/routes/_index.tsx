import { Link, MetaFunction } from "@remix-run/react";
import Card from "~/components/card";
import profile from '../../assets/profile.png'
import SectionTitle from "~/components/sectionTitle";
import RedirectLink from "~/components/redirectLink";
import chevron_right from '../../assets/chevron-right.svg'
import logo_discord from '../../assets/logos/discord.svg'
import logo_github from '../../assets/logos/github.svg'
import logo_linkedin from '../../assets/logos/linkedin.svg'
import logo_instagram from '../../assets/logos/instagram.svg'
import logo_email from '../../assets/logos/email.svg'
import SocialMedia from "~/components/socialMedia";
import FadeInComponent from "~/components/fadeInComponent";
import { useEffect } from "react";

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
    { title: "Fanes's Portofolio" },
    { name: "description", content: "A Portofolio Website of Fanes Pratama" },
  ];
};

export default function Index() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div>
      <FadeInComponent delay={0} slideIn={true}>
        <Card>
          <div className="md:flex gap-10 text-center w-full">
            <div className="w-fit md:ms-8 mx-auto">
              <div className="relative w-24 h-24">
                <img className="rounded-full border-2 border-gray-100 shadow-sm" src={profile} alt="profile picture" />
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
                Fanes, a full-stack website developer from Indonesia, emphasizes his primary expertise in technology, with a particular focus on website development and project management. His skills extend beyond crafting visually appealing solutions with the latest technology, reaching towards efficient, innovative, and high-quality outcomes for every project.
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Bio" />
              </div>
              <div>

                <div className="flex gap-3">
                  <div className="font-bold">
                    2003
                  </div>
                  <div>
                    Born in Palembang, Indonesia
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-bold">
                    2021
                  </div>
                  <div>
                    Graduated from <RedirectLink link='https://www.smaxaverius3.sch.id/'>Xaverius 3 High School</RedirectLink> in Palembang with a major in <span className="font-semibold">Natural Sciences</span>.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-bold whitespace-nowrap">
                    2021 - now
                  </div>
                  <div>
                    Student at <RedirectLink link='https://mdp.ac.id/'>Multi Data Palembang University</RedirectLink> with a major in <span className="font-semibold">Information System</span>.
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="font-bold whitespace-nowrap">
                    2023 - now
                  </div>
                  <div>
                    Cohort at <RedirectLink link='http://g.co/bangkit'>Bangkit 2023</RedirectLink> with a <span className="font-semibold">Machine Learning</span> path.
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Programming Skills" />
              </div>
              <div>
                Javascript, Typescript, Golang, Python, Java, React.js (Next, Vite, Remix, etc.), Bootstrap, Tailwind CSS, Discord.js, Express.js, Gin-Gothic, Strapi, MySQL, PostgreSQL, Tensorflow, etc.
              </div>
              <Link preventScrollReset={true} to='/projects' className="flex gap-2 w-fit mt-3 rounded-md text-sm p-1.5 px-3 bg-green-300 bg-opacity-50 hover:bg-opacity-60 hover:duration-200 transition-colors cursor-pointer">
                <div className="pb-0.5">
                  My Projects
                </div>
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
                Art, Music, Nature, Anime, Game, Technology, Machine Learning, and Coding!
              </div>
            </div>

            <div className="mt-6">
              <div>
                <SectionTitle text="Social Media" />
              </div>
              <div>

                <SocialMedia link="https://www.linkedin.com/in/fanes-pratama-37a769149/" img={logo_linkedin} username="Fanes Pratama" />

                <SocialMedia link="https://github.com/fanesz" img={logo_github} username="fanesz" />

                <SocialMedia link="https://www.instagram.com/fanes_pratama/" img={logo_instagram} username="fanes_pratama" />

                <SocialMedia link="https://discordapp.com/users/278169600728760320/" img={logo_discord} username="vanezzz" />

                <SocialMedia img={logo_email} username="fanes23.pratama@gmail.com" />

              </div>
            </div>

          </div>
        </Card>
      </FadeInComponent>

    </div>
  );
}
