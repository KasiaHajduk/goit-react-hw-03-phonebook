import './App.css';

import PhoneBook from './PhoneBook';

function App() {
    return (
        <div className="App">
            <PhoneBook element={<PhoneBook />} />
        </div>
    )
}

export default App;