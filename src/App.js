import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Student from './component/student/student';
import Students from './component/student/students';
import AddStudent from './component/student/addStudent';
import EditStudent from './component/student/editStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Students/>} />
            <Route exact path="/students/create" element={<AddStudent/>} />
            <Route exact path="/students/:id" element={<Student/>} />
            <Route exact path="/students/:id/edit" element={<EditStudent/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
