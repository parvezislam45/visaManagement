import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Australia from './Components/Country/Australia';
import Canada from './Components/Country/Canada';
import Country from './Components/Country/Country';
import Singapur from './Components/Country/Singapur';
import Soudia from './Components/Country/Soudia';
import Uk from './Components/Country/Uk';
import Usa from './Components/Country/Usa';
import Course from './Components/Course/Course';
import Ielts from './Components/Course/Ielts';
import Management from './Components/Course/Management';
import Pte from './Components/Course/Pte';
import ReExam from './Components/Course/ReExam';
import Schlotic from './Components/Course/Schlotic';
import Toffel from './Components/Course/Toffel';
import EndSection from './Components/Home/EndSection';
import Home from './Components/Home/Home';
import Nav from './Components/Nav';
import BusinessVisa from './Components/Visa/BusinessVisa';
import HajjVisa from './Components/Visa/HajjVisa';
import JobVisa from './Components/Visa/JobVisa';
import MedicalVisa from './Components/Visa/MedicalVisa';
import StudentVisa from './Components/Visa/StudentVisa';
import TouristVisa from './Components/Visa/TouristVisa';
import TransitVisa from './Components/Visa/TransitVisa';
import Visa from './Components/Visa/Visa';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/visa'element={<Visa></Visa>}></Route>
        <Route path='/student'element={<StudentVisa></StudentVisa>}></Route>
        <Route path='/business'element={<BusinessVisa></BusinessVisa>}></Route>
        <Route path='/hajj'element={<HajjVisa></HajjVisa>}></Route>
        <Route path='/job'element={<JobVisa></JobVisa>}></Route>
        <Route path='/medical'element={<MedicalVisa></MedicalVisa>}></Route>
        <Route path='/transit'element={<TransitVisa></TransitVisa>}></Route>
        <Route path='/tour'element={<TouristVisa></TouristVisa>}></Route>
        <Route path='/blog'element={<Blog></Blog>}></Route>
        <Route path='/country'element={<Country></Country>}></Route>
        <Route path='/australia'element={<Australia></Australia>}></Route>
        <Route path='/canada'element={<Canada></Canada>}></Route>
        <Route path='/singapur'element={<Singapur></Singapur>}></Route>
        <Route path='/soudia'element={<Soudia></Soudia>}></Route>
        <Route path='/uk'element={<Uk></Uk>}></Route>
        <Route path='/usa'element={<Usa></Usa>}></Route>
        <Route path='/ielts'element={<Ielts></Ielts>}></Route>
        <Route path='/course'element={<Course></Course>}></Route>
        <Route path='/management'element={<Management></Management>}></Route>
        <Route path='/pte'element={<Pte></Pte>}></Route>
        <Route path='/exam'element={<ReExam></ReExam>}></Route>
        <Route path='/scholastic'element={<Schlotic></Schlotic>}></Route>
        <Route path='/toefl'element={<Toffel></Toffel>}></Route>
        
        
      </Routes>
     <EndSection></EndSection>
    </div>
  );
}

export default App;
