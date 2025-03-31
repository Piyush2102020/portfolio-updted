import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "../navBar/NavBar";
import { RootState } from "../../functions/store";
import { changeTheme} from "../../functions/slice";
import "./style.css";

export default function Header() {
    const dispatch = useDispatch();
    const theme=useSelector((state:RootState)=>state.theme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme === "default" ? "" : theme);
    }, [theme]); 

    return (
        <div className="header">
            <NavBar />
            <div className="header-right-pane">
                <select className="theme-selector" onChange={(e) => dispatch(changeTheme(e.target.value))} value={theme}>
                    <option value="default">Default</option>
                    <option value="purple">Purple</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
            </div>
        </div>
    );
}
