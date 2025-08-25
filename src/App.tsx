import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UsersList from "./pages/UserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* TODO3: เพิ่ม Route ไป <Home> ให้สมบูรณ์ */}
        <Route path="/" element={<Home name="Natchanon" />} />

        {/* TODO3: เพิ่ม Route ไป <UsersList> ให้สมบูรณ์ */}
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
