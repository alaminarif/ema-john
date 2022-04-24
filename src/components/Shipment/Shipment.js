import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-grp">
            <label htmlFor="text">Name</label>
            <input type="text" onBlur={handleNameBlur} name="text" id="text" required />
          </div>
          <div className="input-grp">
            <label htmlFor="email">Email</label>
            <input type="email" value={user?.email} readOnly name="email" id="email" required />
          </div>
          <div className="input-grp">
            <label htmlFor="address">Address</label>
            <input type="text" onBlur={handleAddressBlur} name="text" id="address" required />
          </div>
          <div className="input-grp">
            <label htmlFor="phone">Phone</label>
            <input type="text" onBlur={handlePhoneBlur} name="phone" id="phone" required />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Shipment" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
