import React, { useState} from "react";
import "./App.css";
import FilterBar from "../FilterBar/FilterBar";
import CardContainer from "../CardContainer/CardContainer";

const App = props => {
  const [url, setUrl] = useState('')
  const handleSubmit = (url) => setUrl(url);

  return (
    <div className="App">
        <FilterBar transition={handleSubmit} />
        <CardContainer filters={url}/>
    </div>
  );
};

export default App;
