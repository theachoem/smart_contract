// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.16;

contract Index {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
