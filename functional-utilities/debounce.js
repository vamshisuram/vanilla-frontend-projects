
const testfn = () => {
  console.log('test');
}


const debounce = (fn, delay) => {
  let timeoutId;
  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}


const dfn = debounce(testfn, 300);

dfn();
dfn();
dfn();
dfn();
dfn();
dfn();
// console logs - only one 'test'

