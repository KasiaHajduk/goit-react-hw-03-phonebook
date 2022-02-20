import './PhonebookList.css';
import PhonebookElement from './PhonebookElement';

const PhonebookList = ({contacts, onDeleteContact}) => (
    <ul className='pblist'>
        {contacts.map(({id, name, number}) => (
            <PhonebookElement 
                id={id} 
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}/>
        ))}
    </ul>
);

export default PhonebookList;
