const run = (text) => {
    // BEGIN
    function takeLast(string, n) {
      if (n > string.length || string.length === 0) return null;
      return string.slice(string.length - n).split('').reverse().join('');
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;