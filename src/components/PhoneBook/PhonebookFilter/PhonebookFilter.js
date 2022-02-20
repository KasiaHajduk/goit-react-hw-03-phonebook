import './PhonebookFilter.css';


const PhonebookFilter = ({ value, onChange }) => (
    <label className='pbfilter'>
        Find contacts by name
        <input className='pbfilter__input'type="text" value={value} onChange={onChange} />
    </label>
);

export default PhonebookFilter;