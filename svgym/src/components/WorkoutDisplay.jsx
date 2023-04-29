import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function WorkoutDisplay(props) {
  const nav = useNavigate();
  const success = () => {
    let result = props.trainer.list.find(workout => workout.num == props.workout.num);
    props.trainer.list = props.trainer.list.filter(workout => workout.num !== result.num);
    nav(`/training/:${props.fullName}`)
  }

  return (
    <div className="container">
      <h1>{`Workout Number: ${props.workout.num}`}</h1>
      <h1>{`Workout KM: ${props.workout.km}`}</h1>
      <button onClick={success}>Success</button><br />
      <Link to={`/training/:${props.fullName}`}><button>Failure</button></Link>
    </div>
  )
}
