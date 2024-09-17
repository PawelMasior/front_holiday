import verifyRecaptcha from "../../src/recaptcha/verifyRecaptcha";
import {getScopeByValue} from "../../components/const/contactScope";
import {firestoreAutoId, validateEmail} from "../../utils";
import firebase_app from "../../src/firebase/config";
import contactTemplate from "../../components/const/contactTemplate";
import {getFirestore, doc, setDoc} from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function ContactAPI(req, res) {
  const {title, scope, name, message, email, token} = req.body;
  const scopeType = getScopeByValue(scope);
  if (!(await verifyRecaptcha(token))) return res.status(400).json({message: 'recaptchaError'});
  if (!(title.length >= 3 && title.length <= 200)) return res.status(400).json({message: 'titleLengthError'})
  if (!(name.length >= 3 && name.length <= 100)) return res.status(400).json({message: 'nameLengthError'})
  if (!(email.length >= 3 && email.length <= 200)) return res.status(400).json({message: 'emailLengthError'})
  if (!(message.length >= 10 && message.length <= 2000)) return res.status(400).json({message: 'messageLengthError'})
  if (!validateEmail(email)) return res.status(400).json({message: 'emailError'})
  if (!scopeType) return res.status(400).json({message: 'scopeError'})
  try {
    await setDoc(doc(db, "mail", firestoreAutoId()), contactTemplate(email, title, name, scopeType.name, message));
  } catch (e) {
    console.error(e)
    return res.status(400).json({message: 'unexpectedError'})
  }

  return res.status(200).json({message: 'success'})
}
