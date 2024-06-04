import React, { useState } from "react"
import { TextField, Button } from "@mui/material"

const Submission = () => {
  const [conversation, setConversation] = useState("")
  const [question, setQuestion] = useState("")
  const [responses, setResponses] = useState([])

  const handleSubmit = () => {
    // Submit conversation logic
    setResponses([
      ...responses,
      {
        id: Date.now(),
        userId: "1",
        response: question,
        timestamp: new Date().toISOString(),
        likes: [],
      },
    ])
    setConversation("")
    setQuestion("")
  }

  const handleLike = (responseId) => {
    // Handle liking a response
    setResponses(
      responses.map((resp) =>
        resp.id === responseId
          ? {
              ...resp,
              likes: [
                ...resp.likes,
                { userId: "1", timestamp: new Date().toISOString() },
              ],
            }
          : resp
      )
    )
  }

  return (
    <div className="p-4">
      <TextField
        label="Conversation"
        value={conversation}
        onChange={(e) => setConversation(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <div className="mt-4">
        {responses.map((response) => (
          <div key={response.id} className="p-2 bg-gray-100 rounded mb-2">
            <p>{response.response}</p>
            <Button size="small" onClick={() => handleLike(response.id)}>
              Like ({response.likes.length})
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Submission
