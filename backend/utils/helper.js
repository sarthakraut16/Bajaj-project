const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  exports.processData = (data) => {
    const numbers = [];
    const alphabets = [];
    let highestLowercase = null;
  
    data.forEach((item) => {
      if (!isNaN(item)) {
        numbers.push(parseInt(item));
      } else if (isNaN(item) && /^[a-zA-Z]$/.test(item)) {
        alphabets.push(item);
        if (/[a-z]/.test(item) && (!highestLowercase || item > highestLowercase)) {
          highestLowercase = item;
        }
      }
    });
  
    const isPrimeFound = numbers.some((num) => isPrime(num));
    return { numbers, alphabets, highestLowercase, isPrimeFound };
  };
  
  exports.validateBase64File = (file_b64) => {
    try {
      const buffer = Buffer.from(file_b64, 'base64');
      const sizeKB = buffer.length / 1024;
      return { valid: true, sizeKB, mimeType: "application/octet-stream" }; // Example MIME type
    } catch {
      return { valid: false };
    }
  };
  