import { useState } from 'react';
import { useQuery } from 'react-query';
import fetchData from './services';


// components import
import Header from './components/Header';
import Map from './components/MapComponent';
import Spinner  from './components/Spinner';
import Sidebar from './components/Sidebar';
import SharePopup from './components/SharePopUp';



const App = () => {
  const [ origin, setOrigin ] = useState("");
  const [ showSharePopUp, setShowSharePopUp ]  = useState(false);
  const [ locationLink, setLocationLink ] = useState(""); 

  const { data, error, isLoading } = useQuery("message", fetchData, {
    refetchOnWindowFocus: false,
    refetchInterval: false
  });

  const handleFormSubmit = (origin) => {
    setOrigin(origin);
  }

  const handleShareButton = () => {
    setLocationLink(`https://www.google.com/maps?q=${data.latitude},${data.longitude}`)
    setShowSharePopUp(!showSharePopUp);
  }

  if(isLoading) {
    return <Spinner />
  }

  if(error) {
    return <div>Error fetching posts: {error.message}</div>
  }

  return (
    <>
      <Header />
      <div className="flex relative">
        <Sidebar data={data} onFormSubmit={handleFormSubmit} onShareButton={handleShareButton} />
        <Map origin={origin} data={data} /> 
        { showSharePopUp && <SharePopup link={locationLink} onShareButton={handleShareButton} /> } 
      </div>
    </>
  )
}

export default App;
