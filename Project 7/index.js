//import React from "react";
//import reactDOM from "react-dom";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";


function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
)
}


const root = document.getElementById("root");
ReactDOM.render(<Page />, root);