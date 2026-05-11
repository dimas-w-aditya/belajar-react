import {useState} from 'react';
import InputBar from './InputBar'
import TugasItem from './TugasItem'

function App () {
  const[tugas, setTugas] = useState([]);
  const[input, setInput] = useState('');

  const tambahTugas = () => {
    if (input !== '') {
      setTugas([...tugas, input]);
      setInput('');
    }
  };

  const hapusTugas = (index) => {
    setTugas(tugas.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px' }}>
        <h1>To-Do List</h1>
        <InputBar
          input={input}
          setInput={setInput}
          tambahTugas={tambahTugas}
        />
        {tugas.map((item, index) => (
          <TugasItem
            key={index}
            tugas={item}
            hapusTugas={() => hapusTugas(index)}
          />
        ))}
    </div>
  );
}

export default App;