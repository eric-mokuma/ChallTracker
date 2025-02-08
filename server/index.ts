import express from 'express'
import bodyParser from 'body-parser'
import challengeRoutes from './routes/challengeRoutes'
import { ChallengeService } from './services/ChallengeService'

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/api/challenges', challengeRoutes)

// Initialize ChallengeService
const challengeService = new ChallengeService()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
