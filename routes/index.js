const router = require('express').Router()

// Mock User
const user = {
  id: 1,
  username: 'nottdev',
  email: 'nottdev@gmail.com',
  name: 'Nott Dev',
}

router.get('/user', (req, res) => {
  return res.json({
    data: {
      user,
    },
  })
})

router.post('/login', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body
  // query db.
  console.log('username: ', username === 'nottdev')
  console.log('password: ', password === '123456')
  if (username === 'nottdev' && password === '123456') {
    // let d = new Date()
    // let minutes = 5
    // let expireDate = new Date(d.getTime() + minutes * 60000)
    return res.json({
      data: {
        user,
        token: new Date().getTime(),
      },
    })
  } else {
    return res.status(401).json({
      message: 'Invalid Password',
    })
  }
})

module.exports = router
