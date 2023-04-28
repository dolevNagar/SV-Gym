import { HashRouter as Router, Switch, Route, Link, HashRouter, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import Workouts from './components/Workouts';
import Ready from './components/Ready';
import Training from './components/Training';
import WorkoutDisplay from './components/WorkoutDisplay';
import Header from './components/Header'

function App() {
  const [trainer, setTrainer] = useState('');
  const [id, setID] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState(true);
  const [selectedWorkoutOption, setSelectedWorkoutOption] = useState(Number);
  const [selectedYearsOption, setSelectedYearsOption] = useState(Number);
  const [workout, setWorkout] = useState('');


  return (
    <div className="App">
      <Header />
      <TransitionGroup>
        <HashRouter>
          <Routes>
            <Route path='/' element={
              <Index
                setID={setID}
                id={id}
                setFullName={setFullName}
                fullName={fullName}
                setGender={setGender}
                gender={gender}
              />} />
            <Route path='/workouts' element={
              <Workouts
                setSelectedWorkoutOption={setSelectedWorkoutOption}
                selectedWorkoutOption={selectedWorkoutOption}
                setSelectedYearsOption={setSelectedYearsOption}
                selectedYearsOption={selectedYearsOption}
              />} />
            <Route path='/ready' element={
              <Ready
                id={id}
                fullName={fullName}
                gender={gender}
                selectedWorkoutOption={selectedWorkoutOption}
                selectedYearsOption={selectedYearsOption}
                setTrainer={setTrainer}
              />} />
            <Route path="/training/:fullName" element={
              <Training
                trainer={trainer}
                fullName={fullName}
                setWorkout={setWorkout}
              />} />
            <Route path='/workoutdisplay' element={
              <WorkoutDisplay
                workout={workout}
                fullName={fullName}
              />} />
          </Routes>
        </HashRouter>
      </TransitionGroup>
    </div>
  );
}

export default App;
