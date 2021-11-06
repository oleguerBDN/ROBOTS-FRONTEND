const Form = ({ addRobot }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addRobot();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={onSubmit}
      className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 bg-white border rounded-lg space-y-0 transition duration-500 ease-in-out transform lg:w-1/2"
    >
      <div className="relative pt-4">
        <label htmlFor="name" className="text-base leading-7 text-blueGray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
        />
      </div>
      <div className="relative pt-4">
        <label htmlFor="img" className="text-base leading-7 text-blueGray-500">
          Image
        </label>
        <input
          type="text"
          id="img"
          name="img"
          placeholder="image"
          className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
        />
      </div>

      <div className="relative pt-4">
        <label htmlFor="name" className="text-base leading-7 text-blueGray-500">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
        />
      </div>

      <div className="relative pt-4">
        <label
          htmlFor="speed"
          className="text-base leading-7 text-blueGray-500"
        >
          Speed
        </label>
        <input
          type="range"
          id="speed"
          min="0"
          max="10"
          name="speed"
          placeholder="Speed"
          className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
        />
      </div>
      <div className="relative pt-4">
        <label
          htmlFor="resistance"
          className="text-base leading-7 text-blueGray-500"
        >
          Resistance
        </label>
        <input
          type="range"
          id="resistance"
          min="0"
          max="10"
          name="resistance"
          placeholder="Resistance"
          className="w-full px-4 py-2 mt-2 mr-4 text-base text-black bg-gray-200 rounded-lg  focus:shadow-outline "
        />
      </div>
      <div className="flex items-center w-full pt-4 mb-4">
        <button className="w-full py-3 text-base text-white bg-blue-600 border-blue-600 rounded-md focus:ring-2  hover:bg-blue-800">
          Add robot
        </button>
      </div>
    </form>
  );
};

export default Form;
