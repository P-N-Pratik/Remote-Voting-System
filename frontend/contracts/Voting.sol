// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        string party;
        uint256 voteCount;
        string symbol;
    }

    mapping(address => bool) public hasVoted;
    mapping(string => bool) public voterIdStatus; // Track voter IDs
    Candidate[] public candidates;

    constructor(string[] memory candidateNames, string[] memory candidateParties, string[] memory symbols) {
        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate(candidateNames[i], candidateParties[i], 0, symbols[i]));
        }
    }

    function vote(uint256 candidateIndex, string memory voterId) public {
        require(!voterIdStatus[voterId], "You have already voted.");
        require(candidateIndex < candidates.length, "Invalid candidate index.");

        candidates[candidateIndex].voteCount += 1;
        voterIdStatus[voterId] = true; // Mark this voter ID as having voted
    }

    function checkIfVoted(string memory voterId) public view returns (bool) {
        return voterIdStatus[voterId];
    }

    function getAllVotesOfCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
}
