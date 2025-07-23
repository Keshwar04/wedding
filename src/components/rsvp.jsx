const RSVP = () => {
  const inputFields = ["Full Name", "Email Address"];
  const options = ["Attending to *", "Main Ceremony", "Wedding Party"];
  return (
    <section id="RSVP" className="p-4 md:p-8 lg:p-12 bg-[#F4F0ED]">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h1 className="primary-font primary-color text-7xl font-bold">RSVP</h1>
        <p className="text-center max-w-3xl opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          ultricies nisi, vel tincidunt mi. Donec sit amet finibus justo,
          finibus vestibulum ipsum. Aenean egestas tortor nec fermentum egestas.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 px-0 sm:px-13 xl:px-26">
        {inputFields.map((e) => (
          <input
            key={e}
            className="p-2 lg:p-0 border-0 border-b border-gray-400 focus:outline-none placeholder-gray-500 text-sm w-full"
            placeholder={e}
          />
        ))}
        <select className="p-2 lg:p-0 border-0 border-b border-gray-400 rounded-md focus:outline-none w-full">
          {options.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <button className="text-xs font-bold secondary-bg text-white py-4 px-14 cursor-pointer">
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default RSVP;
