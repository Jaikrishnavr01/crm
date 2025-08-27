import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userID, setUserID] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (isSignup) {
      console.log("Signup:", { name, email, password });
    } else {
      console.log("Login:", { email, password });
    }

    setUserID("user");
    setShowForm(false);

    // reset fields
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleLogout = () => {
    setUserID(null);
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h1>CloudTide Innovations</h1>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>Workflow</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Support</a>

          {/* Mobile login/logout */}
          <div className="mobile-auth">
            {!userID && (
              <button
                className="btn login mobile-login-btn"
                onClick={() => { setShowForm(true); setMenuOpen(false); }}
              >
                Login / Signup
              </button>
            )}
            {userID && (
              <button
                className="btn logout mobile-login-btn"
                onClick={() => { handleLogout(); setMenuOpen(false); }}
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>

      {/* Desktop auth */}
      <div className="auth-section">
        {userID && <p className="welcome-text">Welcome, {userID}</p>}
        {userID ? (
          <button className="btn logout" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="btn login" onClick={() => setShowForm(true)}>Login / Signup</button>
        )}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            <h2>{isSignup ? "Create Account" : "Login"}</h2>
            <form onSubmit={handleSubmit} className="form-modern">
              {isSignup && (
                <>
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                  />
                </>
              )}
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              {isSignup && (
                <>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm your password"
                  />
                </>
              )}
              <button type="submit" className="btn submit">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>
            <p className="switch-form">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;
