import React from 'react'

const DeepFocus = () => {
          const defaultMessage = encodeURIComponent("")
  return (
    <div className='deepfocus mid flex' >
      
       <ul>
          <li>
          <div>
          <h1>CLASS X</h1>
          <h2>REVISION PROGRAM</h2>
          </div>
                    <div className="col">
                              <p>Smart Mind Mapping</p>
                    </div>
          </li>
          <li>
                    <div className="col">
                              <p>Sample Questions</p>
                    </div>
          </li>
          <li>
                    <div className="col">
                              <p>Assertions - Reasons</p>
                    </div>
          </li>
          <li>
                    <div className="col">
                              <p><span style={{color:'red'}}>HOTS Question</span></p>
                    </div>
          </li>
          <li>
                    <div className="col">
                              <p>Competency Based Questions</p>
                    </div>
          </li>
          <li>
                    <div className="col">
                              <p>NCERT</p>
                    </div>
          </li>
          <li style={{marginTop: '10px'
          }}>
                    <div className="col">
                              <button style={{cursor: 'pointer'}} onClick={()=> window.open(`https://wa.me/+918974808279?text=${defaultMessage}`)}>Join our Community</button>
                    </div>
          </li>
       </ul>
    </div>
  )
}

export default DeepFocus