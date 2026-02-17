import "./App.css";
import Header from "./components/header";
import SearchCity from "./components/searchcity";
import Weatherpage from "./components/weatherpage";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Spinner from "./components/spinner";
import { useEffect } from "react";

function App() {
  const { loading, handleOnload } = useContext(AppContext);

  useEffect(() =>{
      handleOnload()
  },[handleOnload])



  return (
    <div className="app-layout">
      <Header />

      {loading && (
        <div className="spinner-overlay">
          <Spinner />
        </div>
      )}

      <main>
        <SearchCity />
        <Weatherpage />
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;
