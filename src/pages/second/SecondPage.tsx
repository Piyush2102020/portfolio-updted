import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import './style.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../functions/store";


export default function SecondPage() {
 


    const theme=useSelector((state:RootState)=>state.theme);
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme === "default" ? "" : theme);
    }, [theme]); 

    return (
        <>
            <div className="second-page">
                <Header />
                <div className="second-content">
                    <div className="childrens">
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    )
}