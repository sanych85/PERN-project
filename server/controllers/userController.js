const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const { User, Basket } = require('../models/models');
const jwt = require('jsonwebtoken');


const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

const registration = async (req, res, next) => {
  console.log('in registration');
  const { email, password, role } = req.body;
  if (!email || !password) {
    return next(ApiError.badRequest('Invalid email or password'));
  }
  console.log(email, 'email');
  console.log(password, 'password');
  const candidate = await User.findOne({ where: { email } });
  console.log('candidate, ', candidate);
  if (candidate) {
    return next(ApiError.badRequest('User with this email is alreay exist'));
  }
  const hashPassword = await bcrypt.hash(password, 5);
  const user = await User.create({ email, role, password: hashPassword });
  const basket = await Basket.create({ userId: user.id });
  const token = generateJwt(user.id, email, role);
  return res.json({ token });
};

const login = async (req, res, next) => {
  console.log("we are in login now")
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
//   console.log(user, "user")
  if (!user) {
    return next(ApiError.internal(' user with name id not exist'));
  }
  console.log(password, "password")
  console.log(user.password, "user.password")
  let comparePassword =  bcrypt.compareSync(password, user.password);
  console.log(comparePassword, "comparePassword")
  if (!comparePassword) {
    return next(ApiError.internal('Something went wrong'));
  }
  const token = generateJwt(user.id, email, user.role);
  return res.json({token});
};
const check = async (req, res, next) => {

    const token = generateJwt(req.user.id, req.email, req.user.role);
    return res.json({token})
};

module.exports = { registration, login, check };
