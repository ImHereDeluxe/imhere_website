// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import AuthReg from "./pages/auth-reg/AuthReg.tsx";
import Profile from "./pages/profile/Profile.tsx";
import Search from "./pages/search/Search.tsx";
import Version from "./shared/features/version/Version.tsx";
import Error from "@pages/error/Error.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<AuthReg />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/pusdos" element={<Error/>} />
            </Routes>
            <Version/>
        </Router>
    );
}

export default App;
