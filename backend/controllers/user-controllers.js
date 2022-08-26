import User from "../models/users.js"

const register = async (req, res) =>{

  const { email } = req.body
  const userEmail = await User.findOne({email})
  if (userEmail){
    const error = new Error("already registered user")
    return res.status(404).json({ message : error.message })
  }

  try {
    const user = new User(req.body)
    const storedUser = await user.save()
    res.json(storedUser)
  } catch (error) {
    console.log(error.message)
  }
}


export {
    register
}