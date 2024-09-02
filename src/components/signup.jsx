import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { db } from '../firebase'
import { NavContext } from './Context'

export default function Signup() {
  const { regType, setRegType } = useContext(NavContext)
  const [showPassReg, setShowPassReg] = useState(false)
  const emailInput = useRef()
  const passInput = useRef()
  const nameInput = useRef()
  const users = []

  const handleRegister = async (event) => {
    event.preventDefault()
    const mail = emailInput.current.value
    const pass = passInput.current.value
    const name = nameInput.current.value

    if (mail && pass && name && mail.trim() && pass.trim() && name.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

      if (emailRegex.test(mail)) {
        if (passRegex.test(pass)) {
          const q = query(collection(db, 'users'))
          const querySnapshot = await getDocs(q)

          querySnapshot.forEach((doc) => {
            users.push(doc.data())
          })

          const emailExist = users.some(
            (el) => el.email.toLowerCase() === mail.toLowerCase()
          )

          if (!emailExist) {
            await setDoc(doc(db, 'users', users.length.toString()), {
              email: mail,
              password: pass,
              user_name: name,
              user_status: false,
            })

            Swal.fire({
              icon: 'success',
              title: 'Welcome To Our Community',
              text: 'You Have Been Registered',
              footer: 'Now You Can Login',
            })

            setRegType(!regType)
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'This Email Already Exists. Please Enter a New Email',
            })
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            html: `Password should contain:<br> - A small letter<br> - A capital letter<br> - A special character<br> - A number<br> - Must be at least 8 characters`,
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address.',
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required.',
      })
    }
  }

  const checkPassRegex = () => {
    const password = passInput.current.value
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    setShowPassReg(!passRegex.test(password))
  }

  useEffect(() => {}, [])

  return (
    <div className="d-flex flex-column gap-4 p-5">
      <div className="d-flex flex-column gap-2 text-start">
        <h1>Welcome Back</h1>
        <h5>Please Enter Your Account Details</h5>
      </div>
      <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-2">
          <label htmlFor="email">Email</label>
          <input
            ref={emailInput}
            className="btn btn-outline-info text-start p-2"
            type="email"
            id="email"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="name">Name</label>
          <input
            ref={nameInput}
            className="btn btn-outline-info text-start p-2"
            type="text"
            id="name"
          />
        </div>

        <div className="d-flex flex-column gap-2">
          <label htmlFor="password">Password</label>
          <input
            onBlur={checkPassRegex}
            ref={passInput}
            className="btn btn-outline-info text-start p-2"
            type="password"
            id="password"
          />

          {showPassReg && (
            <div className="d-flex flex-column text-danger mb-0">
              <p>Password should contain:</p>
              <p>- A small letter</p>
              <p>- A capital letter</p>
              <p>- A special character</p>
              <p>- A number</p>
              <p>- Must be at least 8 characters</p>
            </div>
          )}
        </div>
        <Link
          onClick={() => setRegType(!regType)}
          className="text-decoration-none text-white"
        >
          You Already Have an Account
        </Link>
        <div className="p-2">
          <button className="btn btn-info px-4" type="submit">
            Signup
          </button>
        </div>
      </form>
      <div className="d-flex flex-column gap-2">
        <h5>My Profiles</h5>
        <div className="d-flex flex-row gap-3">
          <a
            href="https://web.facebook.com/profile.php?id=100094006208154"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="p-1" icon={faFacebook} />
          </a>
          <a
            href="https://www.linkedin.com/in/amr-samy-bb946a27b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Amrwebprog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  )
}
