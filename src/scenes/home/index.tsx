import { SelectedPage } from "@/shared/types";
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionBtn from "@/shared/ActionBtn";

// img's
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pd-0"
    >
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <div className="md:-mt-20">
            <div  className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed, beatae exercitationem autem labore dignissimos rerum reprehenderit repellendus voluptates culpa maxime, veniam nostrum amet odio tenetur, dolorem ab quis. Ut.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-8">
            <ActionBtn setSelectedPage={setSelectedPage}>Join Now</ActionBtn>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
            <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
          
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </div>

      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
};

export default Home