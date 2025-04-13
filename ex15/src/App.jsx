import React, { useState } from "react";
import LifecycleDemo from "./LifecycleDemo";
import './App.css'
import FocusForm from "./FocusForm";
import { ThemeProvider } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
import ThemedBox from "./ThemedBox";
import UserForm from "./UserForm";
import UserFormWithRef from "./UserFormWithRef";
import StyledButton from "./StyledButton";
import StyledButton2 from "./StyledButton2";
import StyledButton3 from "./StyledButton3";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import RandomJoke from "./RandomJoke";
import Q10 from "./Q10";
import Q11 from "./Q11";
const App = () => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent((prev) => !prev);
  };

  return (
    <div className="p-6">
      <p>Question 2</p>
      <StyledButton/>
      <p>Question 3</p>
      <StyledButton2/>
      <p>Question 4</p>
      <StyledButton3/>
      <p>Question 5</p>
      <button
        onClick={toggleComponent}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4 hover:bg-red-600"
      >
        {showComponent ? "Unmount Component" : "Mount Component"}
      </button>
      {showComponent && <LifecycleDemo />}

      <p>Question 6</p>
      <Counter/>
      <p>Question 6 with modification</p>
      <Counter2/>
      <p>Question 7</p>
      <RandomJoke/>
      <div>
        <p>Question 8</p>
          <FocusForm/>
      </div>
      <div>
        <p>Question 9</p>
        <ThemeProvider>
        <h1 className="text-2xl font-bold">React Theme Context Example</h1>
        <ToggleThemeButton />
        <ThemedBox />
      </ThemeProvider>
      </div>

      <p>Question 10</p>
      <Q10/>
      <p>Question 11</p>
      <Q11/>
      <div>
        <p>Question 12 -UserForm</p>
        <UserForm/>
      </div>
      <div>
        <p>Question 12 - userform with ref</p>
        <UserFormWithRef/>
      </div>
    </div>
  );
};

export default App;
