function Login() {
  return (
    <div className="container">
      <h2>Student Login</h2>

      <form>
        <input type="text" placeholder="Enter Roll Number" />

        <input type="password" placeholder="Enter Password" />

        <button type="button">Login</button>
      </form>
    </div>
  );
}

export default Login;