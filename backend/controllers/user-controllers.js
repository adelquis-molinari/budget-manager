import User from "../models/users.js"
import generateId from "../helpers/generateId.js"
import generateJWT from "../helpers/generateJWT.js"

const register = async (req, res) =>{

  const { email } = req.body
  const userEmail = await User.findOne({email})
  if (userEmail){
    const error = new Error("already registered user")
    return res.status(403).json({ message : error.message })
  }

  try {
    const user = new User(req.body)
    user.token = generateId()
    const storedUser = await user.save()
    res.json(storedUser)
  } catch (error) {
    console.log(error.message)
  }
}

const userAuthentication = async (req,res) => {
  const { email, password } = req.body
  const user = await User.findOne({email})
  if (!user) {
    const error = new Error('No user exists.')
    res.status(403).json({ message: error.message })
  }
  if (!user.confirm) {
    const error = new Error('Unconfirmed user.')
    return res.status(403).json({ message: error.message })
  }
  if(await user.checkPassword(password)){
    const { _id, name, email } = user
    res.json({
      _id,
      name,
      email,
      token: generateJWT(_id)
    })
  }else{
    const error = new Error('Incorrect password.')
    res.status(403).json({ message: error.message })
  }
}

export {
    register,
    userAuthentication
}