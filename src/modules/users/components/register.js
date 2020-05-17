import React from 'react';
import ReactorComponent from 'reactor/component/reactor.component';
import FormCheck from 'reactor/component/form/form-check';
import Form from 'reactor/component/form/form';
import FormInput from 'reactor/component/form/form-input';

export default class Register extends ReactorComponent {

    state = {
        gender: Boolean,

    };

    register() {
        console.log("registered");
    }
    render() {
        return (
            <div id="login-page">
                <h1>Create an account</h1>

                <Form onSubmit={this.register}>

                    <FormInput
                        type="email"
                        className="form-control"
                        name="email"
                        required={true}
                        placeholder="Email Address"
                    />

                    <FormInput
                        type="password"
                        required={true}
                        name="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                    />

                    <FormCheck
                        type="radio"
                        required
                        initial='male'
                        values={[ 'male' , 'female' ]}
                    />

                    <div id="button-wrapper">
                        <button>Sign up</button>
                    </div>
                </Form>
            </div>

        );
    }
}



//                     <ul>
//                     <FormCheck
//                         value="male"
//                         label="male"
//                     />

//                     <FormCheck
//                         value="female"
//                         label="female"
//                     />
// </ul>