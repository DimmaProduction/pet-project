import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormErrors } from './FormErrors';
import css from './SignPage.module.css';

class SignPage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleClick = (e) => {
    if(!this.state.formValid) e.preventDefault()
}

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
        <div className={css.bg}>
            <div className={css.main}>

                <div className={css.name}>
                    <h2>Sign in</h2>
                </div>

                <div className={css.errorsForm}>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                
                <div className={css.body}>
                    <div className={css.inputForm}>
                            <div className={ this.errorClass(this.state.formErrors.email)}>
                                <p htmlFor="email">Email address</p>
                                <input type="email" required  name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleUserInput}  />
                            </div>
                    </div>
                    <div>
                            <div className={this.errorClass(this.state.formErrors.password)}>
                                <p htmlFor="password">Password</p>
                                <input type="password"  name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleUserInput}  />
                            </div>

                    </div>
                </div>

                <div className={css.btn}>
                      <button className={css.btnSubmit} disabled={!this.state.formValid}>
                        <NavLink to='/myProfile' onClick={this.handleClick}>
                          <span className={css.btnText}>Sign in</span>
                        </NavLink>
                      </button>
                </div> 

            </div>
        </div>
    );
  }
}

export default SignPage;