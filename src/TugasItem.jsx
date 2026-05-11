const TugasItem = ({ tugas, hapusTugas }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f5f5f5', borderRadius: '6px', marginBottom: '8px' }}>
            <p style={{ margin: 0 }}>{tugas}</p>
            <button
                onClick={hapusTugas}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer'}}
            >
                Hapus
            </button>
        </div>
    );
}

export default TugasItem;