const RECAPTCHA_MINIMUM_SCORE = 0.5;
const verifyRecaptcha = async token => {
  const secretKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    token;

  const response = await fetch(verificationUrl);
  const data = await response.json();
  return data.success && data.score >= RECAPTCHA_MINIMUM_SCORE;
};
export default verifyRecaptcha;
