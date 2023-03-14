import { Route, Routes } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Param from "../views/Param";
import "./Content.css"

const Content = () => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/param/:id" exact element={<Param />} />
                <Route path="/about" element={<About />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </main>
    );
}

export default Content;