import React from "react";
import { useParams } from "react-router-dom";
import ClassCard from "./ClassCard";
import classData from "./classData";
import "../upsc.css";
import Navbar from "../../Navbar";
import Advertisement from "../../Advertisement";

function SubjectContent({ subject }) {
          if (classData[subject]) {
                    const Items = classData[subject];
                    const subj = subject
                    return (
                              <div className="ncert-class" >
                                        <h1 style={{ margin: '20px', fontSize: '25px', fontWeight: '700' }}>{subject.toUpperCase()}</h1>
                                        <div className="class-card-container">
                                                  {Items.map((item, index) => (
                                                            <div key={index}>
                                                                      <ClassCard class={item.class} topic={item.topic} link={`/pdf-viewer/${subj}${item.class}`} /> {/* Pass pdfUrl as a prop */}
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    );
          } else {
                    return (
                              <div>
                                        <h1>Subject not found</h1>
                              </div>
                    );
          }
}

function Subjects() {
          const { subject } = useParams();

          return ( <div>
                    <div className="desk-top">                    <Navbar></Navbar>
                    </div>
                    <Advertisement></Advertisement>
                    <SubjectContent subject={subject}/>
                    </div>);
}

export default Subjects;
