const InputBar = ({ input, setInput, tambahTugas }) => {
    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px'}}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tambah tugas.."
                style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #ddd'}}
            />
            <button onClick={tambahTugas}>Tambah</button>
        </div>
    );
}

export default InputBar;