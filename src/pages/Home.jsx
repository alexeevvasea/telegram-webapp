import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [clients, setClients] = useState([])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleAddClient = () => {
    if (!name || !phone) return

    setClients([...clients, { name, phone }])
    setName("")
    setPhone("")
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Add Client</h1>

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className="border p-2 rounded"
        />
        <Button onClick={handleAddClient}>Save</Button>
      </div>

      {clients.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-medium mb-2">Clients:</h2>
          <ul className="space-y-1">
            {clients.map((client, index) => (
              <li key={index} className="border p-2 rounded">
                {client.name} — {client.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
