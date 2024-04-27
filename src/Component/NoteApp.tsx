import { useState } from 'react';

function NoteApp() {
  const data: any = [];

  const [notes, setNotes] = useState(data);
  const [dataStore, setDataStore] = useState(data);
  const [status, setStatus] = useState('');
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  function addNotes() {
    if (!title && !status) {
      window.alert('Please add Title & Status');
      return;
    }

    setNotes([...notes, { key: count, title: title, status: status }]);
    setDataStore([...notes, { key: count, title: title, status: status }]);
    setTitle('');
    setStatus('');
    setCount(count + 1);
  }

  function fetchData() {
    setNotes(dataStore.map((items: any) => items));
  }

  function checkActiveStatus() {
    setNotes(dataStore.filter((items: any) => items.status === 'Active'));
  }

  function checkCompletedStatus() {
    setNotes(dataStore.filter((items: any) => items.status === 'Completed'));
  }

  return (
    <>
      <div className="data">
        <input
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button onClick={addNotes}>Add Note</button>
      </div>

      <div className="btn">
        <button onClick={fetchData}>All</button>
        <button onClick={checkActiveStatus}>Active</button>
        <button onClick={checkCompletedStatus}>Completed</button>
      </div>

      <table>
        <tr>
          <th>Title</th>
          <th>Status </th>
        </tr>

        {notes.map((items: any) => (
          <tr key={items.key}>
            <td>{items.title}</td>
            <td>{items.status}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default NoteApp;
