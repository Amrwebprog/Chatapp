import { useContext } from 'react'
import { NavContext } from '../../components/Context'
import Login from '../../components/login'
import Signup from '../../components/signup'
import './index.scss'
export default function LoginRegPage() {
  const { regType, setRegType } = useContext(NavContext)
  return (
    <>
      <div className="col-12 main position-relative d-flex justify-content-center align-items-center">
        <div className="col-10  content d-flex flex-row ">
          <div
            className={
              !regType
                ? `col-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center mybgimg `
                : `col-12 col-md-6 col-lg-6 d-flex justify-content-center  align-items-center bg-secondary bg-gradient`
            }
          >
            {regType ? <Signup></Signup> : null}
          </div>
          <div
            className={
              regType
                ? `col-12 col-md-6 col-lg-6 d-flex justify-content-center  align-items-center mybgimg-tow `
                : `col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center bg-secondary bg-gradient`
            }
          >
            {!regType ? <Login></Login> : null}
          </div>
        </div>
        <div className="overlay col-12 h-100 position-fixed"></div>
      </div>
    </>
  )
}
