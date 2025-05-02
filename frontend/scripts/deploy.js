const { ethers } = require("hardhat");

async function main() {
    const names = ["Jay", "Jignesh", "Amit", "Arnav"];
    const parties = ["Party 1", "Party 2", "Party 3", "Party 4"];
    // const cities = ["", ""];
    const symbols = ["/img.png", "/img.png", "/img.png", "/img.png"]; // Paths to your symbol images in the public folder
    const duration = 72000; // Election duration in seconds

    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(names, parties, symbols);
    
    await voting.deployed();
    console.log("Voting contract deployed to:", voting.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
