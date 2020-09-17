const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

// CORS
app.use(cors())

// Body parser
app.use(express.json())

app.use('/api', require('./routes'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
