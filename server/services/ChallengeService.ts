import { Challenge } from '../models/Challenge'

export class ChallengeService {
  private challenges: Challenge[] = [] // In-memory storage for challenges

  public createChallenge(challengeData: Omit<Challenge, 'id'>): Challenge {
    const newChallenge: Challenge = {
      id: this.challenges.length + 1,
      ...challengeData,
    }
    this.challenges.push(newChallenge)
    return newChallenge
  }

  public getChallenges(): Challenge[] {
    return this.challenges
  }
}
