import { validateEmail } from "../Validate/Email";
import nodemailer from "nodemailer";

export const Post_Email = (req, res) => {
  try {
    const { error } = validateEmail.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const { name, email, text } = req.body;
    console.log(name, email, text);

    // Tạo một transporter cho việc gửi email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "thangpdph@gmail.com",
        pass: "kxildsqiswhebytt",
      },
    });

    // Đối tượng cấu hình email
    const mailOptions = {
      from: `${email}`, // Địa chỉ email gửi
      to: "thangpdph@gmail.com", // Địa chỉ email người nhận
      subject: "Phản ánh từ khách hàng", // Tiêu đề email
      //   text: ``, // Nội dung email dạng text
      html: `
      <b>Name : </b> <span>${name}</span>
      <br>
      <b>Email : </b> <span>${email}</span>
      <br>
      <b>Title : </b> <span>${text}</span>
      `, // Nội dung email dạng HTML
    };
    // Gửi email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred:", error.message);
      } else {
        console.log("Email sent successfully!");
        console.log("Message ID:", info.messageId);
      }
    });
    return res.status(200).json({
      message: "Send Email Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
