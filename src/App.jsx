import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./index.css";
function App() {
  let year = new Date().getFullYear();
  return (
    <div className="bg-slate-100 w-screen h-screen flex flex-col items-center">
      <Header headProps={`First, solve the problem. Then, write the code.`} />
      <Content />
      <Footer footProps={`ⓒ ${year} mdsaiful-sws. all rights reserved.`} />
    </div>
  );
}
export default App;
