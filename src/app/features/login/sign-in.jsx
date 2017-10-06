import React from 'react';
import SocialLogin from 'react-social-login';

const SignInButton = ({ children, triggerLogin, ...props }) => (
  <button onClick={triggerLogin} {...props}>
    { children }
  </button>
);

const SignInSocialButton  = SocialLogin(SignInButton);

const onLoginSuccess = (user) => {
  console.log('User Details', user);
};

const onLoginFailure = (error) => {
  console.error(error);
};

class SignIn extends React.Component {
  render() {
    return (
      <SignInSocialButton
        provider='google'
        appId='YOUR_APP_ID'
        onLoginSuccess={onLoginSuccess}
        onLoginFailure={onLoginFailure}>
        Login with Google
      </SignInSocialButton>
    );
  }
}

export default SignIn;
