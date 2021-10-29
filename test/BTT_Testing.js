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
const tokenB = artifacts.require("tokenB");


contract("BTT", (accounts) => {
    const zeroAddress = "0x0000000000000000000000000000000000000000";
    const owner1 = accounts[0];
    const owner2 = accounts[1];

    const testAccount1 = accounts[6];
    const testAccount2 = accounts[7];
    const testAccount3 = accounts[8];
    const testAccount4 = accounts[9];
    const testAccount5 = accounts[10];
    const testAccount6 = accounts[11];
    const testAccount7 = accounts[12];
    const testAccount8 = accounts[13];
    const testAccount9 = accounts[17];
    const testAccount10 = accounts[2];
    const testAccount11 = accounts[3];
    const testAccount12 = accounts[4];
    const testAccount13 = accounts[14];
    const testAccount14 = accounts[15];
    const testAccount15 = accounts[16];
    // const testAccount16 = accounts[17];
    // const testAccount17 = accounts[18];
    // const testAccount18 = accounts[19];
    // const testAccount19 = accounts[20];
    // const testAccount20 = accounts[21];
    // const testAccount21 = accounts[22];
    // const testAccount22 = accounts[23];
    // const testAccount23 = accounts[24];
    // const testAccount24 = accounts[25];
    // const testAccount25 = accounts[26];
    // const testAccount26 = accounts[27];
    // const testAccount27 = accounts[28];
    // const testAccount28 = accounts[29];
    // const testAccount29 = accounts[30];
    // const testAccount30 = accounts[31];
    // const testAccount31 = accounts[33];
    // const testAccount32 = accounts[34];
    // const testAccount33 = accounts[35];
    // const testAccount34 = accounts[36];
    // const testAccount35 = accounts[37];
    // const testAccount36 = accounts[38];
    // const testAccount37 = accounts[39];
    // const testAccount38 = accounts[40];
    // const testAccount39 = accounts[41];
    // const testAccount40 = accounts[42];
    // const testAccount41 = accounts[43];
    // const testAccount42 = accounts[44];
    // const testAccount43 = accounts[45];
    // const testAccount44 = accounts[46];
    // const testAccount45 = accounts[47];
    // const testAccount46 = accounts[48];
    // const testAccount47 = accounts[49];
    // const testAccount48 = accounts[50];
    // const testAccount49 = accounts[51];
    // const testAccount50 = accounts[52];
    // const testAccount51 = accounts[53];
    // const testAccount52 = accounts[54];
    // const testAccount53 = accounts[55];
    // const testAccount54 = accounts[56];
    // const testAccount55 = accounts[57];
    // const testAccount56 = accounts[58];
    // const testAccount57 = accounts[59];
    // const testAccount58 = accounts[60];
    // const testAccount59 = accounts[61];
    // const testAccount60 = accounts[62];
    // const testAccount61 = accounts[63];
    // const testAccount62 = accounts[64];
    // const testAccount63 = accounts[65];
    // const testAccount64 = accounts[66];
    // const testAccount65 = accounts[67];
    // const testAccount66 = accounts[68];
    // const testAccount67 = accounts[69];
    // const testAccount68 = accounts[70];
    // const testAccount69 = accounts[71];
    // const testAccount70 = accounts[72];
    // const testAccount71 = accounts[73];
    // const testAccount72 = accounts[74];
    // const testAccount73 = accounts[75];
    // const testAccount74 = accounts[76];
    // const testAccount75 = accounts[77];
    // const testAccount76 = accounts[78];
    // const testAccount77 = accounts[79];
    // const testAccount78 = accounts[80];
    // const testAccount79 = accounts[81];
    // const testAccount80 = accounts[82];
    // const testAccount81 = accounts[83];
    // const testAccount82 = accounts[84];
    // const testAccount83 = accounts[85];
    // const testAccount84 = accounts[86];
    // const testAccount85 = accounts[87];
    // const testAccount86 = accounts[88];
    // const testAccount87 = accounts[89];
    // const testAccount88 = accounts[90];
    // const testAccount89 = accounts[91];
    // const testAccount90 = accounts[92];
    // const testAccount91 = accounts[93];
    // const testAccount92 = accounts[94];
    // const testAccount93 = accounts[95];
    // const testAccount94 = accounts[96];
    // const testAccount95 = accounts[97];
    // const testAccount96 = accounts[98];
    // const testAccount97 = accounts[99];
    // const testAccount98 = accounts[100];
    // const testAccount99 = accounts[101];
    // const testAccount100 = accounts[102];
    // const testAccount101 = accounts[103];
    // const testAccount102 = accounts[104];
    // const testAccount103 = accounts[105];
    // const testAccount104 = accounts[106];
    // const testAccount105 = accounts[107];
    // const testAccount106 = accounts[108];
    // const testAccount107 = accounts[109];
    // const testAccount108 = accounts[110];
    // const testAccount109 = accounts[111];
    // const testAccount110 = accounts[112];
    // const testAccount111 = accounts[113];
    // const testAccount112 = accounts[114];
    // const testAccount113 = accounts[115];
    // const testAccount114 = accounts[116];
    // const testAccount115 = accounts[117];
    // const testAccount116 = accounts[118];
    // const testAccount117 = accounts[119];
    // const testAccount118 = accounts[120];
    // const testAccount119 = accounts[121];
    // const testAccount120 = accounts[122];
    // const testAccount121 = accounts[123];
    // const testAccount122 = accounts[124];
    // const testAccount123 = accounts[125];
    // const testAccount124 = accounts[126];
    // const testAccount125 = accounts[127];
    // const testAccount126 = accounts[128];
    // const testAccount127 = accounts[129];
    // const testAccount128 = accounts[130];
    // const testAccount129 = accounts[131];
    // const testAccount130 = accounts[132];
    // const testAccount131 = accounts[133];
    // const testAccount132 = accounts[134];
    // const testAccount133 = accounts[135];
    // const testAccount134 = accounts[136];
    // const testAccount135 = accounts[137];
    // const testAccount136 = accounts[138];
    // const testAccount137 = accounts[139];
    // const testAccount138 = accounts[140];
    // const testAccount139 = accounts[141];
    // const testAccount140 = accounts[142];
    // const testAccount141 = accounts[143];
    // const testAccount142 = accounts[144];
    // const testAccount143 = accounts[145];
    // const testAccount144 = accounts[146];
    // const testAccount145 = accounts[147];
    // const testAccount146 = accounts[148];
    // const testAccount147 = accounts[149];
    // const testAccount148 = accounts[150];
    // const testAccount149 = accounts[151];
    // const testAccount150 = accounts[152];
    // const testAccount151 = accounts[153];
    // const testAccount152 = accounts[154];
    // const testAccount153 = accounts[155];
    // const testAccount154 = accounts[156];
    // const testAccount155 = accounts[157];
    // const testAccount156 = accounts[158];
    // const testAccount157 = accounts[159];
    // const testAccount158 = accounts[160];
    // const testAccount159 = accounts[161];
    // const testAccount160 = accounts[162];
    // const testAccount161 = accounts[163];
    // const testAccount162 = accounts[164];
    // const testAccount163 = accounts[165];
    // const testAccount164 = accounts[166];
    // const testAccount165 = accounts[167];
    // const testAccount166 = accounts[168];
    // const testAccount167 = accounts[169];
    // const testAccount168 = accounts[170];
    // const testAccount169 = accounts[171];
    // const testAccount170 = accounts[172];
    // const testAccount171 = accounts[173];
    // const testAccount172 = accounts[174];
    // const testAccount173 = accounts[175];
    // const testAccount174 = accounts[176];
    // const testAccount175 = accounts[177];
    // const testAccount176 = accounts[178];
    // const testAccount177 = accounts[179];
    // const testAccount178 = accounts[180];
    // const testAccount179 = accounts[181];
    // const testAccount180 = accounts[182];
    // const testAccount181 = accounts[183];
    // const testAccount182 = accounts[184];
    // const testAccount183 = accounts[185];
    // const testAccount184 = accounts[186];
    // const testAccount185 = accounts[187];
    // const testAccount186 = accounts[188];
    // const testAccount187 = accounts[189];
    // const testAccount188 = accounts[190];
    // const testAccount189 = accounts[191];
    // const testAccount190 = accounts[192];
    // const testAccount191 = accounts[193];
    // const testAccount192 = accounts[194];
    // const testAccount193 = accounts[195];
    // const testAccount194 = accounts[196];
    // const testAccount195 = accounts[197];


    var decimals = 1e18

    var reffernal1 = "45000000000000000000"



    before(async function () {
        tokenBinstance = await tokenB.new();
        BTTinstance = await BTT.new(1, owner1, owner2, tokenBinstance.address);

    });
    describe("[Testcase 1 : check if the smart contract has been created as set in the variables]", () => {
        it("1.1. Is the Owner Address the same as set in the variable?", async function () {
            expect(await BTTinstance.owner()).equal(owner1);
            expect(await BTTinstance.owner2()).equal(owner2);
        });
        it("1.2. Is the Current  ID is 2 the same as set in the variable?", async function () {
            expect(Number(await BTTinstance.currentId())).equal(2);
        });
        it("1.3. Is the Token Level1 is 1, Token Level2 is 2, Token Level3 is 4 and Token Level4 is 8 the same as set in the variable?", async function () {
            // expect(Number(await BTTinstance.tokenAmount(1))).equal(1000000000000000000);
            // expect(Number(await BTTinstance.tokenAmount(2))).equal(2000000000000000000);
            // expect(Number(await BTTinstance.tokenAmount(3))).equal(4000000000000000000);
            // expect(Number(await BTTinstance.tokenAmount(4))).equal(8000000000000000000);

            await tokenBinstance.transfer(BTTinstance.address, "100000000000000000000000000000000000", { from: owner1 })

        });
    })


    describe("[Testcase 2 : check if the Join Function in BTT MLM Contract features implemented work as intended]", () => {
        describe("", () => {
            const reffer = owner1;
            const refferID = 1;

            const user = testAccount1;
            const userID = 2;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            it("2.1.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

                var userdetails = await BTTinstance.users(user)
                expect(Number(userdetails.id)).equal(userID)
                expect(Number(userdetails.level)).equal(level)
                expect(Number(userdetails.levelCount)).equal(0)
                expect(Number(userdetails.cycle)).equal(0)
                expect(Number(userdetails.levelEarned)).equal(0)



            })

        })

        describe("", () => {
            const reffer = testAccount1;
            const refferID = 2;

            const user = testAccount2;
            const userID = 3;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)

            it("2.2.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount1;
            const refferID = 2;

            const user = testAccount3;
            const userID = 4;
            const amount = "360000000000000000000"
            const level = 1
            var refferComission;

            var ownerCommission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)



            it("2.3.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " Reffer Commission " + Number(refferComission / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeRefferbalance = await web3.eth.getBalance(reffer)

                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

                var afterRefferbalance = await web3.eth.getBalance(reffer)
                expect((Number(afterRefferbalance / decimals)).toFixed(0)).equal((Number(beforeRefferbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount2;
            const refferID = 3;

            const user = testAccount4;
            const userID = 5;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)

            it("2.4.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount2;
            const refferID = 3;

            const user = testAccount5;
            const userID = 6;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)

            it("2.5.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount3;
            const refferID = 4;

            const user = testAccount6;
            const userID = 7;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)

            it("2.6.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount3;
            const refferID = 4;

            const user = testAccount7;
            const userID = 8;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)



            it("2.7.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount4;
            const refferID = 5;

            const user = testAccount8;
            const userID = 9;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            var refferComission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)



            it("2.8.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount4;
            const refferID = 5;

            const user = testAccount9;
            const userID = 10;
            const amount = "360000000000000000000"
            const level = 1
            var ownerCommission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)


            it("2.9.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount5;
            const refferID = 6;

            const user = testAccount10;
            const userID = 11;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            var refferComission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)



            it("2.10.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount5;
            const refferID = 6;

            const user = testAccount11;
            const userID = 12;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)



            it("2.11.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount6;
            const refferID = 7;

            const user = testAccount12;
            const userID = 13;
            const amount = "360000000000000000000"
            const level = 1
            var ownerCommission;
            var refferComission;
            ownerCommission = ((Number(amount)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            console.log("ownerCommission1", Number(ownerCommission1 / decimals))
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)



            it("2.12.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                console.log("beforeOwner1Commissionbalance", Number(beforeOwner1Commissionbalance / decimals))
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                console.log("afterOwner1Commissionbalance", Number(afterOwner1Commissionbalance / decimals))
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount6;
            const refferID = 7;

            const user = testAccount13;
            const userID = 14;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000)) * 16) / 100

            var ownerCommission3;
            ownerCommission3 = ((Number(amount)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission3)

            refferComission = (Number(amount) - Number(ownerCommission3)) * 2
            refferComission = Number(refferComission) - Number(530000000000000000000)


            it("2.13.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount7;
            const refferID = 8;

            const user = testAccount14;
            const userID = 15;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            var refferComission;
            ownerCommission = (Number(amount) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)



            it("2.14.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

            })

        })

        describe("", () => {
            const reffer = testAccount7;
            const refferID = 8;

            const user = testAccount15;
            const userID = 16;
            const amount = "360000000000000000000"
            const level = 1

            var ownerCommission;
            var refferComission;
            ownerCommission = ((Number(amount) + Number(530000000000000000000) + Number(1065000000000000000000)) * 16) / 100

            var ownerCommission1 = (Number(ownerCommission) * 75) / 100
            var ownerCommission2 = (Number(ownerCommission) * 25) / 100

            var finalAmount = Number(amount) - Number(ownerCommission)

            var ownerCommission3 = (Number(530000000000000000000) * 16) / 100
            refferComission = (Number(530000000000000000000) - Number(ownerCommission3)) * 4
            refferComission = Number(refferComission) - Number(1065000000000000000000)


            it("2.15.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " Final " + Number(finalAmount / decimals) + " Reffer Commsission " + Number(refferComission / decimals) + " and User ID is " + userID + "?", async function () {
                var beforeUserbalance = await web3.eth.getBalance(user)
                var beforeTest1balance = await web3.eth.getBalance(testAccount1)
                console.log("beforeTest1balance", Number(beforeTest1balance / decimals))

                var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

                await BTTinstance.join(refferID, { from: user, value: amount })

                var afterTest1balance = await web3.eth.getBalance(testAccount1)
                console.log("afterTest1balance", Number(afterTest1balance / decimals))

                var afterUserbalance = await web3.eth.getBalance(user)
                expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

                var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
                expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

                var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
                expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

                var afterTest1balance = await web3.eth.getBalance(testAccount1)
                console.log("afterTest1balance", Number(afterTest1balance / decimals))
                expect((Number(afterTest1balance / decimals)).toFixed(0)).equal((Number(beforeTest1balance / decimals) + Number(refferComission / decimals)).toFixed(0))


            })

        })

        //     describe("", () => {
        //         const reffer = owner1;
        //         const refferID = 1;
        //         const refferLevel = 2

        //         const user = testAccount2;
        //         const userID = 3;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)

        //         it("2.2.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)


        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(0)



        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount1;
        //         const refferID = 2;

        //         const user = testAccount3;
        //         const userID = 4;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 1
        //         refferComission = Number(refferComission) - Number(0)


        //         it("2.3.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(level)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(refferComission))




        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount1;
        //         const refferID = 2;
        //         const refferLevel = 2

        //         const user = testAccount4;
        //         const userID = 5;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)


        //         it("2.4.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(0))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount2;
        //         const refferID = 3;
        //         const refferLevel = 1

        //         const user = testAccount5;
        //         const userID = 6;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 1
        //         refferComission = Number(refferComission) - Number(0)


        //         it("2.5.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             // expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(refferComission))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount2;
        //         const refferID = 3;
        //         const refferLevel = 2

        //         const user = testAccount6;
        //         const userID = 7;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)


        //         it("2.6.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(0))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount3;
        //         const refferID = 1;
        //         const refferLevel = 1

        //         const user = testAccount7;
        //         const userID = 8;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 1
        //         refferComission = Number(refferComission) - Number(0)


        //         it("2.7.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             //expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(4)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(refferComission))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount3;
        //         const refferID = 4;
        //         const refferLevel = 2

        //         const user = testAccount8;
        //         const userID = 9;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)


        //         it("2.8.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(0))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount4;
        //         const refferID = 5;
        //         const refferLevel = 1

        //         const user = testAccount9;
        //         const userID = 10;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 1
        //         refferComission = Number(refferComission) - Number(0)


        //         it("2.9.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             // expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(refferComission))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount4;
        //         const refferID = 5;
        //         const refferLevel = 2

        //         const user = testAccount10;
        //         const userID = 11;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)


        //         it("2.10.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(0))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount5;
        //         const refferID = 6;
        //         const refferLevel = 1

        //         const user = testAccount11;
        //         const userID = 12;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 1
        //         refferComission = Number(refferComission) - Number(0)


        //         it("2.11.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             //expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(refferComission))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount5;
        //         const refferID = 6;
        //         const refferLevel = 2

        //         const user = testAccount12;
        //         const userID = 13;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)


        //         it("2.12.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(0))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount6;
        //         const refferID = 7;
        //         const refferLevel = 1

        //         const user = testAccount13;
        //         const userID = 14;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 1
        //         refferComission = Number(refferComission) - Number(0)


        //         it("2.13.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             //  expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(refferComission))


        //         })

        //     })

        //     describe("", () => {
        //         const reffer = testAccount6;
        //         const refferID = 7;
        //         const refferLevel = 2

        //         const user = testAccount14;
        //         const userID = 15;
        //         const amount = "360000000000000000000"
        //         const level = 1

        //         var ownerCommission;
        //         var refferComission;
        //         ownerCommission = (Number(amount) * 16) / 100

        //         var ownerCommission1 = (Number(ownerCommission) * 75) / 100
        //         var ownerCommission2 = (Number(ownerCommission) * 25) / 100

        //         refferComission = (Number(amount) - Number(ownerCommission)) * 2
        //         refferComission = Number(refferComission) - Number(reffernal1)


        //         it("2.14.If Check the User Join Function in BTT MLM Reffer ID is " + refferID + " and User Amount is " + Number(amount / decimals) + " and return values Total Owner Commission Amount is " + Number(ownerCommission / decimals) + " and User ID is " + userID + "?", async function () {
        //             var beforeUserbalance = await web3.eth.getBalance(user)
        //             var beforeOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             var beforeOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             var beforerefferCommissionbalance = await web3.eth.getBalance(reffer)

        //             await BTTinstance.join(refferID, { from: user, value: amount })

        //             var afterUserbalance = await web3.eth.getBalance(user)
        //             expect((Number(afterUserbalance / decimals)).toFixed(0)).equal((Number(beforeUserbalance / decimals) - Number(amount / decimals)).toFixed(0))

        //             var afterOwner1Commissionbalance = await web3.eth.getBalance(owner1)
        //             //   expect((Number(afterOwner1Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner1Commissionbalance / decimals) + Number(ownerCommission1 / decimals)).toFixed(0))

        //             var afterOwner2Commissionbalance = await web3.eth.getBalance(owner2)
        //             expect((Number(afterOwner2Commissionbalance / decimals)).toFixed(0)).equal((Number(beforeOwner2Commissionbalance / decimals) + Number(ownerCommission2 / decimals)).toFixed(0))

        //             var afterrefferCommissionbalance = await web3.eth.getBalance(reffer)
        //             expect((Number(afterrefferCommissionbalance / decimals)).toFixed(0)).equal((Number(beforerefferCommissionbalance / decimals) + Number(refferComission / decimals)).toFixed(0))

        //             var userdetails = await BTTinstance.users(user)
        //             expect(Number(userdetails.id)).equal(userID)
        //             expect(Number(userdetails.level)).equal(level)
        //             expect(Number(userdetails.levelCount)).equal(0)
        //             expect(Number(userdetails.cycle)).equal(0)
        //             expect(Number(userdetails.levelEarned)).equal(0)

        //             var refferdetails = await BTTinstance.users(reffer)
        //             expect(Number(refferdetails.id)).equal(refferID)
        //             expect(Number(refferdetails.level)).equal(refferLevel)
        //             expect(Number(refferdetails.levelCount)).equal(0)
        //             expect(Number(refferdetails.cycle)).equal(0)
        //             expect(Number(refferdetails.levelEarned)).equal(Number(0))


        //         })

        //     })

    })
})