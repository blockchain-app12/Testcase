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
const tokenB = artifacts.require("tokenB");

contract("BTT", (accounts) => {
    const zeroAddress = "0x0000000000000000000000000000000000000000";
    const owner1 = accounts[0];
    const owner2 = accounts[0];
    const testAccount1 = accounts[1]
    const testAccount2 = accounts[2]
    const testAccount3 = accounts[3]
    const testAccount4 = accounts[4]

    var decimals = 1e18
    before(async function () {
        tokenBinstance = await tokenB.new();
        BTTinstance = await BTT.new(1, owner1, owner2, tokenBinstance.address);

    });
    describe("[Testcase 1 : check if the Join Function in BTT MLM Contract features implemented work as intended]", () => {
        describe("", () => {
            const amount = "360000000000000000000"
            n = 5000;


            it("1.1.If Check the User Join Function in BTT MLM Reffer ID is " + 1 + " and User Amount is " + Number(amount / decimals) + " and return values   and User ID is " + 1 + "?", async function () {

                await tokenBinstance.transfer(BTTinstance.address, "100000000000000000000000000000000000", { from: owner1 })
                let j = 1;
                let i = 1;



                // // fs.appendFile('./siva.txt', "User_ID" + "\t\t" + "User_Level" + "\t\t" + "User_Level_Count" + "\t\t" + "User_Cycle" + "\t\t" + "User_Level_Earned" + "\t\t" + "Reffer_ID" + "\t\t" + "Reffer_Level" + "\t\t" + "Reffer_Level_Count" + "\t\t" + "Reffer_Cycle" + "\t\t" + "Reffer_Level_Earned" + "\t\t" + "Reinvenst ID" + "\t\t" + "User ID" + "\t\t" + "Status" +"\n", function (err) {
                // //     if (err) throw err;
                // // });

                // // fs.appendFile('./siva.txt', "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------" + "\n", function (err) {
                // //     if (err) throw err;
                // // });

                // fs.appendFile('./siva1.txt', "User_ID" + "\t\t" + "User_Level" + "\t\t" + "User_Level_Count" + "\t\t" + "User_Cycle" + "\t\t" + "User_Level_Earned" + "\n", function (err) {
                //     if (err) throw err;
                // });

                // fs.appendFile('./siva1.txt', "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------" + "\n", function (err) {
                //     if (err) throw err;
                // });




                while (i <= n) {

                    var beforeowner1balance = await web3.eth.getBalance(owner1)
                    console.log("beforeowner1balance", Number(beforeowner1balance / decimals))

                    var beforeTest1balance = await web3.eth.getBalance(testAccount1)
                    console.log("beforeTest1balance", Number(beforeTest1balance / decimals))

                    var beforeTest2balance = await web3.eth.getBalance(testAccount2)
                    console.log("beforeTest2balance", Number(beforeTest2balance / decimals))

                    var beforeTest3balance = await web3.eth.getBalance(testAccount3)
                    console.log("beforeTest3balance", Number(beforeTest3balance / decimals))

                    var beforeTest4balance = await web3.eth.getBalance(testAccount4)
                    console.log("beforeTest4balance", Number(beforeTest4balance / decimals))

                     var beforeuser1details = await BTTinstance.users(owner1)
                     console.log("beforeuser1details", Number(beforeuser1details.id)  + "\t" + Number(beforeuser1details.level))
                      
                     var beforeuser2details = await BTTinstance.users(testAccount1)
                     console.log("beforeuser2details", Number(beforeuser2details.id)  + "\t" + Number(beforeuser2details.level))

                     var beforeuser3details = await BTTinstance.users(testAccount2)
                     console.log("beforeuser3details", Number(beforeuser3details.id)  + "\t" + Number(beforeuser3details.level))

                     var beforeuser4details = await BTTinstance.users(testAccount3)
                     console.log("beforeuser4details", Number(beforeuser4details.id)  + "\t" + Number(beforeuser4details.level))

                     var beforeuser5details = await BTTinstance.users(testAccount4)
                     console.log("beforeuser5details", Number(beforeuser5details.id)  + "\t" + Number(beforeuser5details.level))


                    await BTTinstance.join(j, {
                        from: accounts[i],
                        value: amount
                    })

                    var afterowner1balance = await web3.eth.getBalance(owner1)
                    console.log("afterowner1balance", Number(afterowner1balance / decimals))

                    var afterTest1balance = await web3.eth.getBalance(testAccount1)
                    console.log("afterTest1balance", Number(afterTest1balance / decimals))

                    var afterTest2balance = await web3.eth.getBalance(testAccount2)
                    console.log("afterTest2balance", Number(afterTest2balance / decimals))

                    var afterTest3balance = await web3.eth.getBalance(testAccount3)
                    console.log("afterTest3balance", Number(afterTest3balance / decimals))

                    var afterTest4balance = await web3.eth.getBalance(testAccount4)
                    console.log("afterTest4balance", Number(afterTest4balance / decimals))

                    var afteruser1details = await BTTinstance.users(owner1)
                    console.log("afteruser1details", Number(afteruser1details.id)  + "\t" + Number(afteruser1details.level))
                     
                    var afteruser2details = await BTTinstance.users(testAccount1)
                    console.log("afteruser2details", Number(afteruser2details.id)  + "\t" + Number(afteruser2details.level))

                    var afteruser3details = await BTTinstance.users(testAccount2)
                    console.log("afteruser3details", Number(afteruser3details.id)  + "\t" + Number(afteruser3details.level))

                    var afteruser4details = await BTTinstance.users(testAccount3)
                    console.log("afteruser4details", Number(afteruser4details.id)  + "\t" + Number(afteruser4details.level))

                    var afteruser5details = await BTTinstance.users(testAccount4)
                    console.log("afteruser5details", Number(afteruser5details.id)  + "\t" + Number(afteruser5details.level))


                    // var uerdetails1 = await BTTinstance.users(accounts[i])
                    // console.log("User ID", Number(uerdetails1.id))
                    // console.log("Level ", Number(uerdetails1.level))
                    // console.log("Level Count ", Number(uerdetails1.levelCount))
                    // console.log("Cycle ", Number(uerdetails1.cycle))
                    // console.log("Level Earned ", Number(uerdetails1.levelEarned / decimals))

                    // var userReffernals1 = await BTTinstance.viewRef(accounts[i])
                    // console.log("userReffernals", userReffernals1)



                    // var refferdetails1 = await BTTinstance.users(uerdetails1.referer)
                    // console.log("Reffer ID", Number(refferdetails1.id))
                    // console.log("Reffer Level ", Number(refferdetails1.level))
                    // console.log("Reffer Level Count ", Number(refferdetails1.levelCount))
                    // console.log("Reffer Cycle ", Number(refferdetails1.cycle))
                    // console.log("Reffer Level Earned ", Number(refferdetails1.levelEarned / decimals))

                    // var refferReffernals1 = await BTTinstance.viewRef(uerdetails1.referer)
                    // console.log("refferReffernals", refferReffernals1)



                    // fs.appendFile('./siva.txt', Number(uerdetails1.id) + "\t\t" + Number(uerdetails1.level) + "\t\t" + Number(uerdetails1.levelCount) + "\t\t" + Number(uerdetails1.cycle) + "\t\t" + Number(uerdetails1.levelEarned / decimals) + "\t\t" + Number(refferdetails1.id) + "\t\t" + Number(refferdetails1.level) + "\t\t" + Number(refferdetails1.levelCount) + "\t\t" + Number(refferdetails1.cycle) + "\t\t" + Number(refferdetails1.levelEarned / decimals) + "\t\t"  + Number(user) + "\t\t" + status + "\t\t" + Number(beforeowner1balance / decimals) + "\t\t" + Number(beforeTest1balance / decimals) + "\t\t" + Number(beforeTest2balance / decimals) + "\t\t" + Number(beforeTest3balance / decimals) + "\t\t" + Number(beforeTest4balance / decimals) + "\t\t" + Number(afterowner1balance / decimals) + "\t\t" + Number(afterTest1balance / decimals) + "\t\t" + Number(afterTest2balance / decimals) + "\t\t" + Number(beforeTest3balance / decimals) + "\t\t" + Number(afterTest4balance / decimals) + "\n", function (err) {
                    //     if (err) throw err;
                    // });

                    fs.appendFile('./siva.txt', i + "\t\t\t" + (Number(beforeowner1balance / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest1balance / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest2balance / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest3balance / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest4balance / decimals)).toFixed(0) + "\t\t" + (Number(afterowner1balance / decimals)).toFixed(0) + "\t\t" + (Number(afterTest1balance / decimals)).toFixed(0) + "\t\t" + (Number(afterTest2balance / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest3balance / decimals)).toFixed(0) + "\t\t" + (Number(afterTest4balance / decimals)).toFixed(0) + "\t\t" + Number(beforeuser1details.id)  + "\t\t" + Number(beforeuser1details.level) + "\t\t" + Number(afteruser1details.id)  + "\t\t" + Number(afteruser1details.level) + "\t\t" + Number(beforeuser2details.id)  + "\t\t" + Number(beforeuser2details.level) + "\t\t" + Number(afteruser2details.id)  + "\t\t" + Number(afteruser2details.level) + "\t\t" + Number(beforeuser3details.id)  + "\t\t" + Number(beforeuser3details.level) +  "\t\t" + Number(afteruser3details.id)  + "\t\t" + Number(afteruser3details.level) + "\t\t" + Number(beforeuser4details.id)  + "\t\t" + Number(beforeuser4details.level) + "\t\t" + Number(afteruser4details.id)  + "\t\t" + Number(afteruser4details.level) + "\t\t" + Number(beforeuser5details.id)  + "\t\t" + Number(beforeuser5details.level) + "\t\t" + Number(afteruser5details.id)  + "\t\t" + Number(afteruser5details.level) + "\n", function (err) {
                        if (err) throw err;
                    });



                    console.log("<---------------------" + i + " ------------------------------->")

                    var beforeowner1balance1 = await web3.eth.getBalance(owner1)
                    console.log("beforeowner1balance1", Number(beforeowner1balance1 / decimals))

                    var beforeTest1balance2 = await web3.eth.getBalance(testAccount1)
                    console.log("beforeTest1balance2", Number(beforeTest1balance2 / decimals))

                    var beforeTest2balance3 = await web3.eth.getBalance(testAccount2)
                    console.log("beforeTest2balance3", Number(beforeTest2balance3 / decimals))

                    var beforeTest3balance4 = await web3.eth.getBalance(testAccount3)
                    console.log("beforeTest3balance4", Number(beforeTest3balance4 / decimals))

                    var beforeTest4balance5 = await web3.eth.getBalance(testAccount4)
                    console.log("beforeTest4balance5", Number(beforeTest4balance5 / decimals))

                    var beforeuser1details1 = await BTTinstance.users(owner1)
                    console.log("beforeuser1details1", Number(beforeuser1details1.id)  + "\t" + Number(beforeuser1details1.level))
                     
                    var beforeuser2details1 = await BTTinstance.users(testAccount1)
                    console.log("beforeuser2details1", Number(beforeuser2details1.id)  + "\t" + Number(beforeuser2details1.level))

                    var beforeuser3details1 = await BTTinstance.users(testAccount2)
                    console.log("beforeuser3details1", Number(beforeuser3details1.id)  + "\t" + Number(beforeuser3details1.level))

                    var beforeuser4details1 = await BTTinstance.users(testAccount3)
                    console.log("beforeuser4details1", Number(beforeuser4details1.id)  + "\t" + Number(beforeuser4details1.level))

                    var beforeuser5details1 = await BTTinstance.users(testAccount4)
                    console.log("beforeuser5details1", Number(beforeuser5details1.id)  + "\t" + Number(beforeuser5details1.level))

                    await BTTinstance.join(j, {
                        from: accounts[++i],
                        value: amount
                    })

                    var afterowner1balance1 = await web3.eth.getBalance(owner1)
                    console.log("afterowner1balance1", Number(afterowner1balance1 / decimals))

                    var afterTest1balance2 = await web3.eth.getBalance(testAccount1)
                    console.log("afterTest1balance2", Number(afterTest1balance2 / decimals))

                    var afterTest2balance3 = await web3.eth.getBalance(testAccount2)
                    console.log("afterTest2balance3", Number(afterTest2balance3 / decimals))

                    var afterTest3balance4 = await web3.eth.getBalance(testAccount3)
                    console.log("afterTest3balance4", Number(afterTest3balance4 / decimals))

                    var afterTest4balance5 = await web3.eth.getBalance(testAccount4)
                    console.log("afterTest4balance5", Number(afterTest4balance5 / decimals))

                    var afteruser1details1 = await BTTinstance.users(owner1)
                    console.log("afteruser1details1", Number(afteruser1details1.id)  + "\t" + Number(afteruser1details1.level))
                     
                    var afteruser2details1 = await BTTinstance.users(testAccount1)
                    console.log("afteruser2details1", Number(afteruser2details1.id)  + "\t" + Number(afteruser2details1.level))

                    var afteruser3details1 = await BTTinstance.users(testAccount2)
                    console.log("afteruser3details1", Number(afteruser3details1.id)  + "\t" + Number(afteruser3details1.level))

                    var afteruser4details1 = await BTTinstance.users(testAccount3)
                    console.log("afteruser4details1", Number(afteruser4details1.id)  + "\t" + Number(afteruser4details1.level))

                    var afteruser5details1 = await BTTinstance.users(testAccount4)
                    console.log("afteruser5details1", Number(afteruser5details1.id)  + "\t" + Number(afteruser5details1.level))

                    // var uerdetails = await BTTinstance.users(accounts[i])
                    // console.log("User ID", Number(uerdetails.id))
                    // console.log("Level ", Number(uerdetails.level))
                    // console.log("Level Count ", Number(uerdetails.levelCount))
                    // console.log("Cycle ", Number(uerdetails.cycle))
                    // console.log("Level Earned ", Number(uerdetails.levelEarned / decimals))

                    // var userReffernals = await BTTinstance.viewRef(accounts[i])
                    // console.log("userReffernals", userReffernals)





                    // var refferdetails = await BTTinstance.users(uerdetails.referer)
                    // console.log("Reffer ID", Number(refferdetails.id))
                    // console.log("Reffer Level ", Number(refferdetails.level))
                    // console.log("Reffer Level Count ", Number(refferdetails.levelCount))
                    // console.log("Reffer Cycle ", Number(refferdetails.cycle))
                    // console.log("Reffer Level Earned ", Number(refferdetails.levelEarned / decimals))

                    // var refferReffernals = await BTTinstance.viewRef(uerdetails.referer)
                    // console.log("refferReffernals", refferReffernals)

                    // fs.appendFile('./siva.txt', Number(uerdetails.id) + "\t\t" + Number(uerdetails.level) + "\t\t" + Number(uerdetails.levelCount) + "\t\t" + Number(uerdetails.cycle) + "\t\t" + Number(uerdetails.levelEarned / decimals) + "\t\t" + Number(refferdetails.id) + "\t\t" + Number(refferdetails.level) + "\t\t" + Number(refferdetails.levelCount) + "\t\t" + Number(refferdetails.cycle) + "\t\t" + Number(refferdetails.levelEarned / decimals) + "\t\t"  + Number(user1) + "\t\t" + status1 + "\t\t" + Number(beforeowner1balance1 / decimals) + "\t\t" + Number(beforeTest1balance2 / decimals) + "\t\t" + Number(beforeTest2balance3 / decimals) + "\t\t" + Number(beforeTest3balance4 / decimals) + "\t\t" + Number(beforeTest4balance5 / decimals) + "\t\t" + Number(afterowner1balance1 / decimals) + "\t\t" + Number(afterTest1balance2 / decimals) + "\t\t" + Number(afterTest2balance3 / decimals) + "\t\t" + Number(beforeTest3balance4 / decimals) + "\t\t" + Number(afterTest4balance5 / decimals) + "\n", function (err) {
                    //     if (err) throw err;
                    // });

                    fs.appendFile('./siva.txt', i + "\t\t\t" + (Number(beforeowner1balance1 / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest1balance2 / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest2balance3 / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest3balance4 / decimals)).toFixed(0) + "\t\t" + (Number(beforeTest4balance5 / decimals)).toFixed(0) + "\t\t" + (Number(afterowner1balance1 / decimals)).toFixed(0) + "\t\t" + (Number(afterTest1balance2 / decimals)).toFixed(0) + "\t\t" + (Number(afterTest2balance3 / decimals)).toFixed(0) + "\t\t" + (Number(afterTest3balance4 / decimals)).toFixed(0) + "\t\t" + (Number(afterTest4balance5 / decimals)).toFixed(0) +  "\t\t" + Number(beforeuser1details1.id)  + "\t\t" + Number(beforeuser1details1.level) + "\t\t" + Number(afteruser1details1.id)  + "\t\t" + Number(afteruser1details1.level) + "\t\t" + Number(beforeuser2details1.id)  + "\t\t" + Number(beforeuser2details1.level) + "\t\t" + Number(afteruser2details1.id)  + "\t\t" + Number(afteruser2details1.level) + "\t\t" + Number(beforeuser3details1.id)  + "\t\t" + Number(beforeuser3details1.level) +  "\t\t" + Number(afteruser3details1.id)  + "\t\t" + Number(afteruser3details1.level) + "\t\t" + Number(beforeuser4details1.id)  + "\t\t" + Number(beforeuser4details1.level) + "\t\t" + Number(afteruser4details1.id)  + "\t\t" + Number(afteruser4details1.level) + "\t\t" + Number(beforeuser5details1.id)  + "\t\t" + Number(beforeuser5details1.level) + "\t\t" + Number(afteruser5details1.id)  + "\t\t" + Number(afteruser5details1.level) + "\n", function (err) {
                        if (err) throw err;
                    });



                    console.log("<---------------------" + i + " ------------------------------->")

                    i++;
                    j++;


                }



                var ownerReffernals = await BTTinstance.viewRef(accounts[0])
                console.log("ownerReffernals", ownerReffernals)


                var user1Reffernals = await BTTinstance.viewRef(accounts[1])
                console.log("user1Reffernals", user1Reffernals)


                var User2Reffernals = await BTTinstance.viewRef(accounts[2])
                console.log("User2Reffernals", User2Reffernals)


                var user3Reffernals = await BTTinstance.viewRef(accounts[3])
                console.log("user3Reffernals", user3Reffernals)



                // for (i = 0; i <= n; i++) {
                //     var afterUserdetails = await BTTinstance.users(accounts[i])
                //     fs.appendFile('./siva1.txt', Number(afterUserdetails.id) + "\t\t\t" + Number(afterUserdetails.level) + "\t\t\t" + Number(afterUserdetails.levelCount) + "\t\t" + Number(afterUserdetails.cycle) + "\t\t" + Number(afterUserdetails.levelEarned / decimals) + "\n", function (err) {
                //         if (err) throw err;
                //     });
                // }





            }).timeout(100000000000000000000000000000000);

        })
    })
})
