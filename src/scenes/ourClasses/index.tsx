import { IClass, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "@/scenes/ourClasses/Class.tsx";

// img's
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"


const classes: IClass[] = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore quis, consequatur Inventore, dolorem impedit.",
    image: image1,
  },
  {
    name: "Yoga Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore quis, consequatur Inventore, dolorem impedit.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    image: image3,
  },
  {
    name: "Adventure Training Classes",
    image: image4,
  },
  {
    name: "Fitness Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore quis, consequatur Inventore, dolorem impedit.",
    image: image5,
  },
  {
    name: "Training Classes",
    image: image6,
  },
]


interface OurClassesProps {
  setSelectedPage: (value: SelectedPage) => void;
}


const OurClasses = ({
  setSelectedPage
}: OurClassesProps) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w=3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda doloribus laboriosam quidem explicabo error placeat fuga?
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[335px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: IClass, i) => (
              <Class
                key={`${item.name}-${i}}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
};

export default OurClasses