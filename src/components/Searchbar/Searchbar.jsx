import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import searchbar from './Searchbar.module.css';
import form from './Form.module.css';
import button from './Button.module.css';
import label from './Button.module.css';
import input from './SearchInput.module.css';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChangeName = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      return Notify.warning('Заполни поле для поиска');
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={searchbar.searchbar}>
        <form onSubmit={this.handleSubmit} className={form.searchForm}>
          <button type="submit" className={button.searchFormButton}>
            <AiOutlineSearch size="32" />
            <span className={label.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChangeName}
            className={input.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
          />
        </form>
      </header>
    );
  }
}
