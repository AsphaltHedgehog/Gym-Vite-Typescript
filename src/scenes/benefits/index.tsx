import HText from "@/shared/HText";
import { IBenefit, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

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
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi rerum sit dolor praesentium repudiandae itaque. Obcaecati, hic explicabo doloremque nihil maxime quo quod mollitia enim illum. Nulla, placeat aut!</p>
        </div>

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
      </motion.div>
    </section>
  )
}

export default Benefits