import React, {useState, useEffect} from 'react';


function InWindowSimulator(props){
  const [url, changeURL] = useState({
    url: 'about:blank'
  })
  useEffect(()=>{
    if(props.url !== url.url){
      changeURL({url: props.url})
    }
  })
  const style = {
    height: '60%',
    width: '100%',
    borderWidth: '0px',
  }
    return (
      <div>
        <iframe style = {style} src={url.url}></iframe>
      </div>
    )
  }

export default InWindowSimulator;

