// @ts-nocheck

const osmoSender = require("./osmo-sender.ts");

const osmoSenderInst = new osmoSender.OsmoSender();
osmoSenderInst.signTransaction();

exports.default = {}
