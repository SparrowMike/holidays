//* Component => fetch => URL => express => mongoose => mongodb
//* mongdo => model => express => response (JSON) => res.json() => state
//* state => map => JSX

import { useEffect, useState } from "react";

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

  if (status === "loading") {
    return "Loading....";
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Title</th>
          <th>Likes</th>
        </tr>
      </thead>
      <tbody>
        {holidays.map((holiday) => {
          return (
            <tr key={holiday.id}>
              <td>{holiday.name}</td>
              <td>{holiday.likes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default HolidayTable;
