import React,{useContext} from "react";
// import axios from "axios";
import IsLoadingComponent from '../StyledComponents/IsLoadingComponent.jsx';
import AppContext from '../../context';
import {
  FormContainer,
  Form,
  Title,
  ErrorMessage,
  StyledLink,
  StyledInput,
  StyledLabel,
  StyledSignup,
  StyledButton,
  StyledText
} from "../StyledComponents/FormStyledComponents";


let buttonValue = '';

const CredentialsForm = props => {
  const darkMode = useContext(AppContext);
  if(props.isLoginPage && props.isLoading === false){
       buttonValue = "Log In";
       
  } else if(!props.isLoginPage && props.isLoading === false) {
       buttonValue = "Get Started";
  } else if( props.isLoading === true && !props.isLoginPage) {
       buttonValue = "Signing Up";
  } else if( props.isLoading === true && props.isLoginPage) {
    buttonValue = "Logging In";
}

  return (
    <FormContainer primary={darkMode} >
    {props.isLoading ? <IsLoadingComponent /> : null}
      <Form primary={darkMode} action={props.isLoginPage ? 'login' : 'signup'} method="post" onSubmit={props.handleSignUp}>
        <Title primary={darkMode} >{props.isLoginPage === true ? "Log In" : "Sign Up"}</Title>
        {props.isValidFlag === false && props.isLoginPage ? (
          <ErrorMessage>
            That Friendlier account doesn't exist. Enter a different account or{" "}
            <StyledLink errorsignup="true" to="/signup">
              create a new account
            </StyledLink>
          </ErrorMessage>
        ) : !props.isLoginPage && props.isValidFlag === false ? (
          <ErrorMessage>
            Your email and/or password have not met the minimum requirements{" "}
            <StyledLink errorsignup="true" to="/">
              need help?
            </StyledLink>
          </ErrorMessage>
        ) : null}
        <StyledLabel primary={darkMode}>
          Email
          <StyledInput
            label="Email"
            type="email"
            onChange={(event) => props.handleEmail(event.target.value)}
            value={props.email.value}
          />
          {!props.isLoginPage ? <p style={{fontSize: '14px', fontStyle: 'italic'}}>Email must have a minimum of 12 characters</p> : null}
        </StyledLabel>
        <StyledLabel primary={darkMode}>
          Password
          <StyledInput
            label="Password"
            type="password"
            onChange={(event) => props.handlePassword(event.target.value)}
            value={props.password.value}
          />
          {!props.isLoginPage ? <p style={{fontSize: '14px', fontStyle: 'italic'}}>Password must have a minimum of 8 characters</p> : null}
        </StyledLabel>
        <StyledButton secondary="true">
          {buttonValue}
        </StyledButton>
        <StyledText primary={darkMode}>
         {props.isLoginPage ? 'New to Friendlier?' : 'Already have an account?'}
         {props.isLoginPage ? <StyledSignup to="/signup" primary="true">Sign Up</StyledSignup> : <StyledSignup to="/login" primary="true">Log In</StyledSignup>}
        </StyledText>
        {!props.isLoginPage ? null : (
          <StyledLink to="/forgot-credentials">
            Forgot my username or password
          </StyledLink>
        )}
      </Form>
    </FormContainer>
  );
};
export default CredentialsForm;
