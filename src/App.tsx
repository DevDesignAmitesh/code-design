import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState, type ReactElement } from "react";
import { PiHighHeelFill } from "react-icons/pi";

interface Content {
  title: string;
  description: string;
  icon: ReactElement;
  imgUrl: string;
}

const content: Content[] = [
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero quam atque perspiciatis natus dolorem rem assumenda repellendus et quia.",
    icon: <PiHighHeelFill size={40} />,
    imgUrl:
      "https://images.pexels.com/photos/32207802/pexels-photo-32207802.jpeg",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero quam atque perspiciatis natus dolorem rem assumenda repellendus et quia.",
    icon: <PiHighHeelFill size={40} />,
    imgUrl:
      "https://images.pexels.com/photos/32207802/pexels-photo-32207802.jpeg",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero quam atque perspiciatis natus dolorem rem assumenda repellendus et quia.",
    icon: <PiHighHeelFill size={40} />,
    imgUrl:
      "https://images.pexels.com/photos/32207802/pexels-photo-32207802.jpeg",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero quam atque perspiciatis natus dolorem rem assumenda repellendus et quia.",
    icon: <PiHighHeelFill size={40} />,
    imgUrl:
      "https://images.pexels.com/photos/32207802/pexels-photo-32207802.jpeg",
  },
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero quam atque perspiciatis natus dolorem rem assumenda repellendus et quia.",
    icon: <PiHighHeelFill size={40} />,
    imgUrl:
      "https://images.pexels.com/photos/32207802/pexels-photo-32207802.jpeg",
  },
];

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  const bgOpt = ["red", "green", "blue"];

  const [bg, setBg] = useState<string>(bgOpt[0]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalVal = bgOpt[Math.floor(latest * bg.length)];
    setBg(finalVal);
  });
  return (
    <motion.div
      animate={{
        background: bg,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      ref={ref}
      className="min-h-screen w-full relative flex justify-center items-center"
    >
      <div className="flex flex-col gap-4 w-full">
        {content.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ item }: { item: Content }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const translateImage = useTransform(scrollYProgress, [0, 1], [-200, 300]);
  const translateTextScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const translateOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );

  return (
    <div
      key={item.title}
      ref={ref}
      className="grid grid-cols-2 max-w-4xl mx-auto gap-10 py-40 items-center"
    >
      <motion.div
        style={{
          scale: translateTextScale,
        }}
        className="flex flex-col gap-4 text-white"
      >
        {item.icon}
        <h2 className="text-4xl font-bold">{item.title}</h2>
        <p className="text-neutral-400">{item.description}</p>
      </motion.div>

      <motion.div
        style={{
          y: translateImage,
          opacity: translateOpacity,
        }}
      >
        <img
          src={item.imgUrl}
          alt="img"
          height={300}
          width={300}
          className="rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default App;
