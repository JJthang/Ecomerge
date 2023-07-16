import CheckOut_Schame from "../Models/CheckOut";
import SchameCart from "../Models/Cart";

export const createCheckOut = async (req, res) => {
  try {
    const { id_user } = req.body;
    const data = await CheckOut_Schame.create(req.body);

    let Get_User = await SchameCart.findOne({ id_user: id_user });
    Get_User.List_Product = [];
    await Get_User.save();

    return res.status(200).json({
      message: "Successful order creation",
      data,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const Get_All_CheckOut = async (req, res) => {
  try {
    const data = await CheckOut_Schame.find();
    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
export const Get_CheckOut = async (req, res) => {
  try {
    const data = await CheckOut_Schame.findOne({ id_user: req.params.id });
    if (data) {
      return res.status(200).json({
        data,
      });
    } else {
      return res.status(404).json({
        message: "Not Found User",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
