const testHelpers = require("@openzeppelin/test-helpers");
const {
    expectEvent, // Assertions for emitted events
    expectRevert,
    BN, // Assertions for transactions that should fail
} = require("@openzeppelin/test-helpers");

var chai = require("chai");
const { web3 } = require("hardhat");
var expect = chai.expect;
const BTT = artifacts.require("BTT");
var fs = require('fs');

contract("BTT", (accounts) => {
    const zeroAddress = "0x0000000000000000000000000000000000000000";
    const owner1 = accounts[0];
    const owner2 = accounts[0];

    var decimals = 1e18
    before(async function () {
        BTTinstance = await BTT.new(owner1, owner2);

    });
    describe("[Testcase 1 : check if the Join Function in BTT MLM Contract features implemented work as intended]", () => {
        describe("", () => {
            const amount = "30000000000000000000"
            n = 10;


            it("1.1.If Check the User Join Function in BTT MLM Reffer ID is " + 1 + " and User Amount is " + Number(amount / decimals) + " and return values   and User ID is " + 1 + "?", async function () {

                let j = 1;
                let i;



                for (i = 1; i <= n; i++) {
                    await BTTinstance.join(j, {
                        from: accounts[i],
                        value: amount
                    })


                    await BTTinstance.join(j, {
                        from: accounts[++i],
                        value: amount
                    })



                    j++;


                }


            })

        })
    })
})
