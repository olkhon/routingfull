import React from 'react';
import './styles.css';

export default function Results ({subjects}) {



    return (
        <div>
            <table id="grades">
  <tr>
    <th>Subjects</th>
    <th>Grades</th>
  </tr>
  <tr>

    <td>{subjects.map(subject => (
        <ul>{subject}</ul>
      ))}</td>

  </tr>


</table>
        </div>
    )
}