import React ,{useState} from 'react'
import seimg from '../assets/Create1to1-removebg-preview.png'
const Services = () => {
  const [isDivVisible, setDivVisible] = useState(true);
  const toggleDiv = () => {
    setDivVisible(!isDivVisible);
  };
  return (
    <div className='servicecontainer'>
      <h2>Services</h2>
      {isDivVisible ? <div className="befclick">
      <div className="servicebutton">
        <div className="four1">1:1 Call</div>
        <div className="four">Text Query</div>
        <div className="four">Webinar</div>
        <div className="four">Add Service</div>
      </div>
      <div className="serimg">
      <img src={seimg} alt="Service Image" />
      <div className="txt">Createa 1:1 service</div>
      <button className="button" onClick={toggleDiv}>
      + Add 
    </button>                                                 
      </div>
      </div>: 
      <div className='afterclick'>
        <div className="aftertop">
        <div className="four1">1:1 Call</div>
        <img src={seimg} alt="Service Image" />
        </div>
        <div className="serviceform">
        <form action="" >
          <label htmlFor="title">Title</label>
          <input type="text" name="" id="" placeholder="Name of service"/>
          <label htmlFor="duration">Duration</label>
          <input type="time" name="" id="" placeholder='00:00'/>
          <label htmlFor="amount">Amount</label>
          <div className="serviceamount">
           <input type="text" name="" id="" placeholder='rs'/>
            <input type="text" name="" id="" placeholder='Price Suggestions'/>
          </div>
          <button className="button" style={{width:"40%",marginLeft:"100px", marginBottom:"15px"}}>
      + Add 
    </button>
        </form>
        </div>
        </div>}  
      </div>
  )
}

export default Services