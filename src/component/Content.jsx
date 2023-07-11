import { useState } from "react";
import Textcontend from "../helper/Textcontend";

const Content = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState();

  // handle function diglarasion
  const handleButtonClick = (event) => {
    event.preventDefault();
    setDisplayText(inputText);
    setCount(count + 1);
    setInputText("");
  };

  return (
    <section className="flex-1 flex flex-col w-full items-center py-5 px-10 gap-8">
      {/* textarea Form and add button  */}
      <form>
        <textarea
          name="message"
          cols="60"
          rows="4"
          placeholder="Pleases typeing Something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="rounded-lg px-3 py-2 ring-2 resize-none ring-green-400 border-none outline-none"
        ></textarea>
        <div
          className={`${
            !inputText && "bg-slate-500"
          } bg-green-600 font-semibold text-white rounded-lg mt-2.5 py-2 w-2/4 mx-auto`}
        >
          <button
            disabled={!inputText}
            onClick={handleButtonClick}
            className="w-full h-full uppercase"
          >
            Add Text
          </button>
        </div>
      </form>
      {/* adding data show the display */}
      <div id="info" className="w-full pt-8 border-t-2 border-gray-200">
        <Textcontend massage={displayText} count={count} />
      </div>
    </section>
  );
};

export default Content;
