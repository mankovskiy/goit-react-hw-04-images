import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import searchbar from './Searchbar.module.css';
import form from './Form.module.css';
import button from './Button.module.css';
import label from './Button.module.css';
import input from './SearchInput.module.css';

export function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleChangeName = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      return Notify.warning('Заполни поле для поиска');
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={searchbar.searchbar}>
      <form onSubmit={handleSubmit} className={form.searchForm}>
        <button type="submit" className={button.searchFormButton}>
          <AiOutlineSearch size="32" />
          <span className={label.searchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChangeName}
          className={input.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
        />
      </form>
    </header>
  );
}
