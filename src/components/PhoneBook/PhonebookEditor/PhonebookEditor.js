import {Component} from 'react';
import './PhonebookEditor.css';

export default class PhonebookEditor extends Component {
    state = {
        name: '',
        number: '',
    };

    //odpowiada za aktualizację stanu
    // Dla wszystkich inputów tworzymy jeden procesor
    // Inputy będziemy rozróżniać przy pomocy atrybutu name    
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value});

    };

    //wywoływny jest przy wysyłaniu formularza
    handleSubmit = e => {
        e.preventDefault();
        //const {name, number} = this.state;

        //Props, który przekazywany jest do formularza do wywołania przy submicie
        this.props.onSubmit ({ ...this.state});
        this.setState({name: '', number: ''});
    }

    render (){
        return(
            <form className="pb__form" onSubmit = {this.handleSubmit}>
                <label className='pb__label'> Name
                    <input
                        className="pb__input"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label className="pb__label"> Number
                    <input
                        className="pb__input"
                        value={this.state.number}
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" className="pb__add">
                    Add contact
                </button>
            </form>

        )
    }
}