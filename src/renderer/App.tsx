import { Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import { Home } from '../pages/home/home';
import { Calendar } from '../pages/calendar/calendar';
import { Todo } from '../pages/todo/todo';
import { Reminder } from '../pages/reminder/reminder';
import { Archive } from '../pages/archive/archive';
import { Workers } from '../pages/workers/workers';
import { CheckList } from '../pages/checklist/checklist';
import { Calculators } from '../pages/calculators/calculators';
import { Admin } from '../pages/admin/admin';

export default function App() {
  return (
    <>
      <header>
        <Link to="/"><img src="./home.png"/></Link>
        <Link to="/calendar"><img src="./calendar.png"/></Link>
        <Link to="/todo"><img src="./todo.png"/></Link>
        <Link to="/reminder"><img src="./reminder.png"/></Link>
        <Link to="/archive"><img src="./archive.png"/></Link>
        <Link to="/workers"><img src="./workers.png"/></Link>
        <Link to="/checklist"><img src="./checklist.png"/></Link>
        <Link to="/calculators"><img src="./calculators.png"/></Link>
        <Link to="/admin"><img src="./admin.png"/></Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="todo" element={<Todo />} />
        <Route path="reminder" element={<Reminder />} />
        <Route path="archive" element={<Archive />} />
        <Route path="workers" element={<Workers />} />
        <Route path="calculators" element={<Calculators />} />
        <Route path="checklist" element={<CheckList />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    <div class="scene">
  	  <div class="space">
  		  <span></span><span></span><span></span>
  		  <div class="comet"><div class="comet-inner"></div></div>
  	  </div>
    </div>
    </>
  );
}
