import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { db } from '../firebase'
import { NavContext } from './Context'

export default function Login() {
  const navigate = useNavigate()
  const { regType, setRegType } = useContext(NavContext)
  const emailInput = useRef()
  const passInput = useRef()
  let user = []

  const status = () => {
    setRegType(!regType)
    console.log(regType)
  }

  const checkLogin = async (em, pa) => {
    const q = query(
      collection(db, 'users'),
      where('email', '==', em.toLowerCase()),
      where('password', '==', pa)
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      user.push({ ...doc.data(), user_id: doc.id })
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    const email = emailInput.current.value
    const pass = passInput.current.value

    if (email && pass && email.trim() && pass.trim()) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (emailRegex.test(email)) {
        await checkLogin(email, pass)

        if (user.length > 0) {
          localStorage.setItem('user', JSON.stringify(user))
          navigate('/')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'you have been loged in',
            showConfirmButton: false,
            timer: 1500,
          })
          console.log(user)
        } else {
          Swal.fire({
            icon: 'error',
            title: 'User not found or incorrect credentials',
            showConfirmButton: false,
            timer: 2500,
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'You Entered Invalid Data',
          showConfirmButton: false,
          timer: 2500,
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid error (empty email or password)',
        showConfirmButton: false,
        timer: 2500,
      })
    }
  }
  useEffect(() => {
    let loginStatuts = JSON.parse(localStorage.getItem('user'))
    loginStatuts ? navigate('/') : null
    console.log(loginStatuts)
  }, [])
  return (
    <div className="d-flex flex-column gap-4 p-5">
      <div className="d-flex flex-column gap-2 text-start">
        <h1>Welcome Back</h1>
        <h5>Please Enter Your Account Details</h5>
      </div>
      <form className="d-flex flex-column gap-3" onSubmit={handleLogin}>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="btn btn-outline-info text-start p-2"
            type="email"
            id="email"
            ref={emailInput}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="btn btn-outline-info text-start p-2"
            type="password"
            id="password"
            ref={passInput}
          />
        </div>
        <Link onClick={status} className=" text-decoration-none text-white">
          You do not have an account?
        </Link>
        <div className="p-2">
          <button className="btn btn-info px-4">Login</button>
        </div>
      </form>
      <div className="d-flex flex-column gap-2">
        <h5>My Profiles</h5>
        <div className="d-flex flex-row gap-3 ">
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
      <ToastContainer />
    </div>
  )
}
