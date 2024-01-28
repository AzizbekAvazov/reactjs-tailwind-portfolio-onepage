import Section from "../Section/Section";
import MachineLearningIc from "./images/machine-learning.png";
import JavaIc from "./images/java.png";
import {FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";

const Project = ({icon, title, desc}) => {

    return (
        <motion.div
            whileHover={{scale: 1.2}}
            className="w-72 h-96 py-6 px-6 flex flex-col gap-4 justify-between
            bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
            text-black"
        >
            <div className="flex flex-col gap-2 items-center">
                <img src={icon} alt="Machine learning icon" className="w-28 p-4 bg-slate-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90" />
                <h3 className="font-bold text-base text-center">{title}</h3>
                <p className="font-medium text-sm text-center">
                    {desc}
                </p>
            </div>

            <div>
                <a href="https://github.com/" target="_blank" className="inline-block">
                    <FaGithub size={28}/>
                </a>
            </div>
        </motion.div>
    )
};

const Projects = ({id}) => {

    return (
        <Section id={id}>
            <div className="flex flex-col justify-center items-center align-middle gap-12 h-full">
                <h2 className="text-3xl font-bold mb-6 text-center text-white mt-6 md:mt-0">Recent projects</h2>

                <div className="md:flex md:flex-row md:justify-between flex flex-col gap-12">
                    <Project
                        icon={MachineLearningIc}
                        title="Voice Recognition: Machine Learning for Personal Identification"
                        desc="Curious about how Alexa recognizes voices? ML application that learns different characteristics of different voices."
                    />

                    <Project
                        icon={MachineLearningIc}
                        title="Object detection: Detection of cars and trees in images"
                        desc="A reliable and accurate computer vision program that can detect trees and cars from images for various applications, such as autonomous vehicles, environmental monitoring, and city planning"
                    />

                    <Project
                        icon={JavaIc}
                        title="Telegram BOT"
                        desc="A Java Spring Boot Telegram bot designed for channel administrators, enabling them to effortlessly create and publish posts"
                    />
                </div>
            </div>
        </Section>
    )
};

export default Projects;
