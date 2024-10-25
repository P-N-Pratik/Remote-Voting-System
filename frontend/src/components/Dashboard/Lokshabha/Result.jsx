import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import VotingABI from "../../../../artifacts/contracts/Voting.sol/Voting.json";

const Result = () => {
  const [candidates, setCandidates] = useState([]);

  // Fetch candidates and vote counts from the blockchain
  useEffect(() => {
    const fetchCandidatesAndVotes = async () => {
      try {
        // Initialize provider (MetaMask)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request access to MetaMask

        const signer = provider.getSigner();
        const contractAddress = "0x2E7c5EaE221d1D80A7f7eadb52ecF559c14ff734"; // Replace with your contract address
        const votingContract = new ethers.Contract(
          contractAddress,
          VotingABI.abi,
          signer
        );

        // Fetch candidates
        const candidateList = await votingContract.getAllVotesOfCandidates();
        setCandidates(candidateList);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidatesAndVotes();
  }, []);

  return (
    <div className="flex flex-col justify-center basis-7/12 bg-zinc-900 rounded-lg p-10">
      {/* <h1 className="text-white font-bold text-2xl mb-4">Admin Dashboard</h1> */}
      <h2 className="text-white text-xl mb-4">Votes of Each Candidate</h2>
      <div className="flex flex-col gap-4">
        {candidates.map((candidate, index) => (
          <div
            key={index}
            className="text-white font-mono flex sm:flex-row flex-col items-center bg-orange-400 rounded-lg p-3 w-full justify-between sm:gap-0 gap-3"
          >
            <img
              className="rounded-full w-10 h-10"
              src={candidate.symbol}
              alt="candidate symbol"
            />
            <h1 className="sm:text-xl text-sm">{candidate.party}</h1>
            <h1 className="sm:text-xl text-sm">{candidate.name}</h1>
            <h1 className="sm:text-xl text-sm">
              Votes: {candidate.voteCount.toString()}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
