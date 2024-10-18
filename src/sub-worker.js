onmessage = function (e) {
  console.log("Sub Worker: Message received from parent worker");
  console.log("Worker: Posting message back to parent script");
  postMessage("Hiiii from the sub worker");
};
