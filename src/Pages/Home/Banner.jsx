import { useContext } from "react";
import { userContext } from "../../Provider/AuthContext";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
    const { user } = useContext(userContext);
    const handleExplore = () => {
        if (user) {
            navigate('/dashboard')
        } else {
            navigate('/signup')
        }
    }

    return (
        <div className="max-w-[1024px] max-h-[500px] bg-gradient-to-r from-indigo-500 flex flex-col justify-center items-center p-5">

            <div className="flex justify-center items-center text-3xl text-[green] font-bold">
                <h1 className="max-w-[350px]  ">
                    Stay with us to make your work smarter</h1>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={() => handleExplore()} className="text-xl font-bold py-4 px-5 btn-outline m-10 bg-gradient-to-r from-pink-500 hover:to-yellow-500 rounded-md">Let's Explore</button>

            </div>
        </div>
    );
};

export default Banner;