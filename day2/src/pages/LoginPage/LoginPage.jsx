import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to /auth/login or /auth/signup
    if (email && password) {
      login(email, password);
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__background">
        <img src="/assets/hero.png" alt="background" />
        <div className="login-page__overlay"></div>
      </div>
      
      <div className="login-page__content">
        <h1 className="login-page__logo">CINEVERSE</h1>
        <div className="login-page__card">
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email or phone number" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-page__btn">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          
          <div className="login-page__help">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Need help?</a>
          </div>

          <div className="login-page__signup">
            {isLogin ? "New to Cineverse? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign up now.' : 'Sign in here.'}
            </button>
          </div>
          
          <div className="login-page__roles-hint">
            <p>Hint (RBAC Simulation):</p>
            <p>admin@cineverse.com = Admin Role</p>
            <p>owner@cineverse.com = Theatre Owner Role</p>
            <p>anything_else@... = Standard User Role</p>
          </div>
        </div>
      </div>
    </div>
  );
}
