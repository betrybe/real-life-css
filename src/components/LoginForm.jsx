import React, { useState } from 'react';

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
    const emailRegex = /^(.+)@(.+)$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return false;
    }
    return true;
  };

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
    <div className='bg-stone-200 min-h-screen flex items-center justify-center'>
      <form className='bg-white px-16 py-12 rounded-2xl shadow-lg text-center'>
        <h1 className='text-6xl mb-10'>Sign In</h1>
        <fieldset className='text-left mb-4'>
          <input
            type="email"
            name="email"
            placeholder="Login"
            value={email.value}
            onChange={handleChange}
            className="w-full block bg-black rounded p-2 text-white"
          />
          {email.wasTouched && email.hasError && <small className='font-normal text-red-400 '>{email.error}</small>}
        </fieldset>
        <fieldset className='text-left mb-4'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password.value}
            name="password"
            onChange={handleChange}
            className="w-full block bg-black rounded p-2 text-white"

          />
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <br />
          {password.wasTouched && password.hasError && (
            <small className='font-normal text-red-400 '>{password.error}</small>
          )}
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
            Remember me{' '}
          </label>
          <a href="#" className='text-green-400'>Forgot password?</a>
        </fieldset>
        <button className='bg-green-400 p-3 w-full mt-4 rounded-lg shadow' type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
