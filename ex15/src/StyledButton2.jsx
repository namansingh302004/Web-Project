function StyledButton2() {
    return (
      <>
        <style>{`
          .styled-button {
            background-color: #3498db;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 100px;
          }
        `}</style>
       
        <button className="styled-button">Click Me</button>
      </>
    );
  }
   export default StyledButton2;