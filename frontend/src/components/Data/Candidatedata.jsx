import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidateData = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Cache configuration
  const CACHE_KEY = 'candidatesData';
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  useEffect(() => {
    fetchCandidatesWithCache();
  }, []);

  const isCacheValid = (cachedData) => {
    return (
      cachedData &&
      cachedData.timestamp &&
      Date.now() - cachedData.timestamp < CACHE_DURATION
    );
  };

  const fetchCandidatesWithCache = async () => {
    try {
      // Check localStorage first
      const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));

      if (isCacheValid(cachedData)) {
        console.log('Using cached candidates data');
        setCandidates(cachedData.data);
        setLoading(false);
        return;
      }

    //   // If cache is invalid or doesn't exist, fetch from API
    //   const response = await axios.get('/api/candidates');
    //   const newData = response.data;

    //   // Store in localStorage with timestamp
    //   const cacheData = {
    //     data: newData,
    //     timestamp: Date.now(),
    //   };
    //   localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

    //   setCandidates(newData);
    } catch (err) {
      console.error('Error fetching candidates:', err);
      setError(err.response?.data?.message || 'Failed to fetch candidates');
      
      // If API fails, try to use cached data as fallback
    //   const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
    //   if (cachedData?.data) {
    //     setCandidates(cachedData.data);
    //     setError('Using cached data - Unable to fetch latest updates');
    //   }
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    setLoading(true);
    setError(null);
    localStorage.removeItem(CACHE_KEY);
    await fetchCandidatesWithCache();
  };

  const filteredCandidates = candidates.filter(candidate =>
    Object.values(candidate).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md flex justify-between items-center">
          <span>{error}</span>
          <button
            onClick={refreshData}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search candidates..."
            className="w-full px-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={refreshData}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Refresh Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Party Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Constituency Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Symbol</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCandidates.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-4 py-3 text-center text-gray-500">
                  No candidates found
                </td>
              </tr>
            ) : (
              filteredCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
                    {candidate.fullName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                    {candidate.partyName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                    {candidate.constituencyName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                    <img className='mt-4 mx-auto rounded-full w-16 h-16 object-cover' src={candidate?.symbol} alt="Not Found" />
                    {/* {candidate.symbol} */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateData;

// import React from 'react'

// const Candidatedata=()=> {
//   return (
//     <div >
//             <table id="default-table" className='w-full '>
//                 <thead>
//                     <tr>
//                         <th>
//                             <span className="flex items-center">
//                                 Name
//                             </span>
//                         </th>
//                         <th >
//                             <span className="flex items-center">
//                                 Party Name
//                             </span>
//                         </th>
//                         <th>
//                             <span className="flex items-center">
//                                 Constituency Name
//                             </span>
//                         </th>
//                         <th>
//                             <span className="flex items-center">
//                                 Symbol
//                             </span>
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">JayPrakash</td>
//                         <td>jay party</td>
//                         <td>C 1</td>
//                         <td>@</td>
//                     </tr>
//                     <tr>
//                         <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Raghav</td>
//                         <td>Veer party</td>
//                         <td>C 1</td>
//                         <td>#</td>
//                     </tr>
//                     <tr>
//                         <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Naath</td>
//                         <td>jay part</td>
//                         <td>C 2</td>
//                         <td>@</td>
//                     </tr>
//                     <tr>
//                         <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Varaa</td>
//                         <td>Veer party</td>
//                         <td>C 2</td>
//                         <td>#</td>
//                     </tr>
//                     <tr>
//                         <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ram</td>
//                         <td>Vijay party</td>
//                         <td>C 3</td>
//                         <td>$</td>
//                     </tr>
                
//                 </tbody>
//             </table>

//     </div>
//   )
// }

// export default Candidatedata