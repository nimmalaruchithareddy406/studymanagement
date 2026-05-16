import { useState } from "react";

function CGPACalculator() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [s4, setS4] = useState("");

  const [cgpa, setCgpa] = useState("");

  function calculateCGPA() {
    const total =
      parseFloat(s1) +
      parseFloat(s2) +
      parseFloat(s3) +
      parseFloat(s4);

    const result = total / 4;

    setCgpa(result.toFixed(2));
  }

  return (
    <div className="container">
      <h2>CGPA Calculator</h2>

      <input
        type="number"
        placeholder="Semester 1 GPA"
        value={s1}
        onChange={(e) => setS1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Semester 2 GPA"
        value={s2}
        onChange={(e) => setS2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Semester 3 GPA"
        value={s3}
        onChange={(e) => setS3(e.target.value)}
      />

      <input
        type="number"
        placeholder="Semester 4 GPA"
        value={s4}
        onChange={(e) => setS4(e.target.value)}
      />

      <button onClick={calculateCGPA}>
        Calculate CGPA
      </button>

      {cgpa && (
        <h3>Your CGPA is: {cgpa}</h3>
      )}
    </div>
  );
}

export default CGPACalculator;