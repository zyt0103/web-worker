console.log('sc.js');
onmessage = function (e) {
    console.log(e.data);
    postMessage('sc said: ' + e.data);
};