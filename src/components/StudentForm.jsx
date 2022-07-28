import React, { Component } from 'react';
import './form.css';


class StudentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.student.id,
            firstName: props.student.firstName,
            lastName: props.student.lastName,
            
            address: props.student.address,
            phone: props.student.phone,
            date: props.student.date,
            gender: props.student.gender,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = (event) => {
        console.log('submit');
        this.props.handleCrud(this.state);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="form-style">
                    {this.state.id && <h3>{'Changes for ' + this.state.firstName + ' ' + this.state.lastName}</h3>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='row d-inline-flex'>
                            <div className="form-group col">
                                <label >First Name:</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                            </div>

                            <div className="form-group col">
                                <label >Last Name:</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                            </div>
                        </div>

                        
                        
                        <div className="form-group">
                            <label >Address:</label>
                            <input type="text" name="address" className="form-control" id="address" value={this.state.department} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label >Phone:</label>
                            <input type="text" name="phone" className="form-control" id="phone" value={this.state.department} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label >DOB:</label>
                            <input type="date" name="date" className="form-control" id="date" value={this.state.department} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label >Gender:</label>
                            <input type="radio" value="Male   " name="gender" /> Male 
                            <input type="radio" value="Female  " name="gender" /> Female
                            <input type="radio" value="Other  " name="gender" /> Other 
                        </div>
                        

                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>

                </div>
            </div>
        );
    }
}
export default StudentForm;