import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import VotingABI from '../../../../artifacts/contracts/Voting.sol/Voting.json';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [user, setUser] = useState({});

  // Fetch user data from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Fetch candidates from the blockchain
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        // Initialize provider (MetaMask)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request access to MetaMask

        const signer = provider.getSigner();
        const contractAddress = "0x2E7c5EaE221d1D80A7f7eadb52ecF559c14ff734"; // Replace with your contract address
        const votingContract = new ethers.Contract(contractAddress, VotingABI.abi, signer);

        // Fetch candidates array
        const candidateList = await votingContract.getAllVotesOfCandidates();
        setCandidates(candidateList);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  // Function to check voting status of a voter
const checkVoterStatus = async (voterId) => {
  try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x2E7c5EaE221d1D80A7f7eadb52ecF559c14ff734"; 
      const votingContract = new ethers.Contract(contractAddress, VotingABI.abi, signer);

      // Query voter status using the new checkIfVoted function
      const hasVoted = await votingContract.checkIfVoted(voterId);
      return hasVoted; // Should return true if the ID has voted, otherwise false
  } catch (error) {
      console.error("Error checking voter status:", error);
      return null;
  }
};


  // Handle vote function 
  const handleVote = async (candidateIndex) => {
    const voterId = String(user?.voterIdNo || "").trim();
    console.log(voterId)
    if (!voterId) {
      alert("No voter ID found. Please check your user details.");
      return;
    }

    // Check if voter has already voted
    const hasVoted = await checkVoterStatus(voterId);
    if (hasVoted) {
      alert("You have already voted.");
      return;
    }

    try {
      // Initialize provider (MetaMask)
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();
      const contractAddress = "0x2E7c5EaE221d1D80A7f7eadb52ecF559c14ff734";
      const votingContract = new ethers.Contract(contractAddress, VotingABI.abi, signer);

      // Call the vote function with voterId and candidateIndex
      const tx = await votingContract.vote(candidateIndex, voterId, {
        gasLimit: ethers.utils.hexlify(300000) // Adjust gas limit if needed
      });
      await tx.wait();

      console.log("Vote cast successfully!");

      // Update candidates list post-vote
      const candidateList = await votingContract.getAllVotesOfCandidates();
      setCandidates(candidateList);
    } catch (error) {
      console.error("Error casting vote:", error);
    }
  };

  // Clear voter ID on new login
  const handleLogin = async (newVoterId) => {
    // Logic to handle new login and reset the application state
    const storedUser = { voterIdNo: newVoterId }; // This should be updated to reflect the new user login logic
    localStorage.setItem("user", JSON.stringify(storedUser));
    setUser(storedUser);
  };

  return (
    <div className="flex flex-col justify-center basis-7/12 h-full bg-zinc-900 pb-4">
      <h1 className="text-center text-white font-bold text-2xl mb-4 mt-4">Candidates list</h1>
      <div className="flex flex-col gap-4 pl-4 pr-4">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="text-black font-mono flex sm:flex-row flex-col items-center bg-orange-200 rounded-lg p-3 w-full justify-between sm:gap-0 gap-3"
          >
            <img
              className="rounded-full w-10 h-10"
              src={candidate.symbol}
              alt="candidate symbol"
            />
            <h1 className="sm:text-xl text-sm">{candidate.party}</h1>
            <h1 className="sm:text-xl text-sm">{candidate.name}</h1>
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => handleVote(index)}
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidateList;
