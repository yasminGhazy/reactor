import React from 'react';
import events from '@flk/events';
import Is from '@flk/supportive-is';
import ReactorComponent from 'reactor/component/reactor.component';

export default class FormCheck extends ReactorComponent {
    state = {
        validationError: null,
        selectedOption: ''
    };

    messages = {
        required: 'This field is required',
    };
    handleOptionChange(e) {
        console.log(e.target.value);
        console.log(this.state.selectedOption);
    }


    /**
     * Validate the input
     */
    validate(e) {
        let input = e.target,
        value = input.value;
        this.set('selectedOption', value);
       
        // reset validation input error
        let inputValidation = null;
        console.log(value);
      
        if (this.props.required === true && this.state.selectedOption ==='') {
            
            console.log("required");
            inputValidation = this.messages.required;
        }
        this.set('validationError', inputValidation);
    }

    /**
     * {@inheritdoc}
     */
    render() {
        this.state.selectedOption=this.props.initial;
        return (
            <ul className="form-group">
                {this.props.values.map(value => (

                    <label >
                        <input
                            type={this.props.type}
                            required
                            value={value}
                            checked={this.state.selectedOption === { value }}
                            onChange={this.validate.bind(this)}
                        />{value}
                    </label>

                ))}

                {
                    this.get('validationError') !== null &&
                    <label className="error">{this.get('validationError')}</label>
                }
            </ul>
        );
    }
}
// <label >
//                     <input
//                         type="radio"

//                         value={this.props.value}
//                         checked={this.state.selectedOption === this.props.value}
//                         onChange={this.handleOptionChange.bind(this)}
//                     />{this.props.label}
//                 </label>