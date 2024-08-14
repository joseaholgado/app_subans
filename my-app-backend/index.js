// console.log("Hello via Bun!")
import express from 'express'
import { supabase } from './supabase_client'
import bcrypt from 'bcrypt'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/users', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.json(data)
})

app.post('/users', async (req, res) => {
  const { id_range, name, email, password } = req.body

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)

    const { data, error } = await supabase
      .from('users')
      .insert([{ id_range, name, email, password: hashedPassword }])

      if (error) {
        console.error('Supabase Error:', error) // Log the error for debugging
        return res.status(500).json({ error: error.message });
      }

    res.status(201).json(data)
  } catch (error) {
    console.error('Server Error:', error)
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
  console.log(`Tabla usuarios en http://localhost:${port}/users`)
})
