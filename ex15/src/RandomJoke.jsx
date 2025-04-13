import { useEffect, useState } from "react";


export default function RandomJoke() {
 const [joke, setJoke] = useState("");
 const [loading, setLoading] = useState(false);


 const fetchJoke = async () => {
   setLoading(true);
   try {
     const response = await fetch("https://official-joke-api.appspot.com/random_joke");
     const data = await response.json();
     setJoke(`${data.setup} - ${data.punchline}`);
   } catch (error) {
     setJoke("Failed to fetch a joke. Try again!");
   }
   setLoading(false);
 };


 useEffect(() => {
   fetchJoke();
 }, []);


 return (
   <div>
       <br />
     <div>
       <div>
         {loading ? "Loading..." : joke}
       </div>
     </div>
     <br />
     <button onClick={fetchJoke} disabled={loading}>
       {loading ? "Fetching..." : "Get Another Joke"}
     </button>
   </div>
 );
}
