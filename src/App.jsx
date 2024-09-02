import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavProvider } from './components/Context'
import ChatPage from './pages/chat'
import LoginRegPage from './pages/login'

export default function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ChatPage />}></Route>
            <Route path="/loginOrRegister" element={<LoginRegPage />}></Route>
            <Route path="*" element={<h1>this page is page404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </NavProvider>
  )
}
