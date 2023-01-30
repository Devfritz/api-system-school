const Admin = require("../model/staff/Admin");
const { tryCatch } = require("../utils/tryCatch");

exports.getUser = tryCatch(async (req, res) => {
  const user = await Admin.findById({ _id: req.userAuth });

  if (user) {
    return res.status(200).json({
      isSuccess: true,
      user,
    });
  }

  if (!user) {
    throw new Error("User Not Exist");
  }
});
