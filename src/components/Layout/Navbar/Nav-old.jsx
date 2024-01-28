import { AiFillFolder, AiFillHome, AiFillMail } from 'react-icons/ai';
import {BiSolidBook, BiSolidBriefcase} from 'react-icons/bi';

const Nav = () => {
    const iconSize = 18;

    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex items-center mr-4">
            <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-20 px-4 py-6 flex flex-col rounded-md gap-6  shadow-md">
                <AiFillHome className="text-white cursor-pointer" size={iconSize}/>
                <AiFillFolder className="text-white cursor-pointer" size={iconSize}/>
                <BiSolidBriefcase className="text-white cursor-pointer" size={iconSize}/>
                <BiSolidBook className="text-white cursor-pointer" size={iconSize}/>
                <AiFillMail className="text-white cursor-pointer" size={iconSize}/>
            </div>
        </div>
    );
};

export default Nav;
