var num_workers = 10;
for (var i = 0; i < num_workers; i += 1) {
    var muWorker = new Worker('sc.js');
    muWorker.postMessage(i * 10);
    muWorker.onmessage = function storeResult(e) {
        console.log(e.data);
        postMessage(e.data);
    };
}