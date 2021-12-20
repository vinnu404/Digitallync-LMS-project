
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen18 from './Screen18';
import Screen15 from './Screen15';
import Screen16 from './Screen16';
import Screen19 from './Screen19';
import Screen20 from './Screen20';
import Screen21 from './Screen21';
import Screen22 from './Screen22';
import Screen23 from './Screen23';
import Screen25 from './Screen25';
import Screen26 from './Screen26';
import Screen27 from './Screen27';
import Screen28 from './Screen28';
import Screen29 from './Screen29';
import Screen17 from './Screen17';
import Screen6 from './Screen6';
import Screen14 from './Screen14';
import Screen10 from './Screen10';
import Screen7 from './Screen7';
import Screen12 from './Screen12';
import Screen8 from './Screen8';
import Screen9 from './Screen9';
import Screen1 from './Screen1';
import Screen11 from './Screen11';
import Screen13 from './Screen13';
import Screen2 from './Screen2';
import Screen24 from './Screen24';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
function App() {
  return (
    <div className="App">
      <Screen1/>
    <BrowserRouter>
       <Routes>
         {/* <Route path="/screen1" element={<Screen1></Screen1>}></Route> */}
         <Route path="/screen2" element={<Screen2></Screen2>}></Route>
         <Route path="/screen3" element={<Screen3></Screen3>}></Route>
         <Route path="/screen4" element={<Screen4></Screen4>}></Route>
         <Route path="/screen5" element={<Screen5></Screen5>}></Route>
         <Route path="/screen6" element={<Screen6></Screen6>}></Route>
         <Route path="/screen7" element={<Screen7></Screen7>}></Route>
         <Route path="/screen8" element={<Screen8></Screen8>}></Route>
         <Route path="/screen9" element={<Screen9></Screen9>}></Route>
         <Route path="/screen10" element={<Screen10></Screen10>}></Route>
         <Route path="/screen11" element={<Screen11></Screen11>}></Route>
         <Route path="/screen12" element={<Screen12></Screen12>}></Route>
         <Route path="/screen13" element={<Screen13></Screen13>}></Route>
         <Route path="/screen14" element={<Screen14></Screen14>}></Route>
         <Route path="/screen15" element={<Screen15></Screen15>}></Route>
         <Route path="/screen16" element={<Screen16></Screen16>}></Route>
         <Route path="/screen17" element={<Screen17></Screen17>}></Route>
         <Route path="/screen18" element={<Screen18></Screen18>}></Route>
         <Route path="/screen19" element={<Screen19></Screen19>}></Route>
         <Route path="/screen20" element={<Screen20></Screen20>}></Route>
         <Route path="/screen21" element={<Screen21></Screen21>}></Route>
         <Route path="/screen22" element={<Screen22></Screen22>}></Route>
         <Route path="/screen23" element={<Screen23></Screen23>}></Route>
         <Route path="/screen24" element={<Screen24></Screen24>}></Route>
         <Route path="/screen25" element={<Screen25></Screen25>}></Route>
         <Route path="/screen26" element={<Screen26></Screen26>}></Route>
         <Route path="/screen27" element={<Screen27></Screen27>}></Route>
         <Route path="/screen28" element={<Screen28></Screen28>}></Route>
         <Route path="/screen29" element={<Screen29></Screen29>}></Route>
       </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
