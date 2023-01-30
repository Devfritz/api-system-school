const Admin = require("../../model/staff/Admin");
const generateToken = require("../../utils/generateToken");
const { tryCatch } = require("../../utils/tryCatch");

exports.register = tryCatch(async (req, res) => {
  const { name, email, password } = req.body;

  const isExist = await Admin.findOne({ email });

  if (isExist) {
    throw new Error("User Already Exist");
    // return res.status(401).json({
    //   isSuccess: false,
    //   message: "User Already Exist",
    // });
  }
  const newAdmin = await Admin.create({ name, email, password });

  return res.status(201).json({
    isSuccess: true,
    data: newAdmin,
  });
});

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please Provide email or password");
    }
    const user = await Admin.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        isSuccess: false,
        message: "Wrong Login Credentials",
      });
    }

    const isMatchPassword = await user.verifyPassword(password);
    if (!isMatchPassword) {
      return res.status(400).json({
        isSuccess: false,
        message: "Wrong Login Credentials",
      });
    }

    //   everything is ok

    const token = generateToken(user._id);

    return res.status(200).json({
      isSuccess: true,
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
