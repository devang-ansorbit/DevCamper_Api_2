const Bootcamp = require("../models/Bootcamps");
// @description :  Get all getBootCamps
// @ route : GET /api/v1/bootCamps

exports.getBootCamp = async (req, res, next) => {
  try {
    const bootCamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      data: bootCamps,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.createBootCamp = async (req, res, next) => {
  try {
    const bootCamps = await Bootcamp.create(req.body);
    res.status(200).json({
      success: true,
      data: bootCamps,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateBootCamp = async (req, res, next) => {
  try {
    const bootCamps = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ success: true, data: bootCamps });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBootCamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Oops ! Sorry, Delete Mountains ${req.params.id}`,
  });
};
