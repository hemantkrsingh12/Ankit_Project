
import './App.css';
import Navbar from './component/Navbar';
import Task1 from './page/Task1';
import { Route, Routes } from "react-router-dom"
import Task2 from './page/Task2';
import Task3 from './page/Task3';
import Task4 from './page/Task4';
import Task5 from './page/Task5';
import Task6 from './page/Task6';
import Task7 from './page/Task7';
import Task8 from './page/Task8';
import Task9 from './page/Task9';
import Task10 from './page/Task10';
import Start from './component/Start';
function App() {
  return (
    <div className='text-2xl'>

      <Navbar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7/:data" element={<Task7 />} />
        <Route path="/task8" element={<Task8 />} />
        <Route path="/task9" element={<Task9 />} />
        <Route path="/task10" element={<Task10 />} />
      </Routes>

    </div>

  );
}

export default App;
