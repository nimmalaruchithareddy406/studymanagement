function Payment() {
  return (
    <div className="container">
      <h2>Fee Payment</h2>

      <form>
        <input type="text" placeholder="Enter Student Name" />

        <input type="text" placeholder="Enter Roll Number" />

        <select>
          <option>Select Fee Type</option>
          <option>Tuition Fee</option>
          <option>Exam Fee</option>
          <option>Library Fee</option>
        </select>

        <input type="number" placeholder="Enter Amount" />

        <button type="button">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;