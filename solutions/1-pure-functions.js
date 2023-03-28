// BEGIN
function isPrime (number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (Math.abs(number) % i == 0) {
            return false
        }
    }
    return true
}

const sayPrimeOrNot = (number) => {
    console.log(isPrime(number) ? 'yes' : 'no');
}

export default sayPrimeOrNot;
// END