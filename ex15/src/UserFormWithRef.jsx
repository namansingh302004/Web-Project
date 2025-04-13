import React, { useRef, useState } from "react";

const UserFormWithRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    setSubmittedData({ name, email });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form (using useRef)</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:{" "}
            <input
              type="text"
              ref={nameRef}
              placeholder="Enter your name"
              style={{ padding: "5px", width: "200px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:{" "}
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              style={{ padding: "5px", width: "200px" }}
            />
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserFormWithRef;
