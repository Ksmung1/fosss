import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Magazines.css"
import Navbar from "../Navbar";
import Advertisement from "../Advertisement";

function Magazines() {
          const navigate = useNavigate()
          return (<>         
                     <Navbar></Navbar>
                    <Advertisement></Advertisement>

                    <div className="magazines">
                              <h1>Choose The Type of Magazines</h1>
                              <ul>
                                        <Link style={{ textDecoration: 'none' }} to='/soon'><p>Yojana</p></Link>
                                        <Link style={{ textDecoration: 'none' }} to='/soon'><p>Kurukshetra</p></Link>

                              </ul>
                              <button style={{ margin: '100px 10px', textAlign: "center" }} onClick={()=>navigate('/')}>GO Back</button>

                    </div >
                    </>
          )
}

export default Magazines;