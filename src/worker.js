const subWorker = new Worker(new URL("sub-worker.js", import.meta.url));

subWorker.onmessage = function (e) {
  console.log("Message received from sub worker", e.data);
};

onmessage = function (e) {
  console.log("Worker: Message received from main script");
  console.log("Trying to post message to sub worker");

  subWorker.postMessage("Hello from the main worker");

  const result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage("Please write two numbers");
  } else {
    const workerResult = "Result: " + result;
    console.log("Worker: Posting message back to main script");
    postMessage(workerResult);
  }
};
