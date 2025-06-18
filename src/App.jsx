import { useEffect } from "react"
import WebApp from "@twa-dev/sdk"
import { Button } from "@/components/ui/button"

function App() {
  useEffect(() => {
    WebApp.ready()
    WebApp.expand()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">Bine ai venit 👋</h1>
      <p>Acesta este MVP-ul nostru Telegram WebApp</p>
      <Button onClick={() => alert("Funcționează!")}>
        Apasă aici
      </Button>
    </div>
  )
}

export default App
