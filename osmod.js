const os=require("os")
const user =os.userInfo()
console.log(user);
console.log(`uptime is ${os.uptime()}`)
const sysOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(sysOS);