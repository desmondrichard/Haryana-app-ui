
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box';
import Footer from './components/Footer';
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

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
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
        {/* <TabStats /> */}
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
