const Checkout = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <input type="text" placeholder="Your full name" className="border p-2" />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" placeholder="Shipping address" className="border p-2" />
        </div>
        <button type="submit" className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;