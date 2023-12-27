
import { NavLink } from "react-router-dom";

const DashboardMenu = () => {

    return (
        <>
            <li><NavLink
                to="dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        : !isActive ? "active text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            : " text-2xl font-bold hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                }
            >
                Home
            </NavLink></li>
            <li><NavLink
                to="to-do-list"
                className={({ isActive, isPending }) =>
                    isPending ? "pending text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        : isActive ? "active text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            : " text-2xl font-bold hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                }
            >
                To-Do list
            </NavLink></li>
            <li><NavLink
                to="ongoing-list"
                className={({ isActive, isPending }) =>
                    isPending ? "pending text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        : isActive ? "active text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            : " text-2xl font-bold hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                }
            >
                Ongoing list
            </NavLink></li>
            <li><NavLink
                to="completed-list"
                className={({ isActive, isPending }) =>
                    isPending ? "pending text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        : isActive ? "active text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            : " text-2xl font-bold hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                }
            >
                Completed list
            </NavLink></li>
            <li><NavLink
                to="create-task"
                className={({ isActive, isPending }) =>
                    isPending ? "pending text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        : isActive ? "active text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            : " text-2xl font-bold hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                }
            >
                Create Task
            </NavLink></li>
            <li><NavLink
                to="/previous-task"
                className={({ isActive, isPending }) =>
                    isPending ? "pending text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        : isActive ? "active text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                            : " text-2xl font-bold hover:text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500"
                }
            >
                Previous task
            </NavLink></li>
        </>
    );
};

export default DashboardMenu;