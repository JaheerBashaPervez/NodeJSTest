const os = require("os");
const user = os.userInfo();
console.log(os.userInfo());

console.log(`The Sytemtem up time is ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
