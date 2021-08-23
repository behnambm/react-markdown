import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const inputRef = useRef('')
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className='main'>
      <section className='left'>
        <textarea
          className='input'
          ref={inputRef}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </section>

      <section className='right'>
        <div className='display-markdown'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </section>
    </div>
  )
}

export default App
