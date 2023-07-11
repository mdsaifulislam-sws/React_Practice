const Header = ({ headProps }) => {
  return (
    <header className="p-3 px-20 text-lg bg-purple-500 text-white w-full text-center flex items-center justify-between">
      <div className="text-center w-full">
        <span className="capitalize text-base italic">{headProps}</span>
      </div>
    </header>
  );
};
export default Header;
