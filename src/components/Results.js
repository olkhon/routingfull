import React from 'react';
import './styles.css';

export default function Results (
  {subjects,
    student,
    grades
  })
   {



    return (
        <div>
            {student}
            <tr>
              <td>{
              subjects.map((subject) => (
                <ul>{subject}</ul>
              ))
            }</td>
              <td> {
              grades.map((grade) => (
                <ul>{grade}</ul>
              ))
            }</td>
            </tr>



        </div>
    )
}