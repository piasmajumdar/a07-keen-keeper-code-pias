import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/timeline/Timeline";
import StatsPage from "../pages/stats/StatsPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {index: true, Component: HomePage},
            {
                path: '/timeline',
                Component: Timeline
            },
            {
                path: '/stats',
                Component: StatsPage
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
])