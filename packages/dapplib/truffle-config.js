require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food pledge recipe ranch clutch install muscle army gasp'; 
let testAccounts = [
"0xc87a54237212cb83256d6f7361ce8f02707bcefb45606984d14fae15a0aff42e",
"0x07f461abd77fa60344bd6ebe4e896ab40fbdcd8538a71bd201ecc32e25703dd0",
"0x3dfb98fe019d056cf34065ab7c386ea84827dc467a26b3f7d561012d034a307e",
"0xbf69a30a312aa9d920bd54fe4c24e1eca6065d88a202c5f64507b4b7d39a08c9",
"0x59ef8c9fa7d634061d9029c1e6200580231806d032716ecbfb98ae1f2eb09edf",
"0xd94cb4a97482e63dd590f230d5256039ee38df2bebb70c32e911843cb35ca4c4",
"0xa978d4f73cdb6a07b65177575cccf0db820655f59b911a7ac2f8a4d7536f8bfb",
"0x8018376f6980a45d8652edeccc85fcbf719f3c505b51a0007979f8588e5faa0a",
"0x2ee902d363fc083e683db749ac0f556942c7673414bdca4fcba24f31dcdb1277",
"0xa37a2287b70b7d30e4248c9219e04ce82d98326b76eae8fcfc6d230f533e6f23"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

