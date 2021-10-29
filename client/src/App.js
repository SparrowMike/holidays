import { BrowserRouter, Route, Switch } from "react-router-dom";
import HolidayDetailsForm from "./components/HolidayDetailsForm";
import HolidayTable from "./components/HolidayTable";

function App() {
  return (
    <BrowserRouter>
      <h1>Holidays! Celebrate</h1>
      <Switch>
        <Route path="/holidays" exact>
          <HolidayTable />
        </Route>
        <Route path="/holidays/:id">
          <HolidayDetailsForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
