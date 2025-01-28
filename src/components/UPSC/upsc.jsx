import React from "react";
import "./upsc.css";
import Card from "./Card";
import subjectData from "./subjectData";
import Navbar from "../Navbar";
import Advertisement from "../Advertisement";

function Upsc() {
          // Add a state variable to control the visibility of the loading screen

          // Use the useEffect hook to set a timeout for 5 seconds to hide the loading screen

          return (
                    <div>
                              <Navbar/>
                              <Advertisement/>
                                        <div className="upsc-ncert">
                                                  <h1 style={{ fontSize: "27px", fontWeight: '800', textAlign: "center", color: '#fe5a1d' }}>NCERT</h1>
                                                  <div className="exam-card-container">
                                                            {subjectData.map((subjectData, index) => (
                                                                      <Card
                                                                                key={index}
                                                                                link={subjectData.link}
                                                                                subject={subjectData.subject}
                                                                                emoji={subjectData.emoji}
                                                                      ></Card>
                                                            ))}
                                                  </div>
                                        </div>
                              
                    </div>
          );
}

export default Upsc;
