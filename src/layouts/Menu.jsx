import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <div className="Logo">
                            React Router
                        </div>
                    </li>
                    <li>
                        <Link to={"/"}>Início</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>Sobre</Link>
                    </li>
                    <li>
                        <Link to={"/param/1"}>Parâmetro</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;