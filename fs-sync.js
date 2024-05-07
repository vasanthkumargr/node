const {readFileSync,writeFileSync}= require('fs');

const first= readFileSync('./sub/test.txt','utf8');
const second= readFileSync('./sub/test2.txt','utf8');

console.log(first,second)

writeFileSync('./sub/result-synx.txt',`i am fine:${first},${second}`,{flag:'a'})