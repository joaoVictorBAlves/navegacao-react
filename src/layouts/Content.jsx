import { Route, Routes } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Param from "../views/Param";
import "./Content.css"

const Content = () => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/param/:id" exact element={<Param />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Content;