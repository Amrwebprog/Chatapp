import { NavProvider } from './components/Context'
import ChatPage from './pages/chat'

export default function App() {
  return (
    <NavProvider>
      <ChatPage></ChatPage>
    </NavProvider>
  )
}
