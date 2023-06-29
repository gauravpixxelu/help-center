import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/css/style.css';
import './assets/css/mobile.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import HelpCenter from './Components/HelpCenter';
import ConsultingManual from './Components/ConsultingManual';
import StrategyConsulting from './Components/StrategyConsulting';
import TurnAroundRecovery from './Components/TurnAroundRecovery';
import AskBOB from './Components/AskBOB';
import AccesstoMarket from './Components/AccesstoMarket';
import BusinessBuilder from './Components/BusinessBuilder';
import GrowthAccelerator from './Components/GrowthAccelerator';
import CEOBusinessBuilder from './Components/CEOBusinessBuilder';
import CEOGrowthAccelerator from './Components/CEOGrowthAccelerator';
import CEOTurnAroundRecovery from './Components/CEOTurnAroundRecovery';
import CEOAccesstoMarket from './Components/CEOAccesstoMarket'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HelpCenter />} />
          <Route path="/consulting-manual" element={<ConsultingManual />} />
          <Route path="/strategy-consulting" element={<StrategyConsulting />} />
          <Route path="/turn-around-recovery" element={<TurnAroundRecovery />} />
          <Route path="/ask-bob" element={<AskBOB />} />
          <Route path="/access-to-market" element={<AccesstoMarket />} />
          <Route path="/business-builder" element={<BusinessBuilder />} />
          <Route path="/growth-accelerator" element={<GrowthAccelerator />} />
          <Route path="/ceo-business-builder" element={<CEOBusinessBuilder />} />
          <Route path="/ceo-growth-accelerator" element={<CEOGrowthAccelerator />} />
          <Route path="/ceo-turn-around-recovery" element={<CEOTurnAroundRecovery />} />
          <Route path="/ceo-access-to-market" element={<CEOAccesstoMarket />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
