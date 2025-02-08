import React, { useState } from 'react'

const CreateChallenge: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(0)
  const [objectives, setObjectives] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit the challenge to the server
    fetch('/api/challenges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        duration,
        objectives,
        categories,
        imageUrl,
      }),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Duration (days)"
        onChange={(e) => setDuration(Number(e.target.value))}
        className="border p-2"
      />
      {/* Add inputs for objectives, categories, and imageUrl */}
      <button type="submit" className="bg-blue-500 text-white p-2">
        Create Challenge
      </button>
    </form>
  )
}

export default CreateChallenge
