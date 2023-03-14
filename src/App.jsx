import { BrowserRouter } from "react-router-dom";
import Content from "./layouts/Content";
import Menu from "./layouts/Menu";
import "./App.css"

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    );
}

export default App;