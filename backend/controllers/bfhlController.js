const { processData, validateBase64File } = require("../utils/helper");

exports.handleGetRequest = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

exports.handlePostRequest = (req, res) => {
  try {
    const { data, file_b64 } = req.body;

    // Validate and process data
    const { numbers, alphabets, highestLowercase, isPrimeFound } =
      processData(data);

    // File validation (if provided)
    const fileResult = file_b64
      ? validateBase64File(file_b64)
      : { valid: false };

    res.status(200).json({
      is_success: true,
      user_id: "your_name_ddmmyyyy", // Replace with your details
      email: "your_email@example.com", // Replace with your email
      roll_number: "your_roll_number", // Replace with your roll number
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
      is_prime_found: isPrimeFound,
      file_valid: fileResult.valid,
      file_mime_type: fileResult.mimeType || null,
      file_size_kb: fileResult.sizeKB || null,
    });
  } catch (err) {
    res.status(400).json({ is_success: false, error: err.message });
  }
};
