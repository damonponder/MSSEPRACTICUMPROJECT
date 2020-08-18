import React, {Component} from 'react';
import './registration.style.scss';
import { Link } from "react-router-dom";
import instance from '../../Axios/axios'

export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            username:"",
            email: "",
            password: "",
            password2: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        const options = {
            headers: { "Content-Type": "application/json" }
        };
        instance.post('/api/auth/signup', {
            Firstname: this.state.firstname,
            Lastname: this.state.lastname,
            Username: this.state.username,
            Email: this.state.email,
            Password: this.state.password
          }).then(response => response.data)
        .then(json => {
          console.log(json);
          if (json.error) return false;
          this.props.dispatch1(json.accessToken,json.Firstname,json.Lastname, json.Username,json.Email,json.Password,);
          this.props.history.push('/signin');
        })
        .catch(error => {
          console.log(error);
        });
      };

    //    axios
    //    .post("http://3.12.131.254/api/auth/signup", 
            
    //         {
    //             firstname: this.state.firstname,
    //             lastname: this.state.lastname,
    //             username: this.state.username,
    //             email: this.state.email,
    //             password: this.state.password
    //         },
    //         options
    //     )
    //     .then(response => response.data)
    //     .then(json => {
    //         console.log(json);
    //         if (json.error) return false;
    //         // handle success case
    //         this.props.history.push('/signin');
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
      };
    render() {
        return (
            <React.Fragment>
        <h1 className="registration-title">Registration Form</h1>
        <div className="login-form-container">
            <form className="form" onSubmit={this.handleSubmit}>
                <input
                    className="firstName-input"
                    name="firstname"
                    placeholder="Enter First Name"
                    value = {this.state.Firstname}
                    onChange={this.handleChange}
                    label="firstName"
                    required
                />
                <input
                    className="lastName-input"
                    name="lastname"
                    placeholder="Enter Last Name"
                    value = {this.state.Lastname}
                    onChange={this.handleChange}
                    label="lastName"
                    required
                />
                <input
                    className="username-input"
                    name="username"
                    placeholder="User Name"
                    value = {this.state.Username}
                    onChange={this.handleChange}
                    label="UserName"
                    required
                />
                <input
                    className="email-input"
                    name="email"
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                    value={this.state.Email}
                    label="UserEmail"
                    required
                />
                <input
                    className="password1-input"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={this.state.Password}
                    onChange={this.handleChange}
                    label="password"
                    required
                />
                <input
                    className="password2-input"
                    name="password2"
                    type="password"
                    placeholder="Please Enter Matching Password"
                    onChange={this.handleChange}
                    label="password2"
                    required
                />
                <button className="submit-registration" onSubmit={this.signup}>Submit Registration Form</button>
                <Link to="/signin" className="nav-link">
                    Return to Login
                    </Link>
                <br/>
            </form>
        </div>
        </React.Fragment>
        )
    }
}