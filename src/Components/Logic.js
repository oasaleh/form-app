import React from 'react';
import UI from './UI';

class Logic extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return <UI handleChange={this.handleChange} data={this.state} />;
  }
}

export default Logic;
