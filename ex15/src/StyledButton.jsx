function StyledButton() {
    const buttonStyle = {
      backgroundColor: "#3498db",
      color: "white",
      padding: "10px 20px",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin:"100px"
    };
  
  
    return <button style={buttonStyle}>Click me</button>;
  }
  
  
  export default StyledButton;