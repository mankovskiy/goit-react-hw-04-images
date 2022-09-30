import PropTypes from 'prop-types';
import button from './Button.module.css';
export function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className={button.button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
