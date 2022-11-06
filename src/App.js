import { Route, BrowserRouter as Router, Switch, Routes} from "react-router-dom";
// import {Switch} from "react-router"
import EquipmentArchive from "./pages/equipment-archive";
import SingleEquipment from "./pages/single-equipment";


function App() {
  return (
    
    <Router>
    <Routes>
          <Route path="/" element={<EquipmentArchive />} />
          <Route path="/item" element={<SingleEquipment />} />
            
        </Routes> 
    </Router>
    
    
  );
}

export default App;
