// module.exports = (err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: err.message });
//   };
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
};