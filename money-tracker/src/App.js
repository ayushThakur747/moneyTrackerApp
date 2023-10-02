import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  function addNewTransaction(e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    console.log({ url });
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, description, datetime }),
    }).then((response) => {
      console.log({ response });
      response.json().then((json) => {
        console.log({ json });
      });
    });
  }
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"+500 for TV"}
          />
          <input
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            type="datetime-local"
          />
        </div>
        <div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder={"description"}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Sony TV</div>
            <div className="description">TV for bedroom</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-10-02</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Cannon camera</div>
            <div className="description">Sold Camera to brother</div>
          </div>
          <div className="right">
            <div className="price green">+$800</div>
            <div className="datetime">2023-10-02</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
