import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {useState} from "react";

const Header = () => {
    const iconSize = 28;

    const [isLinkedinHover, setIsLinkedinHover] = useState(false);
    const [isInstagramHover, setIsInstagramHover] = useState(false);
    const [isGithubHover, setIsGithubHover] = useState(false);

    return (
        <div className="pt-4 flex justify-between items-center">
            <a href="/" className="w-44 block">
                <span className="text-3xl font-bold">Logo</span>
            </a>
            <div className="flex gap-4">
                <a href="#" target="_blank">
                    <AiFillLinkedin
                        size={iconSize}
                        onMouseEnter={()=> setIsLinkedinHover(true)}
                        onMouseLeave={()=> setIsLinkedinHover(false)}
                        className={isLinkedinHover ? "text-rose-600" : "text-white"}
                    />
                </a>

                <a href="#" target="_blank">
                    <AiFillInstagram
                        size={iconSize}
                        onMouseEnter={()=> setIsInstagramHover(true)}
                        onMouseLeave={()=> setIsInstagramHover(false)}
                        className={isInstagramHover ? "text-rose-600" : "text-white"}
                    />
                </a>

                <a href="#" target="_blank">
                    <AiFillGithub
                        size={iconSize}
                        onMouseEnter={()=> setIsGithubHover(true)}
                        onMouseLeave={()=> setIsGithubHover(false)}
                        className={isGithubHover ? "text-rose-600" : "text-white"}
                    />
                </a>
            </div>
        </div>
    )
};

export default Header;
