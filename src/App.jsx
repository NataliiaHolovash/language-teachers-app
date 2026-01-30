import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Teachers from "./pages/Teachers/Teachers";
import Favorites from "./pages/Favorites/Favorites";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
const isAuth = false;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" 
        element={<ProtectedRoute isAuth={isAuth}> 
        <Favorites /> 
        </ProtectedRoute>}
           />
      </Route>
    </Routes>
  );
}

export default App;

