import "./App.css";
import NavBar from "./components/navbar";
const MOCKDATA = [
  { name: "home", url: "/home" },
  { name: "about", url: "/about" },
];
function App() {
  return (
    <>
      <NavBar navElems={MOCKDATA}></NavBar>
    </>
  );
}

export default App;
