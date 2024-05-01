import HText from "@/shared/HText";
import { IBenefit, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionBtn from "@/shared/ActionBtn";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const benefits: IBenefit[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor .",
    description: "Lorem ipsum dolor adipisicing elit. Sed , ipsa cum totam aliquid , placeat labore nam? Hic officiis!"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Lorem ipsum dolor sit amet, consectetur adip",
    description: "Lorem ipsum sit  consectetur  elit. Sed inventore, Inventore animi hic officiis!"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Lorem ipsum dolor sit amet, consectetur adip, consectetur adip",
    description: "Lorem ipsum dolor sit   adipisicing elit. Sed,  consequuntur  atque nostrum  non eius,  labore nam?"
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  }

}

const Benefits = ({
  setSelectedPage
}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi rerum sit dolor praesentium repudiandae itaque. Obcaecati, hic explicabo doloremque nihil maxime quo quod mollitia enim illum. Nulla, placeat aut!</p>
        </motion.div>

        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: IBenefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          <div>
            <div className="relative">
              <motion.div
                className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam at beatae rerum perspiciatis, ipsa sint a impedit consectetur facere ex ut, quia nulla inventore vel iure dolor illum doloremque laudantium?
                Eaque quia iure quae, fugiat odio quibusdam et ut excepturi in quod natus aut pariatur vel itaque dolor culpa rem doloribus necessitatibus at! Veniam omnis alias quos perferendis nihil debitis!</p>
              <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ipsa delectus inventore? Debitis adipisci tempora odio fugiat repellat sed accusamus iusto, aut dolores, tenetur nisi maxime harum laudantium? Iste, quas.</p>
            </motion.div>

            <div className="relative mt-16">
              <div
                className=" before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[1] "
              ></div>
              <ActionBtn setSelectedPage={setSelectedPage}>
                Join Now
              </ActionBtn>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
};

export default Benefits