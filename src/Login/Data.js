// Form configuration data
export const loginFormFields = [
  {
    id: 'email',
    type: 'text',
    placeholder: 'username',
    required: true,
    validation: {
      required: 'Email is required',
    }
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
    showToggle: true,
    validation: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters'
      }
    }
  }
];

export const signupFormFields = [
  {
    id: 'connectionFrom',
    type: 'select',
    placeholder: 'Connection From',
    required: true,
    options: [], // Add options as needed
    validation: {
      required: 'Connection source is required'
    }
  },
  {
    id: 'firstName',
    type: 'text',
    placeholder: 'First name',
    required: true,
    validation: {
      required: 'First name is required',
      minLength: {
        value: 2,
        message: 'First name must be at least 2 characters'
      }
    }
  },
  {
    id: 'lastName',
    type: 'text',
    placeholder: 'Last name',
    required: true,
    validation: {
      required: 'Last name is required',
      minLength: {
        value: 2,
        message: 'Last name must be at least 2 characters'
      }
    }
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Email Address',
    required: true,
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email'
      }
    }
  },
  {
    id: 'nationality',
    type: 'select',
    placeholder: 'Nationality',
    required: true,
    options: [], // Add nationality options
    validation: {
      required: 'Nationality is required'
    }
  },
  {
    id: 'residenceCountry',
    type: 'select',
    placeholder: 'Country of residence',
    required: true,
    options: [], // Add country options
    validation: {
      required: 'Country of residence is required'
    }
  },
  {
    id: 'phoneNumber',
    type: 'tel',
    placeholder: 'Phone number',
    required: true,
    prefix: '+971', // For UAE, or dynamically inject
    validation: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]{7,15}$/,
        message: 'Enter a valid phone number'
      }
    }
  },
  {
    id: 'workPlace',
    type: 'text',
    placeholder: 'Work place',
    required: false
  },
  {
    id: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
    showToggle: true,
    validation: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters'
      }
    }
  },
  {
    id: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true,
    showToggle: true,
    validation: {
      required: 'Please confirm your password',
      validate: (value, formData) =>
        value === formData.password || 'Passwords do not match'
    }
  }
];


export const formConfig = {
  login: {
    title: 'Welcome Back',
    subtitle: 'Login into your account',
    buttonText: 'Login',
    switchText: "Don't have an account?",
    switchLinkText: 'Sign up',
    fields: loginFormFields,
    showRememberMe: true,
    showForgotPassword: true
  },
  signup: {
    title: 'Create Account',
    subtitle: 'Sign up for a new account',
    buttonText: 'Sign Up',
    switchText: 'Already have an account?',
    switchLinkText: 'Login',
    fields: signupFormFields,
    showRememberMe: false,
    showForgotPassword: false
  }
};

export const footerData = {
  text: 'Powered by',
  teams: [
    'UIUX & Development Team',
    'Corporate Marketing Department'
  ]
};