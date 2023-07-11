const Footer = ({ footProps }) => {
  return (
    <footer className="bg-gray-200 text-black w-full text-center">
      <div className="flex justify-between items-center p-5">
        {/* contract info items  */}
        <div className="flex flex-col justify-center items-start gap-1.5 ml-8">
          <h2 className="text-xl italic underline cursor-pointer font-semibold">
            SWS
          </h2>
          <h4>
            Home : <span>Brishal,Patuakhali</span>
          </h4>
          <h4>
            Email : <span>mdsaiful.sws@gmail.com</span>
          </h4>
          <h4>
            Phone : <span>+8801797368848</span>
          </h4>
        </div>

        {/* usefull link  */}
        <div className="flex flex-col items-center gap-3 mr-8">
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="contract">Contract</a>
        </div>
      </div>
      <span className="w-full py-1.5 bg-slate-500 text-white text-sm inline-block">
        {footProps}
      </span>
    </footer>
  );
};

export default Footer;
