import './PhonebookList.css';
import PropTypes from "prop-types";

const PhonebookElement = ({id, name, number, onDeleteContact}) => (
    <li key={id} className='pblist__item'>
        <p className='pblist__text'> * {name} &nbsp;&nbsp;&nbsp;&nbsp; {number}  </p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
);

PhonebookElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default PhonebookElement;