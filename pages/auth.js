import React, { useState } from "react"
import Link from 'next/link';
import styles from '/styles/AuthPage.module.css'


const Auth = () => {
  let [authMode, setAuthMode] = useState("signin")
  let [email, setEmail] = useState("")
  
  const changeAuthMode = (event) => {
    console.log(event.target.value)
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }
  
  const onSubmit = () => {
    console.log(email);
  }
  
  if (authMode === "signin") {
    return (
        <div className={styles.auth_form_container}>
          <form className={styles.auth_form}>
            <div className={styles.auth_form_content}>
              <h3 className={styles.auth_form_title}>Logowanie</h3>
              <div>
                <input className={styles.auth_form_input} onBlur={emailHandler}
                       type="email"
                       placeholder="Login"
                       minLength={6}
                />
              </div>
              <div>
                <input className={styles.auth_form_input}
                    type="password"
                    placeholder="Hasło"
                    minLength={6}
                />
              </div>
              {/* <div className={styles.auth_form_button}> */}
              <div className='p-5 uppercase bg-t_gold hover:text-t_dark hover:bg-t_grey hover:text-black w-200 rounded-lg text-center text-white text-xl'>
                <button onClick={onSubmit} type="submit" className="btn btn-primary">
                  <Link href="/">Zaloguj się</Link>
                </button>                
              </div>
              <div className={styles.message}>
                Zarejestruj się{" "}
                <span onClick={changeAuthMode}><a>Rejestracja</a></span>
              </div>
            </div>
          </form>
        </div>
    )
  }
  else {
    return (
        <div className={styles.auth_form_container}>
          <form className={styles.auth_form}>
            <div className={styles.auth_form_content}>
              <h3 className={styles.auth_form_title}>Rejestracja</h3>
              <div>
                <input
                    className={styles.auth_form_input}
                    type="email"
                    placeholder="nazwa użytkownika"
                />
              </div>
              <div>
                <input
                    className={styles.auth_form_input}
                    type="email"
                    placeholder="Email"
                />
              </div>
              <div>
                <input
                    className={styles.auth_form_input}
                    type="password"
                    placeholder="Hasło"
                />
              </div>
              <div className='p-5 uppercase bg-t_gold hover:text-t_dark hover:bg-t_grey hover:text-black w-200 rounded-lg text-center text-white text-xl'>
                <button onClick={onSubmit} type="submit" className="btn btn-primary">
                  <Link href="/">Utwórz konto</Link>
                </button>                
              </div>
              <div className={styles.message}>
                Masz już konto?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
              <a href="">Zaloguj się</a>
            </span>
              </div>
              <p className={styles.message}>
                Zapomniałeś <a href="#">hasło?</a>
              </p>
            </div>
          </form>
        </div>
    )
  }
}

export default Auth