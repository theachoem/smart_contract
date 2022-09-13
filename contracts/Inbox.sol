// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    string public debugMessage;

    constructor(string memory initialMessage, string memory initialDebugMessage)
        public
    {
        message = initialMessage;
        debugMessage = initialDebugMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function setDebugMessage(string memory newNebugMessage) public {
        debugMessage = newNebugMessage;
    }
}
