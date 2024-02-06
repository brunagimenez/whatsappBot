const validateNewClientFields = (req, res, next) => {
  const { name, phone, email } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (!phone) {
    return res.status(400).json({ message: '"phone" is required' });
  }

  const phoneRegex = /^\d{12,13}$/;
  if (!phoneRegex.test(phone)){
    return res.status(400).json({ message: '"phone" is not valid. Example:.5511954563224' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" is not valid. Example:.example@example.com' });
  }

  return next();
};


module.exports = validateNewClientFields;
