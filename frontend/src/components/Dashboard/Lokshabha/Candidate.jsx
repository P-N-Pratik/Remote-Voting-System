import React,  { useState } from 'react'
import Addcandidate from '../../Addbuttons/Addcandidate';
import Candidatedata from '../../Data/Candidatedata';

const Candidate=()=> {

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='flex flex-col px-4 gap-4 justify-end'>
      <h1 className='font-mono text-2xl font-semibold '>Candidate Details</h1>
      <div>
        <Candidatedata/>
      </div>


      <div className='bg-orange-400 w-12 h-12 rounded-full items-center flex justify-center pt-2'>
        <button onClick={handleButtonClick} className='items-center w-fit'>
        <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            colors="primary:#ffffff">
        </lord-icon>
        </button>
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ">
          <Addcandidate onClose={handleClosePopup} />
        </div>
      )}

    </div>
  )
}

export default Candidate