// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import AuthReg from "./pages/auth-reg/AuthReg.tsx";
import Profile from "./pages/profile/Profile.tsx";
import Search from "./pages/search/Search.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<AuthReg />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/search" element={<Search/>} />
            </Routes>
        </Router>
    );
}

export default App;
