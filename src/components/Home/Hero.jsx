import CuteAvatar from "./images/cute-avatar.svg";
import {motion} from "framer-motion";

const Hero = () => {
    const heroImageAnimationConfig = {
        y: [10, -10, 10]
    };

    const heroTextAnimationConfig = {
        opacity: 1,
        y: 0
    };

    return (
        <div className="md:flex md:flex-row md:justify-center md:items-center md:pb-36 md:gap-36 md:h-full md:mt-0
        flex flex-col-reverse justify-center gap-8 mt-4 items-center text-center text-white">
            <div>
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{opacity: 0, y: 100 }}
                    animate={heroTextAnimationConfig}
                    transition={{
                        duration: 2,
                    }}
                >
                    <h2 className="md:text-6xl lg:text-5xl text-2xl font-bold">Full-stack developer</h2>
                    <p className="md:text-2xl lg:text-2xl text-xl font-bold">My love for coding lies in bringing my thoughts to the digital world</p>
                </motion.div>

            </div>

            <div>
                <motion.div animate={heroImageAnimationConfig} transition={{duration: 3, ease: 'linear', repeat: Infinity}}>
                    <img src={CuteAvatar} alt="Saturn" className="w-72" />
                </motion.div>
            </div>
        </div>
    )
};

export default Hero;
