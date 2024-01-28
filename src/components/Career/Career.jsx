import Section from "../Section/Section";
import {motion, useAnimation} from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { BiSolidBriefcase } from "react-icons/bi";
import {useEffect} from "react";
import { useInView } from 'react-intersection-observer';

const Career = ({ id }) => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
            const delay = 0.5 + i * 0.1;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, duration: 2, bounce: 0 },
                    opacity: { duration: 0.01 },
                },
            };
        },
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust threshold as needed
    });

    // Use Framer Motion's useAnimation hook to control animations
    const iconsControls = useAnimation();
    const horizontalLineControls = useAnimation();
    const detailControls = useAnimation();

    useEffect(() => {
        if (inView) {
            // Animate the icons to enter when the section is in view
            iconsControls.start({ opacity: 1, scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] });
            horizontalLineControls.start('visible');
            detailControls.start({opacity: 1, scale: [1.2, 1]});
        }
    }, [iconsControls, inView]);

    return (
        <Section id={id}>
            <div ref={ref} className="flex flex-col justify-center align-middle gap-36 h-full relative">
                <h2 className="text-3xl font-bold mb-6 text-center text-white md:mt-0 mt-6">Career</h2>

                <div className="relative">
                    <motion.svg
                        width="100%"
                        height="300"
                        viewBox="0 0 100% 300"
                        initial="hidden"
                        animate={horizontalLineControls}
                    >
                        <motion.line
                            x1="0"
                            y1="0"
                            x2="950"
                            y2="0"
                            stroke="#00cc88"
                            strokeWidth={15}
                            variants={draw}
                            custom={2}
                        />


                    </motion.svg>
                    <motion.div
                        className="absolute top-[-25px] left-0 bg-blue-700 p-3 border border-white border-2 rounded-full"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={iconsControls}
                        transition={{ delay: 0.8 }}
                    >
                        <FaGraduationCap size={30} color="white" />
                    </motion.div>

                    <motion.div
                        className="absolute top-[-25px] left-1/4 bg-yellow-500 p-3 border border-white border-2 rounded-full"
                        initial={{ opacity: 0, scale: 0.5}}
                        animate={iconsControls}
                        transition={{ delay: 1 }}
                    >
                        <BiSolidBriefcase size={30} color="white" />
                    </motion.div>

                    <motion.div
                        className="absolute top-[-25px] left-2/4 bg-yellow-500 p-3 border border-white border-2 rounded-full"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={iconsControls}
                        transition={{ delay: 1.4 }}
                    >
                        <BiSolidBriefcase size={30} color="white" />
                    </motion.div>


                    <motion.div
                        className="absolute top-[-25px] left-3/4 bg-blue-700 p-3 border border-white border-2 rounded-full"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={iconsControls}
                        transition={{ delay: 2.5 }}
                    >
                        <FaGraduationCap size={30} color="white" />
                    </motion.div>

                    <motion.div
                        className="absolute md:top-[-118px] top-[-180px] left-0"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={detailControls}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="relative bg-blue-700 md:w-56 w-28 p-2 rounded-lg shadow-md">
                            <div className="text-white font-medium flex flex-col">
                                <span className="md:text-base text-sm">University 1</span>
                                <span className="md:text-sm text-xs">Bachelor in Computer Science</span>
                                <span className="md:text-sm text-xs">2016 - 2020</span>
                            </div>
                            <div
                                className="absolute left-[30px] bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-blue-700">
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute top-[45px] left-1/4"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={detailControls}
                        transition={{ delay: 1.2 }}
                    >
                        <div className="relative bg-yellow-500 md:w-56 w-28 p-2 rounded-lg shadow-md">
                            <div className="text-white font-medium flex flex-col">
                                <span className="md:text-base text-sm">Company</span>
                                <span className="md:text-base text-sm">Intern</span>
                                <span className="md:text-base text-sm">2019 - 2020</span>
                            </div>
                            <div className="absolute top-0 left-[30px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-yellow-500"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute md:top-[-118px] top-[-155px] left-2/4"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={detailControls}
                        transition={{ delay: 1.6 }}
                    >
                        <div className="relative bg-yellow-500 md:w-56 w-28 p-2 rounded-lg shadow-md">
                            <div className="text-white font-medium flex flex-col">
                                <span className="md:text-base text-sm">Company</span>
                                <span className="md:text-base text-sm">Software Developer</span>
                                <span className="md:text-base text-smsm">2020 - 2022</span>
                            </div>
                            <div className="absolute left-[30px] bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-yellow-500"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute top-[45px] left-3/4"
                        initial={{opacity: 0, scale: 0.5}}
                        animate={detailControls}
                        transition={{ delay: 2.5 }}
                    >
                        <div className="relative bg-blue-700 md:w-56 w-24 p-2 rounded-lg shadow-md">
                            <div className="text-white font-medium flex flex-col md:gap-0 gap-2">
                                <span className="md:text-base text-sm">University 2</span>
                                <span className="md:text-base text-sm">Masters in Data Science</span>
                                <span className="md:text-base text-sm">2022 - 2023</span>
                            </div>
                            <div className="absolute top-0 left-[30px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 bg-blue-700"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Career;
