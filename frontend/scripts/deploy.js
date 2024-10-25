const { ethers } = require("hardhat");

async function main() {
    const names = ["Jay", "Jignesh", "Amit", "Arnav"];
    const parties = ["BJP", "AAP", "INC", "CPI"];
    // const cities = ["", ""];
    const symbols = ["/bjp.png", "/aap.jpg", "/inc.png", "/cpi.png"]; // Paths to your symbol images in the public folder
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
