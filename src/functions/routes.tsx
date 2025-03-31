import { useRoutes } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import SecondPage from "../pages/second/SecondPage";
import Home from "../childs/home/Home";
import Project from "../childs/projects/Projects";
import Pnf from "../pages/pnf/Pnf";
import ProjectDisplay from "../components/project-display/projectDisplay";
import About from "../childs/about/About";
import Contact from "../childs/contacts-page/contactPage";


export default function Routes(){


    const routes=useRoutes(
        [

            {path:'/',element:<LandingPage/>},
            {path:'home',element: <SecondPage/>,
                children:[
                    {path:'',element:<Home/>},
                    {path:'about',element:<About/>},
                    {path:'work',children:
                        [{path:'',element:<Project/>}
                            ,{path:'portfolio',element:<ProjectDisplay projectName="portfolio"/>},
                            {path:'agrodoc',element:<ProjectDisplay projectName="agrodoc"/>},
                            {path:'veronica',element:<ProjectDisplay projectName="veronica" type="desktop"/>},
                            {path:'confession',element:<ProjectDisplay projectName="confession"/>}
                        ]
                    },
                    {path:'contact',element:<Contact/>}
                ]
            },
            {path:'/*',element:<Pnf/>}
        ]
    )

    
    return routes;
}


