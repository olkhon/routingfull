import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import MyComponent from './components/MyComponent';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(result => result.data);
      return students;
    };
    fetchStudents().then(res => setStudents(res));
  }, []);

  const subjects = ["React", "HTML", "CSS", "JS"];

  return (
    <div className="App">
      <nav>
        <a className="link" href="#">
          Students
        </a>
        <a className="link" href="#">
          Student Results
        </a>
      </nav>
      <div className="Instructions">
        <div className="block">
          For this exercise, you will have to:
          <ol>
            <li>
              Install <b>react-router-dom</b>, then import BrowserRouter and
              wrap your component tree with it (see previous exercises). Then
              declare a router in App.js
            </li>
            <li>
              Create a component named <em>{"<Students>"}</em> that will display
              information about all the students. You can pass the prepared{" "}
              <b>students</b> list as props. Clicking on the Students button in
              the navbar should display all students and update the url to{" "}
              <b>/students</b>
            </li>
            <li>
              When one of the navbar item is selected, the text should be
              highlighted in white.
            </li>
            <li>
              It should be possible to click on the name of a single student
              from the list in order to view the info regarding that specific
              student. The URL should be updated accordingly to{" "}
              <b>/students/someId</b>
            </li>
            <li>
              Create a second component named <em>{"<Results>"}</em> that will
              display <b>the students' grade for each subject</b>. You can pass
              the prepared <b>students</b> and <b>subjects</b> lists as props.
            </li>
            <li>
              <b>EXTRA:</b> It should be possible to click on the name of a
              single student inside the results list, in order to view the
              information for that specific student.
            </li>
            <li>
              <b>EXTRA:</b> When I see a student's info, it should be possible
              to click on a button that reads "See results". This button will
              take me to /results/someId and I will see the results only for
              that specific student
            </li>
            <li>
              <b>EXTRA:</b> On the students or results page, I should have a
              button. When I click on it, it will alert me "Going back to the
              main page", and change the url to /. I should not use a Link or
              NavLink here.
            </li>
          </ol>
          <div>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reacttraining.com/react-router/web/example/url-params"
            >
              Help{" "}
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reacttraining.com/react-router/web/api/Hooks/useparams"
            >
              Help{" "}
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reacttraining.com/react-router/web/api/NavLink"
            >
              Help{" "}
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://gomakethings.com/chaining-array-methods-in-vanilla-js/"
            >
              Help{" "}
            </a>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reacttraining.com/react-router/web/api/history"
            >
              Help{" "}
            </a>
          </div>
        </div>

        <div className="block">
          <MyComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
