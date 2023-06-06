import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
          firstName,
          lastName,
          contact,
          address,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            navigate("/signup", { state: { id: email } });
            alert("User registered successfully");
          }
        })
        .catch((e) => {
          alert("Wrong details. Please try again.");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-page" style={{ backgroundImage: `url('https://images.axios.com/d41Mxanjr842w_m_9u_j3m9Zdlc=/0x0:3000x1688/1920x1080/2018/05/02/1525266849733.jpg')` }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Div-ide App
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Back
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="card" style={{ borderRadius: "25px" }}>
          <div className="card-body">
            <h1 className="text-center fw-bold mb-5 mt-4">Sign up</h1>
            <form>
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope me-3"></i>
                  </span>
                  <input
                    className="form-control rounded-pill"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock me-3"></i>
                  </span>
                  <input
                    className="form-control rounded-pill"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user me-3"></i>
                  </span>
                  <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user me-3"></i>
                  </span>
                  <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-phone me-3"></i>
                  </span>
                  <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-map-marker-alt me-3"></i>
                  </span>
                  <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary rounded-pill d-flex justify-content-center align-items-center mb-4"
                onClick={submit}
                style={{
                    backgroundColor: "blue",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                }}
                >
                Register
                </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-light text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; 2023 Div-ide App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;