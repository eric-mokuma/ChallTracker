import express from 'express'
import { ChallengeService } from '../services/ChallengeService'

const router = express.Router()
const challengeService = new ChallengeService()

// Create a new challenge
router.post('/', (req, res) => {
  const newChallenge = challengeService.createChallenge(req.body)
  res.status(201).json(newChallenge)
})

// Get all challenges
router.get('/', (req, res) => {
  const challenges = challengeService.getChallenges()
  res.json(challenges)
})

// ... Add more routes for updating, deleting, etc.

export default router
