import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const updateHoliday = async (holiday) => {
  const url = `/api/holidays/${holiday._id}`;
  const data = await axios.put(url, holiday);
  console.log("data", data);
};

function HolidayDetailsForm() {
  const { id } = useParams();

  const [holiday, setHoliday] = useState({});

  useEffect(() => {
    const fetchHoliday = async (id) => {
      const url = `/api/holidays/${id}`;
      const data = await axios.get(url);
      setHoliday(data.data);
    };
    fetchHoliday(id);
  }, [id]);

  const changeName = (event) => {
    const value = event.target.value;
    setHoliday({ ...holiday, name: value });
  };

  const changeLikes = (event) => {
    const value = event.target.value;
    setHoliday({ ...holiday, likes: parseInt(value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateHoliday(holiday);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Name: <input value={holiday.name} onChange={changeName} />
      </p>
      <p>
        Celebrated:{" "}
        <select value={holiday.celebrated}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </p>
      <p>
        Likes:{" "}
        <input
          type="number"
          min="0"
          value={holiday.likes}
          onChange={changeLikes}
        />
      </p>
      <p>
        description: <textarea value={holiday.description} />
      </p>
      <button>Update</button>
    </form>
  );
}

export default HolidayDetailsForm;
