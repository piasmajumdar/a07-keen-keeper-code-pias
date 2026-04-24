import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Timeline from "../pages/timeline/Timeline";
import StatsPage from "../pages/stats/StatsPage";
import FriendDetails from "../pages/FriendDetails/FriendDetails";
import AllActivity from "../pages/timeline/allActivity/AllActivity";
import FilterCall from "../pages/timeline/FilterPage/FilterCall";
import FilterText from "../pages/timeline/FilterPage/FilterText";
import FilterVideo from "../pages/timeline/FilterPage/FilterVideo";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/timeline',
                Component: Timeline,
                children: [
                    {
                        index: true,
                        Component: AllActivity,
                    },
                    {
                        path: 'filter-call',
                        Component: FilterCall
                    },
                    {
                        path: 'filter-text',
                        Component: FilterText,
                    },
                    {
                        path: 'filter-video',
                        Component: FilterVideo,
                    },
                ],
            },
            {
                path: '/stats',
                Component: StatsPage
            },
            {
                path: '/friend-details/:friendId',
                loader: ()=> fetch('/friends.json'),
                Component: FriendDetails
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
])