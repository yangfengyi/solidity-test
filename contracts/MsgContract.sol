// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract MsgContract {
    string private Msg;

    constructor(string memory _msg) {
        // console.log("Deploying a Hello contract '%s'", _msg);
        Msg = _msg;
    }

    function getMsg() public view returns (string memory) {
        return Msg;
    }

    function setMsg(string memory _msg) public {
        // console.log("change msg content '%s' to '%s'", Msg, _msg);
        Msg = _msg;
    }
}