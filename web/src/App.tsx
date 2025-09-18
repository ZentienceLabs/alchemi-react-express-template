import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import './App.css'

interface User {
  id: number
  name: string
  email: string
}

function App() {
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  const fetchMessage = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/hello')
      setMessage(response.data.message)
    } catch (error) {
      setMessage('Failed to connect to API')
      console.error('Error fetching message:', error)
    }
    setLoading(false)
  }

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/users')
      setUsers(response.data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMessage()
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Alchemi React + Express Template
          </h1>
          <p className="text-muted-foreground">
            A modern full-stack monorepo with React, Express, TypeScript, and shadcn/ui
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Frontend (React)</CardTitle>
              <CardDescription>
                Modern React app with Vite, TypeScript, Tailwind CSS, and shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Vite for lightning-fast development</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ Tailwind CSS for utility-first styling</li>
                <li>✅ shadcn/ui for beautiful components</li>
                <li>✅ React Router for navigation</li>
                <li>✅ Axios for API communication</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend (Express)</CardTitle>
              <CardDescription>
                Express.js server with TypeScript and modern middleware
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✅ Express.js framework</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ CORS enabled for development</li>
                <li>✅ JSON parsing middleware</li>
                <li>✅ Hot reload with nodemon</li>
                <li>✅ Environment configuration</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>API Connection Test</CardTitle>
              <CardDescription>
                Testing the connection between React and Express
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-mono">
                  {loading ? 'Loading...' : message || 'No message yet'}
                </p>
              </div>
              <Button onClick={fetchMessage} disabled={loading}>
                {loading ? 'Fetching...' : 'Test API Connection'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Users Data</CardTitle>
              <CardDescription>
                Sample data from the Express API
              </CardDescription>
            </CardHeader>
            <CardContent>
              {users.length > 0 ? (
                <div className="space-y-2">
                  {users.map((user) => (
                    <div key={user.id} className="p-3 bg-muted rounded-lg">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No users data available</p>
              )}
              <Button onClick={fetchUsers} disabled={loading} className="mt-4">
                Refresh Users
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App