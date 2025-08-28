import os from 'node:os'
console.log(os.cpus().length)
console.log(os.totalmem()/(1024 ** 3))
console.log(os.freemem()/(1024 ** 2))
console.log(os.uptime()/60**2)
console.log(os.hostname())
console.log(os.homedir())