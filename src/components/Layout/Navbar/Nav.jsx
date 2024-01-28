import { AiFillFolder, AiFillHome, AiFillMail } from 'react-icons/ai';
import {BiSolidBriefcase} from 'react-icons/bi';
import {Link} from "react-scroll";
import {motion} from "framer-motion";

const Nav = () => {
    const iconSize = 18;

    return (
        <div className="fixed md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 md:flex md:items-center md:mr-4
        md:w-fit bottom-0 w-full z-10">
            <div className="md:flex md:flex-col md:gap-6 md:px-4 md:py-6 md:backdrop-filter md:backdrop-blur-md md:bg-white md:bg-opacity-20 md:rounded-md shadow-md
                md:w-fit justify-between flex w-full px-6 py-8 bg-gray-200
            ">
                <Link to="home" smooth={true}>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                        <AiFillHome className="md:text-white text-yellow-500 cursor-pointer md:text-lg text-4xl"/>
                    </motion.div>
                </Link>
                <Link to="projects" smooth={true}>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                        <AiFillFolder className="md:text-white text-yellow-500 cursor-pointer md:text-lg text-4xl"/>
                    </motion.div>
                </Link>
                <Link to="career" smooth={true}>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                        <BiSolidBriefcase className="md:text-white text-yellow-500 cursor-pointer md:text-lg text-4xl"/>
                    </motion.div>
                </Link>
                <Link to="contact" smooth={true}>
                    <motion.div
                        whileHover={{scale: 1.2}}
                    >
                        <AiFillMail className="md:text-white text-yellow-500 cursor-pointer md:text-lg text-4xl"/>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Nav;
