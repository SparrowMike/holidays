const URL = "/api/holidays";

function AddHolidayForm({ addHolidayFn }) {
  const createHoliday = async (title) => {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    addHolidayFn(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    // console.log("title", title)
    createHoliday(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Add Holiday" />
      <button>Create Holiday</button>
    </form>
  );
}

export default AddHolidayForm;
