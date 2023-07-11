const Textcontend = ({ count, massage }) => {
  return (
    <div className="flex items-center capitalize w-full">
      <span className="bg-green-400 w-5 h-5 inline-flex place-items-center justify-center items-center text-sm mr-3 font-semibold text-white rounded-full">
        {count}
      </span>
      <p>{massage}</p>
    </div>
  );
};

export default Textcontend;
