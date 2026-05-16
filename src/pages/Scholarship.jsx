function Scholarship() {
  return (
    <div className="container">
      <h2>Scholarship Application</h2>

      <form>
        <input type="text" placeholder="Enter Student Name" />

        <input type="text" placeholder="Enter Roll Number" />

        <input type="text" placeholder="Enter Family Income" />

        <input type="text" placeholder="Enter Category" />

        <textarea placeholder="Reason for Scholarship"></textarea>

        <button type="button">Apply</button>
      </form>
    </div>
  );
}

export default Scholarship;