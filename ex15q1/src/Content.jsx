import { useState } from "react";
function Content() {
    const [joke,setJoke] = useState("");
    const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don’t eggs tell jokes? Because they might crack up!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the math book look sad? Because it had too many problems.",
  "Why don’t scientists trust atoms? Because they make up everything!",
  "What did one ocean say to the other ocean? Nothing, they just waved.",
  "Why couldn’t the bicycle stand up by itself? It was two-tired.",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why did the tomato turn red? Because it saw the salad dressing!"
    ];


    function getRandomInt() {
    return Math.floor(Math.random() * (10)) + 0;
   
    }


    function handleclick(){
        const randomindex = getRandomInt();
        setJoke(jokes[randomindex]);
    }
    return (
   
    <>
    <div style={{padding:"20px",textAlign:"center",marginTop:"100px"}}>
        <h3>Click the button to generate a random joke</h3>
        <button style={{padding:"10px"}} onClick={handleclick}>Generate a joke</button>
        <br/> <br/>
        <p style={{backgroundColor:"bisque",padding:"20px",width:"400px",textAlign:"center",margin:"auto"}}>{joke}</p>
    </div>
    </>
  );
}


export default Content;