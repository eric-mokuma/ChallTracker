export interface Challenge {
  id: number
  title: string
  description: string
  duration: number
  objectives: string[]
  categories: string[]
  imageUrl?: string
}
