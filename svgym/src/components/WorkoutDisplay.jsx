import React from 'react'
import { Link } from 'react-router-dom'

export default function WorkoutDisplay(props) {
  return (
    <div>
        <h1>{`Workout Number: ${props.workout.num}`}</h1>
        <h1>{`Workout KM: ${props.workout.km}`}</h1>
        <button>Success</button><br />
        <Link to={`/training/:${props.fullName}`}><button>Failure</button></Link>
    </div>
  )
}
