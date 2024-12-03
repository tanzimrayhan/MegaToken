// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MegaToken {
    uint256 public totalSupply;
    string public name = "Mega Token";
    string public symbol = "MEGA";
    string public standard = "Mega Token v1.0";
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        // allocate the initial supply to the owner


        // Assert statements with reason strings
        require(totalSupply == 1000000, "Total supply should be 1000000");
    }

}
