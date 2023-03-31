import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
