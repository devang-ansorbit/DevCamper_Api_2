// @description :  Get all getBootCamps
// @ route : GET /api/v1/bootCamps

exports.getBootCamp = (req, res, next) => {
  res.status(400).json({ success: true, message: "Hey ! Show all Mountains" });
};

exports.createBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Create Some ${req.params.id} on Mountains`,
  });
};

exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Upadate Mountains ${req.params.id}` });
};

exports.deleteBootCamp = (req, res, next) => {
     res
       .status(200)
       .json({
         success: true,
         message: `Oops ! Sorry, Delete Mountains ${req.params.id}`,
       });
};
