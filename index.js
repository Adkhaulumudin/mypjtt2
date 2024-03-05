// Helper function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  // Example of usage:
  const primeNumber = 17;
  if (isPrime(primeNumber)) {
    console.log(`${primeNumber} is a prime number.`);
  } else {
    console.log(`${primeNumber} is not a prime number.`);
  }
  