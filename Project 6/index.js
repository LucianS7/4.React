//import React from "react";
//import reactDOM from "react-dom";


function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="./react-logo.png" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}


function Footer() {
  return (
    <footer className="footer">
      <small className="footer-text">© 2023 SL development. All rights reserved.</small>
    </footer>
  )
}


function MainComponent() {
  return(
    <div>
      <h1 className="title">Reasons I'm excited to learn React</h1>
      <ol className="reasons-list">
        <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  )
}


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