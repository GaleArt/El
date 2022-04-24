import { Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

import { Home } from '../pages/home/home';
import { Calendar } from '../pages/calendar/calendar';
import { Todo } from '../pages/todo/todo';
import { Reminder } from '../pages/reminder/reminder';
import { Detour } from '../pages/detour/detour';

export default function App() {
  return (
    <>
      <header>
        <Link to="/"><img src="./calculators.png"/></Link>
        <Link to="/calendar"><img src="./calendar.png"/></Link>
        <Link to="/todo"><img src="./todo.png"/></Link>
        <Link to="/reminder"><img src="./reminder.png"/></Link>
        <Link to="/detour"><img src="./detour.png"/></Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="todo" element={<Todo />} />
        <Route path="reminder" element={<Reminder />} />
        <Route path="detour" element={<Detour />} />
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
