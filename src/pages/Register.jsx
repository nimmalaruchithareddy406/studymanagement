function Register() {
  return (
    <div className="container">
      <h2>Student Registration</h2>

      <form>
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter Roll Number" />
        <input type="email" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Branch" />
        <input type="text" placeholder="Enter Year" />
        <input type="text" placeholder="Enter Mobile Number" />
        <input type="password" placeholder="Create Password" />

        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default Register;