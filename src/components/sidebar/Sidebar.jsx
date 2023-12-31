import { useState } from "react"
import { motion } from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
import Toggle from "./toggle/Toggle"


const variants = {
    open: {
      clipPath: "circle(1200px at 50px 46px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(24px at 45px 42px)",
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 40,
        
      },
    },
  };

const Sidebar = () => {


    const [open,setOpen] = useState(false)


  return (

    <motion.div className="sidebar" animate = {open ? "open" : "closed" }>
        <motion.div className="bg" variants = {variants}>
            <Links/>
        </motion.div>
            <Toggle setOpen={setOpen}/>
    </motion.div>
  );

};

export default Sidebar
