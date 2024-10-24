import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [whichUser, setWhichUser] = useState("Voter");
  const [error, setError] = useState("");

  const [voterData, setVoterData] = useState({
    nameAsPerVoterId: "",
    voterIdNo: "",
  });
  const [adminData, setAdminData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleBtn(user) {
    setWhichUser(user);
    setError("");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (whichUser === "Voter") {
      setVoterData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setAdminData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    setError("");

    const dataToSend = whichUser === "Voter" ? voterData : adminData;

    try{

      const response = await axios.post(`/api/v1/users/login${whichUser}`, dataToSend, {
        withCredentials: true
      });
      

      if(response.data.statusCode === 200){
        // localStorage.setItem("user", JSON.stringify(response.data.data.user));
        // localStorage.setItem("accessToken", response.data.data.accessToken);
        // setError(response.data.message)
        alert(response.data.message);
        if(whichUser === "Voter"){
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          localStorage.setItem("accessToken", response.data.data.accessToken);
          navigate("/voterdashboard");
        }
        else{
          const cacheData = {
            data: response.data.data.candidates,
            timestamp: Date.now()
          };
          localStorage.setItem('candidatesData', JSON.stringify(cacheData));
          navigate("/ecdashboard")
        }
        // console.log("hello");
        console.log(response)
      }
      else{
        console.log("not hello");
        console.log(response)
        setError("Invalid Voter Id")
      }

    }
    catch(error)
    {
      console.log(response)

      console.log("error", error)
      // setError(" Login Failed ")

    }
  }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setError(""); // Clear any existing errors before submitting

//     const dataToSend = whichUser === "voter" ? voterData : adminData;

//     try {
//         // Replace this with your actual API call
//         const response = await fetch(`/api/${whichUser}Signin`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(dataToSend),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || `An error occurred during ${whichUser} sign in`);
//         }

//         // Handle successful sign in here (e.g., redirect to dashboard)
//         console.log(`${whichUser} signed in successfully`);
//     } catch (err) {
//         setError(err.message);
//     }
// }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-black gap-4 p-10 text-white ">
      <div className=" bg-emerald-400 basis-1/2 rounded-2xl">
        <h1 className="mt-8 font-mono text-3xl font-semibold text-center">
          Remote Voting System with Fingureprint Authentication and Blockchain
        </h1>
        <img className="mt-32 ml-48" src="logo.png" alt="" />
      </div>
      <div className=" basis-1/2 text-emerald-400 ">
        <h1 className="mt-4 font-mono text-3xl font-semibold text-center">
          Choose the Option
        </h1>
        <div className="flex flex-row m-5 gap-5 justify-between mt-10">
          <button
            className={`border-emerald-400 hover:bg-white border-2 px-4 py-2 rounded-full w-fit ${
              whichUser === "Voter" ? "hover:bg-white" : "bg-white text-black"
            } `}
            onClick={() => handleBtn("Admin")}
          >
            {/* <Link to='/ecdashboard'>  Election Commission</Link>  */}
            Election Commission
          </button>
          <button
            className={`border-emerald-400 border-2 px-4 py-2 rounded-full w-48 ${
              whichUser === "Voter" ? "bg-white text-black" : "hover:bg-white"
            }`}
            onClick={() => handleBtn("Voter")}
          >
            {/* <Link to='/voterdashboard' >Voter</Link> */}
            Voter
          </button>
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {whichUser === "Voter" ? (
          <div className=" justify-center">
            <input
              className="m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black"
              type="text"
              name="nameAsPerVoterId"
              value={voterData.nameAsPerVoterId}
              onChange={handleInputChange}
              placeholder="Name As Per Voter Id"
            />
            <input
              className="m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black"
              type="text"
              name="voterIdNo"
              value={voterData.voterIdNo}
              onChange={handleInputChange}
              placeholder="Voter Id No"
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="m-5 border-emerald-400 hover:bg-white  border-2 px-4 py-2 rounded-full w-48"
            >
              Log In
            </button>
          </div>
        ) : (
          <div className=" justify-center">
            <input
              className="m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black"
              type="text"
              name="username"
              value={adminData.username}
              onChange={handleInputChange}
              placeholder="username"
            />
            <input
              className="m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black"
              type="password"
              name="password"
              value={adminData.password}
              onChange={handleInputChange}
              placeholder="password"
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className="m-5 border-emerald-400 hover:bg-white  border-2 px-4 py-2 rounded-full w-48"
            >
              Log In
            </button>
          </div>
        )}

        {/* <div className=' justify-center'>
                <input className='m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black' type="text" placeholder='username' />
                <input className='m-5 rounded-full border border-green-500 w-3/4 p-4 py-1 bg-black' type="text" placeholder='password' />
                <button onClick={() => navigate('#')} className='m-5 border-emerald-400 hover:bg-white  border-2 px-4 py-2 rounded-full w-48'>
                    Log In
                </button>
            </div> */}
      </div>
    </div>
  );
};

export default Signin;
