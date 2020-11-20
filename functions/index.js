const functions = require('firebase-functions');
let btclib = require('./btclib');

exports.btcaddress = functions.https.onRequest(async (req, res) => {
    res.send(btclib.btcaddress(1))
  })