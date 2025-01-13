import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";

function AppHeader() {

    const globalProviderValue = useContext(GlobalContext);
    const {navLinks} = globalProviderValue;

    return (
        <header>
            <nav>
                <div className="container">
                    <ul>
                        {navLinks.map((curPage) => (
                            <li key={curPage.title}>
                                <NavLink to={curPage.path}>{curPage.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader;