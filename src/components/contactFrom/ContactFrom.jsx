import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../contactFrom/contactFrom.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = { name: '', number: '' };
  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) {
      return;
    }

    this.props.onSubmit({ name, number });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label} htmlFor={this.nameId}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="name"
            ></input>
          </label>
          <label className={css.label} htmlFor={this.numberId}>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="number"
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
