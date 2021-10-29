import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HolidayDetailsForm from "./components/HolidayDetailsForm";
import HolidayTable from "./components/HolidayTable";

function App() {
  return (
    <BrowserRouter>
      <h1>Holidays! Celebrate</h1>
      <Switch>
        <Route path="/holidays/:id">
          <HolidayDetailsForm />
        </Route>
        <Route path="/holidays">
          <HolidayTable />
        </Route>
        <Route path="/" exact>
          <Link to="/holidays">Show Holidays</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
