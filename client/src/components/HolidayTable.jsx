//* Component => fetch => URL => express => mongoose => mongodb
//* mongdo => model => express => response (JSON) => res.json() => state
//* state => map => JSX

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AddHolidayForm from "./AddHolidayForm";

const URL = "/api/holidays/";

function HolidayTable() {
  const [holidays, setHolidays] = useState([]);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      const res = await fetch(URL);
      const data = await res.json();
      setHolidays(data);
      setStatus("resolved");
    };
    fetchData();
  }, []);

  const addHoliday = (holiday) => {
    setHolidays([...holidays, holiday]);
  };

  const handleDelete = async (id) => {
    const url = `/api/holidays/${id}`;
    await axios.delete(url);

    setHolidays(holidays.filter((h) => h._id !== id));
  };

  if (status === "loading") {
    return "Loading....";
  }

  if (holidays?.length === 0) {
    return <AddHolidayForm addHolidayFn={addHoliday} />;
  }

  return (
    <>
      <AddHolidayForm addHolidayFn={addHoliday} />
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Likes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => {
            return (
              <tr key={holiday._id}>
                <td>
                  <NavLink to={`/holidays/${holiday._id}`}>
                    {holiday.name}
                  </NavLink>
                </td>
                <td>{holiday.likes}</td>
                <td>
                  <button onClick={() => handleDelete(holiday._id)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HolidayTable;
