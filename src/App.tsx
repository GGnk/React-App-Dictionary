import React from "react";
import "./assets/scss/style.scss";
import Header from './components/header'
import Main from "./components/main";

const App: React.FC = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <Main />
    </div>
  );
};

export default App;
