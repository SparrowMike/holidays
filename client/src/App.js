import { useState } from "react";

const App = () => {
  const [holidays, setHoliday] = useState([]);

  return (
    <div className="container">
      <h1>Holidays! Celebrate!</h1>
    </div>
  );
};

export default App;
