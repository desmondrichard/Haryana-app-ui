
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';
// import Footer from './components/Footer';
import Tabs from './components/Tabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from './components/TabComponents/Bio';
import Stats from './components/TabComponents/Stats';
import Insights from './components/TabComponents/Insights';
import Matches from './components/TabComponents/Matches';
import Awards from './components/TabComponents/Awards';
import Photos from './components/TabComponents/Photos';
import Videos from './components/TabComponents/Videos';
import Batting from './components/TabComponents/Batting';
import Bowling from './components/TabComponents/Bowling';
import Fielding from './components/TabComponents/Fielding';
import BattingInsights from './components/TabComponents/BattingInsights';
import BowlingInsights from './components/TabComponents/BowlingInsights';
import BcciMatches from './components/NavBar components/BcciMatches';
import Tournaments from './components/NavBar components/Tournaments';
import Live from './components/NavBar components/Live';
import Teams from './components/NavBar components/Teams';
import Footer from './components/Footer';
// import Archive from './components/NavBar components/Archive';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='live' element={<Live />} />
            <Route path='tournaments' element={<Tournaments />} />
            <Route path='teams' element={<Teams />} />
            <Route path='bccimatches' element={<BcciMatches />} />
            {/* <Route path='archive' element={<Archive/>} /> */}
          </Route>
        </Routes>

        <Box />
        <Tabs className='position-absolute top-50' />
        <Routes>
          <Route path='/' element={<Bio />} />
          <Route path='/stats' element={<Stats />}>
            <Route path='batting' index element={<Batting />} />
            <Route path='bowling' element={<Bowling />} />
            <Route path='fielding' element={<Fielding />} />
          </Route>
          <Route path='/insights' element={<Insights />}>
            <Route path='insightsbatting' element={<BattingInsights />} />
            <Route path='insightsbowling' element={<BowlingInsights />} />
          </Route>
          <Route path='/matches' element={<Matches />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/videos' element={<Videos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
