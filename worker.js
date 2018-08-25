// onmessage = function (e) {
//     console.log(e.data);
//     postMessage('worker said: ' + e.data);
// };


self.addEventListener('message', function (e) {
    console.log(e.data);
    self.postMessage('worker said: ' + e.data);
});



//使用worker进行复杂运算

// var i=0;
// function timedCount(){
//     for(var j=0,sum=0;j<100;j++){
//         for(var i=0;i<100000000;i++){
//             sum+=i;
//         }
//         console.log(sum);
//     }
//     // 调用 postMessage 向主线程发送消息
//     postMessage(sum);
// }
//
// postMessage("Before computing,"+new Date());
// timedCount();
// postMessage("After computing,"+new Date());



//引入脚本
// self.importScripts("sc.js");



