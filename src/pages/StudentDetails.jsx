import { useState } from "react";

function StudentDetails() {
  const [search, setSearch] = useState("");

  const students = [
    {
      roll: "24071A05J2",
      name: "Ruchitha",
      branch: "CSE",
      year: "2nd Year",
      cgpa: "8.9",
    },
    {
      roll: "24071A0501",
      name: "Anu",
      branch: "CSE",
      year: "2nd Year",
      cgpa: "8.5",
    },
    {
      roll: "24071A0502",
      name: "Rahul",
      branch: "CSE",
      year: "2nd Year",
      cgpa: "8.2",
    },
    {
      roll: "24071A0503",
      name: "Sneha",
      branch: "IT",
      year: "2nd Year",
      cgpa: "9.1",
    },
    {
      roll: "24071A0504",
      name: "Kiran",
      branch: "ECE",
      year: "2nd Year",
      cgpa: "7.9",
    },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Student Details</h2>

      <input
        className="search-box"
        type="text"
        placeholder="Search by name or roll number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>CGPA</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td>{student.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;