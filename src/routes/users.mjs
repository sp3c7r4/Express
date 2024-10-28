import { Router } from "express";
import { body, validationResult, matchedData } from "express-validator";

const datas = [
  {"name": "Spectra", "age": 20, "hobbies": "coding", "password": "spectra123"},
  {"name": "Gee", "age": 30, "hobbies": "Painting", "password": "gee123"},
  {"name": "Idan", "age": 10, "hobbies": "Games", "password": "idan123"},
]

//Router Initialization
const router = Router();

router.post('/users', (req,res) => {
  const { body: {
    username, password
  }} = req;
  console.log(req.session.id)
  const findUser = datas.find((data) => data.name === username)
  if (!findUser || findUser.password !== password) {
    return res.status(401).send("Bad credentials")
  }
  req.session.visited = findUser
  res.status(200).send("Hello user")
})

router.post('/users/auth', (req,res) => {
  req.sessionStore.get(req.session.id, (err, data) => {
    console.log(data)
  })
    return req.session.visited ? res.status(200).send(req.session.visited) 
    : res.status(401).send({"msg": "Login to continue"}) 
})

router.post('/cart', (request, response) => {
  if (!request.session.visited) return response.status(401).send("Please Login...");
  const { session: {cart} } = request
  const {body: item } = request
  if (cart) {
    cart.push(item)
  } else {
    request.session.cart = [item]
  }
  response.status(200).send(item)
})
router.get('/cart', (request, response) => {
  if (!request.session.visited) return response.status(401).send("Please Login...");
  response.status(200).send(request.session.cart)
})
export default router;