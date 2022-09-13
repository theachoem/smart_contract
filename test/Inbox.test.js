const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile.js");

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!", "It really here!"],
    })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Inbox", () => {
  it("deploy a contract", () => {
    // console.log("interface:");
    // console.log(interface);
    // console.log("\nbytecode:");
    // console.log(bytecode);
    // console.log("\naccounts:");
    // console.log(accounts);
    // console.log("\ninbox:");
    // console.log(inbox);
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    const debugMessage = await inbox.methods.debugMessage().call();
    assert.equal(message, "Hi there!");
    assert.equal(debugMessage, "It really here!");
  });

  it("set new message", async () => {
    await inbox.methods.setMessage("Good morning!").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "Good morning!");
  });
});
