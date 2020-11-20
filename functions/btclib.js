const bip32 = require('bip32');
const bjs = require('bitcoinjs-lib');

const BITCOIN_testnet = {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x045f1cf6,
        private: 0x045f18bc,
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xEF,
  };
  
  const xpub ='vpub5UWoPfZqhivvN1jLcenJ433gpg4xNP5XAF22PT9frXWNSmWwgLL5RxXzByvtsri728N7t38yFVmbnz7mjjdcMdDfsoW7xqvUAjPp7Hx468H';
  
  exports.btcaddress = function (id) {
    return bjs.payments.p2wpkh({
        pubkey: bip32.fromBase58(xpub, BITCOIN_testnet).derive(0).derive(id).publicKey,
        network: BITCOIN_testnet,
    }).address;
  }

