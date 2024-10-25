import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";


const Voterdashboard=()=> {
  
  const [user, setUser] = useState({})

  useEffect( ()=>{
    // const user = JSON.parse(localStorage.getItem("user"));

    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/other"); // Redirects to the "/other" route
  };
  return (
    <div className='flex flex-col sm:flex-row min-h-screen bg-black gap-3 p-3 text-white '>
        <div className='flex flex-col basis-1/4 gap-3 '>
           <div className='bg-orange-400 h-full rounded-lg p-4 ' >
             <div className='text-center'>
               <img className='mt-8 mx-auto rounded-full' src={user?.avatar} alt="Not Found" />
               <h1 className='mt-3 '>Voter ID No. {user?.voterIdNo}</h1>
               <table className="table-fixed w-full">
                        <thead>
                          <tr >
                            <th className=''></th>
                            <th className=''></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='text-left py-2'>Name : </td>
                            <td className='text-left py-2'>{user?.fullName}</td>
                          </tr>
                          {/* <tr>
                            <td className='text-left py-2'>S/O : </td>
                            <td className='text-left py-2'>{user.userName}</td>
                          </tr> */}
                          <tr>
                            <td className='text-left py-2'>Aadhar No. : </td>
                            <td className='text-left py-2'>{user?.aadharNo}</td>
                          </tr>
                          <tr>
                            <td className='text-left py-2'>District : </td>
                            <td className='text-left py-2'>{user?.district}</td>
                          </tr>
                          <tr>
                            <td className='text-left py-2'>Taluka : </td>
                            <td className='text-left py-2'>{user?.taluka}</td>
                          </tr>
                          {/* <tr>
                            <td className='text-left py-2'>Mobile No. : </td>
                            <td className='text-left py-2'>{user?.mobileNo}</td>
                          </tr> */}
                          {/* <tr>
                            <td className='text-left py-2'>Address : </td>
                            <td className='text-left py-2'>{user?.address}</td>
                          </tr> */}
                          <tr>
                            <td className='text-left py-2'>State : </td>
                            <td className='text-left py-2'>{user?.state}</td>
                          </tr>
                          <tr>
                            <td className='text-left py-2'>Constituency : </td>
                            <td className='text-left py-2'>{user?.constituency}</td>
                          </tr>
                          <tr>
                            <td className='text-left py-2'>Municipal Corporation : </td>
                            <td className='text-left py-2'>{user?.municipalCorporation}</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
           </div>
           
        </div>

        
        <div className='basis-7/12 bg-zinc-900 rounded-lg p-2' >
           <div className='flex flex-col justify-center'>
              <img className='mx-auto' src="p5.png" alt="" />
              <button className='mx-20 mt-4 bg-orange-400 hover:bg-orange-500 px-6 py-4 rounded-full ' onClick={handleRedirect}>Ballet Box</button>
           
           </div>
        </div>


        <div className='flex flex-col basis-1/5 gap-3 '>
           <div className='bg-orange-400 h-1/5 rounded-lg p-2'>
              <div className='text-center justify-center mt-5'>
                  <div>Vote Count</div>
                  <div className='text-lg'><span className='text-green-900 text-3xl font-extrabold'>3</span> Out of <span className='text-3xl font-extrabold'>3</span></div>
              </div>
           </div>
           <div className='bg-zinc-900 h-4/5 rounded-lg p-2'>
           <div className='m-2'>
                <h1 className='font-mono text-lg font-medium '>
                  History
                </h1>
                  <div>
                      <table className="table-fixed w-full">
                        <thead>
                          <tr >
                            <th className='text-left w-4/5 p-3 '>Election</th>
                            <th className='text-right p-3'>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td >Lokshabaha election 1</td>
                            <td className='text-right p-2'>2024</td>
                          </tr>
                          <tr>
                            <td>Bihar  election 1</td>
                            <td className='text-right p-2'>2023</td>
                          </tr>
                          <tr>
                            <td>Gujrat  election 1</td>
                            <td className='text-right p-2'>2022</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Voterdashboard