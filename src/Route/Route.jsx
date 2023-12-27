import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import CreateTask from "../Pages/Dashboard/CreateTask";
import ToDoList from "../Pages/ToDoList.jsx/ToDoList";
import OngoingList from "../Pages/OngingList/OngoingList";
import CompleteList from "../Pages/CompleteList.jsx/CompleteList";

export const Route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },

        ]
    },
    {
        path: '/Dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                path: 'Dashboard',
                element: <DashboardHome />
            },
            {
                path: 'create-task',
                element: <CreateTask />
            },
            {
                path: 'to-do-list',
                element: <ToDoList />
            },
            {
                path: 'ongoing-list',
                element: <OngoingList />
            },
            {
                path: 'completed-list',
                element: <CompleteList />
            },

        ]
    }
]);

