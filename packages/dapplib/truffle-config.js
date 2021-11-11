require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food town rate stick hospital junior light army gauge'; 
let testAccounts = [
"0x540097b8c3098c8a618e3bc3eba5c077b8a2374c611c2e4162864f7e07ce7728",
"0x568af439c227151638504239644a781ca86ea3453be6a6d5f05e81ec5b537aa8",
"0x1cff297dc29bc7c8fd710fdd554b8edb41fb769dab34cfe807f18f31a2ef66cb",
"0x06bf1eaf44fbf230d6e73c925bfd32c452c282bd2c5f2d906cfb8550ddde058f",
"0x3a2461e1029a0835839419a8c5a597a9512baa9d20badadd21346bef1a66bd90",
"0xb0bee4559ffbc0609e83ed6e4ca99592c2894525a0e6084a46b8f6fa38539371",
"0x8055186ad1b0d646100df9882136e5471771190ef1f672c73d512b8d956b0a55",
"0x107b236c9fac6e7bf2b952f62b30503e9f17ec6a4a6781ed25105b3ac31e7c1b",
"0xbf596dc1cf8dde9f87cb0b7e6bc7516d632737f41f3b343d7166734956a28450",
"0x1a5531018767800188f3492e10b2e56a7c27591fbc3510b29565baba959f5722"
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

