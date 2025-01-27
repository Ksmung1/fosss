import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Advertisement = () => {
          const [active, setActive] = useState(false)

          useEffect (()=>{
                    const timer = setInterval(()=>{
                              setActive((prev)=>!prev)
                    },5000);
                    return ()=> clearInterval(timer);
          },[])
  return (

    <div className='advertisement'>
                    <div><img src="./images/megaphone.gif" alt="" /></div>

          {active ? (
                     <a href='./images/NEET.pdf' download="NEET_Registration.pdf">
                              <div className="col">NEET 2025 Registration Starting Soon <button style={{margin: '0 0 0 0px'}}>Apply Now</button></div> </a> ):(
          <NavLink to={'https://upsconline.gov.in/upsc/OTRP/index.php'}><div className="col">Apply UPSC CSC 2025 <button style={{margin: '0 0 0 40px'}}>Apply Now</button></div></NavLink>
          )}
                              {/* <div><img src="./images/hot-news.gif" alt="" /></div> */}

    </div>
  )
}

export default Advertisement;