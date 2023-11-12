import { motion } from "framer-motion";

const FadeInComponent = (props: { children: React.ReactNode, delay: number, slideIn: boolean }) => {

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: props.slideIn ? 75 : 0 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden" animate="visible"
      transition={{ duration: 0.7, delay: props.delay }}
    >
      {props.children}
    </motion.div>
  )
}

export default FadeInComponent