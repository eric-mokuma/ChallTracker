import React from 'react'
import CreateChallenge from '../components/CreateChallenge'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Create a Challenge</h1>
      <CreateChallenge />
    </div>
  )
}

export default Home
