import { Route, HashRouter, Routes } from 'react-router-dom';
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
  const [workoutList, setWorkoutList] = useState([]);

  return (
    <div className="App">
      <Header />
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
              workoutList={workoutList}
              setWorkoutList={setWorkoutList}
            />} />
          <Route path='/workoutdisplay' element={
            <WorkoutDisplay
              trainer={trainer}
              workout={workout}
              fullName={fullName}
              setWorkout={setWorkout}
              setWorkoutList={setWorkoutList}
              workoutList={workoutList}
            />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
