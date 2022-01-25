console.log("first task");
function second() {
  console.log("This is second function");
}
setTimeout(second, 0);
setTimeout(() => {
  console.log("This third function");
}, 0);
console.log("third task");
console.log("Final Task");
