import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  CustomBox,
  CustomForm,
  CustomPaper,
  CustomStack,
  CustomTextField,
} from "../styles/LoginForm";

function LoginForm() {
  const [email, setEmail] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
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
    if (name === "email") {
      const isEmailValid = validateEmail(value);
      setEmail({
        value,
        error: !isEmailValid ? "Enter a valid email" : "",
        hasError: !isEmailValid,
        wasTouched: true,
      });
    } else if (name === "password") {
      const isPasswordValid = validatePassword(value);
      setPassword({
        value,
        error: !isPasswordValid ? "Password must be at least 6 characters" : "",
        hasError: !isPasswordValid,
        wasTouched: true,
      });
    }
  };

  const handleSubmit = () => {
    if (email.hasError || password.hasError) {
      alert("Please fix the errors");
    } else {
      alert("Login successful");
    }
  };

  return (
    <CustomForm>
      <CustomPaper elevation={3}>
        <CustomStack spacing={3}>
          <Typography variant="h1" component="div" gutterBottom>
            Sign In
          </Typography>
          <CustomTextField
            type="email"
            name="email"
            label="Login"
            variant="outlined"
            fullWidth
            value={email.value}
            onChange={handleChange}
            helperText={email.wasTouched && email.hasError && email.error}
            error={email.wasTouched && email.hasError}
          />
          <CustomTextField
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password.value}
            name="password"
            onChange={handleChange}
            variant="outlined"
            fullWidth
            helperText={
              password.wasTouched && password.hasError && password.error
            }
            error={password.wasTouched && password.hasError}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  color="primary"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <CustomBox>
            <FormGroup>
              <FormControlLabel
                id="remember"
                name="remember"
                onChange={(e) => setRemember(e.target.checked)}
                control={<Checkbox color="default" checked={remember} />}
                label="Remember me"
              />
            </FormGroup>
            <Link href="#">Forgot password?</Link>
          </CustomBox>
          <Button
            fullWidth
            variant="contained"
            type="button"
            onClick={handleSubmit}
            sx={{padding: '0.7rem'}}
          >
            Login
          </Button>
        </CustomStack>
      </CustomPaper>
    </CustomForm>
  );
}

export default LoginForm;
