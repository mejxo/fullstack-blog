import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import AuthForm from "./pages/authForm.page";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar type="time"/>}>
                <Route path="signin" element={<AuthForm type="sign-in"/>} />
            </Route>

            <Route path="/" element={<Navbar type="classic"/>}>
                <Route path="stories" element={<h1>Stories here</h1>} />
            </Route>

            <Route path="/" element={<Navbar type="monster"/>}>
            <Route path="shift-weekly" element={<h1>Shift-weekly here</h1>} />
            </Route>
        </Routes>
    )
}

export default App;