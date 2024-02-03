import React from "react";


export default function App () {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsletter: true
  })
  
  function emailValidation (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return isValid
  }

  function passwordValidation (password) {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:'",<.>/?]).{8,}$/;
    const isValid = passwordRegex.test(password);
    return isValid
  }
  
  
  function handleOnChange (event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => (
      { ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    ))
  }
  
  function handleSubmit(event) {
    event.preventDefault();

    if (!emailValidation(formData.email)) {
      alert("Please provide a valid email address");
      return;
    }
  
    if (!passwordValidation(formData.password)) {
      alert("Valid password must be 8 or more characters long and must contain at least one digit, one uppercase letter, and one special symbol");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    alert("Successfully signed up");
    if (formData.joinedNewsletter) {
      alert("Thanks for signing up for our newsletter!");
    }
  }

  console.log(formData)

  return (
    <div className="form--container">
      <form onSubmit={handleSubmit} className="form">
        <input 
        type="email"
        placeholder="E-mail"
        name="email"
        className="form--input"
        onChange={handleOnChange}
        value={formData.email}
      />
      <input 
        type="password"
        placeholder="Password"
        name="password"
        className="form--input"
        onChange={handleOnChange}
        value={formData.password}
      />
      <input 
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        className="form--input"
        onChange={handleOnChange}
        value={formData.confirmPassword}
      />
      <div className="form--marketing">
        <input 
          type="checkbox"
          name="joinedNewsletter"
          onChange={handleOnChange}
          value={formData.joinedNewsletter ? "yes" : "no"}
          checked={formData.joinedNewsletter}
        />
        <label htmlFor="joinedNewsletter">I want to join the newsletter</label>
      </div>
      <button className="form--submit">Sign Up</button>
    </form>
  </div>
  )
}