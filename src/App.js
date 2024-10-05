import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/home";
import Admin from "./pages/Admin"
import { useEffect } from "react";
import Loader from "./components/Loader";
import axios from "axios"; 
import { HideLoading, SetPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import {useDispatch , useSelector} from "react-redux";
import Login from "./pages/Admin/Login";

function App() {
  const {loading,portfolioData,reloadData} = useSelector((state)=> state.root)
  const dispatch = useDispatch()
  
  const getportfolioData  = async ()=>{
      try {
        dispatch(ShowLoading())
        const respose = await axios.get("/api/portfolio/get-portfolio-data");
        dispatch(SetPortfolioData(respose.data))
        dispatch(ReloadData(false))
        dispatch(HideLoading())
      } catch (error) {
        dispatch(HideLoading())
      }
  }

  useEffect(()=>{
      if(!portfolioData){
        getportfolioData();
      }
    
  },[portfolioData])
  useEffect(()=>{
    if(reloadData){
      getportfolioData();
    }
  },[reloadData])
  return (
    <>
      <BrowserRouter>
        {loading ? <Loader/> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;