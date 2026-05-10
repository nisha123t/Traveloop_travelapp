import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import Register from "./pages/Register";
import BuildItinerary from "./pages/BuildItinerary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/createtrip" element={<CreateTrip />} />
        <Route path="/register" element={<Register />} />
        <Route path="/builditinerary" element={<BuildItinerary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;