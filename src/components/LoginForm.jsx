import React, { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState({
    value: '',
    error: '',
    hasError: true,
    wasTouched: false,
  });
  const [password, setPassword] = useState({
    value: '',
    error: '',
    hasError: true,
    wasTouched: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    }
    return true;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      const isEmailValid = validateEmail(value);
      setEmail({
        value,
        error: !isEmailValid ? 'Enter a valid email' : '',
        hasError: !isEmailValid,
        wasTouched: true,
      });
    } else if (name === 'password') {
      const isPasswordValid = validatePassword(value);
      setPassword({
        value,
        error: !isPasswordValid ? 'Password must be at least 6 characters' : '',
        hasError: !isPasswordValid,
        wasTouched: true,
      });
    }
  };

  const handleSubmit = () => {
    if (email.hasError || password.hasError) {
      alert('Please fix the errors');
    } else {
      alert('Login successful');
    }
  };

  return (
    <form>
      <h1>Sign In</h1>
      <fieldset>
        <input
          type="email"
          name='email'
          placeholder="Login"
          value={email.value}
          onChange={handleChange}
        />
        <br />
        {email.wasTouched && email.hasError && <small>{email.error}</small>}
      </fieldset>
      <fieldset>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password.value}
          name='password'
          onChange={handleChange}
        />
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <br />
        {password.wasTouched && password.hasError && <small>{password.error}</small>}
      </fieldset>
      <fieldset>
        <label htmlFor="remember">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </fieldset>
      <button type="button" onClick={handleSubmit}>
        Login
      </button>
    </form>
  )
}

export default LoginForm