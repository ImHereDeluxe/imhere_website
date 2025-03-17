// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import AuthReg from "./pages/auth-reg/AuthReg.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/main" element={<Home />} />
                <Route path="/" element={<AuthReg />} />
            </Routes>
        </Router>
    );
}

export default App;
