import React, { Component } from 'react'
import TextField from '../components/TextField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <form className="callout" id="shipping-address-form" onSubmit={this.handleSubmit}>
        <h1>Shipping Address</h1>

        <TextField
          value={this.state.firstName}
          label='First Name '
          name='firstName'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.lastName}
          label='Last Name'
          name='lastName'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.address}
          label='Address'
          name='address'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.city}
          label='City'
          name='city'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.state}
          label='State'
          name='state'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.zipCode}
          label='Zip Code'
          name='zipCode'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.phoneNumber}
          label='Phone Number'
          name='phoneNumber'
          handlerFunction={this.handleChange}
        />
        <TextField
          value={this.state.email}
          label='Email'
          name='email'
          handlerFunction={this.handleChange}
        />
        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
