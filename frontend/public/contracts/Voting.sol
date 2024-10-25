// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        string party;
        string symbol;
        int voteCount;
    }

    address public owner;
    Candidate[] public candidates;
    mapping(string => bool) public voters;  // Mapping to track voterId
    uint256 public electionEndTime;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier hasNotVoted(string memory voterId) {
        require(!voters[voterId], "You have already voted");
        _;
    }

    constructor(
        string[] memory _names,
        string[] memory _parties,
        string[] memory _symbols,
        uint256 _duration
    ) {
        owner = msg.sender;
        electionEndTime = block.timestamp + _duration;

        for (uint256 i = 0; i < _names.length; i++) {
            candidates.push(
                Candidate({
                    name: _names[i],
                    party: _parties[i],
                    symbol: _symbols[i],
                    voteCount: 0
                })
            );
        }
    }

    function vote(uint256 _candidateIndex, string memory voterId) public hasNotVoted(voterId) {
        require(block.timestamp < electionEndTime, "Election has ended");
        require(_candidateIndex < candidates.length, "Invalid candidate index");

        voters[voterId] = true;
        candidates[_candidateIndex].voteCount++;
    }

    function getAllVotesOfCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function getRemainingTime() public view returns (uint256) {
        if (block.timestamp >= electionEndTime) {
            return 0;
        }
        return electionEndTime - block.timestamp;
    }
}
