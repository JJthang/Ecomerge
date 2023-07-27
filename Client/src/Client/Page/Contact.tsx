import { useForm, SubmitHandler } from "react-hook-form";
import { usePost_EmailMutation } from "../../Redux/API/API";
import Footer from "../component/Shared_components/Footer";
import Nav from "../component/Shared_components/Nav";
import { useState } from "react";

type FormValues = {
    name: string;
    email: string;
    text: string;
  };
const Contact = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const [postEmail] = usePost_EmailMutation();
    const [text , setText] = useState<string>("")
    const {register, handleSubmit} = useForm<FormValues>();
    const handEmailSubmit : SubmitHandler<FormValues> = async (data) => {
        if (user) {
            data.text = text
            const Alert = await postEmail(data);
            alert(Alert.data.message)
        }else{
            alert(Alert.data.message)
        }
    }


  return <>
  <Nav />
  <div className="WrapConact">
    <div className="WrapNav">
        <div className="Nav_title"><h1>Conatct Us</h1></div>
        <div className="Nav_location">
            <a href="">Home</a><span>/</span><a href="">Products</a>
        </div>
    </div>
    <div className="Wrap_ctn">
        <div className="Contact_ctn">
            <div className="Introduce_ctn">
                <div className="Info_ctn">
                    <div className="label">
                        <h2>OUR OFFICES ARE LOCATED AT</h2>
                    </div>
                    <div className="Info_List">
                        <div className="England">
                            <div className="England_tt">
                                <div className="line"></div>
                               <h2>ENGLAND</h2>
                            </div>
                            <div className="England_ct">
                            <p>
                            45 Preston Rd, Morleyy Blue Road,
                            SK9 1FW, England
                            </p>
                            </div>
                        </div>
                        <div className="Scotland">
                         <div className="Scotland_tt">
                            <div className="line"></div>
                               <h2>SCOTLAND</h2>
                            </div>
                            <div className="Scotland_ct">
                            <p>
                            512, Preston Rd, Morleyy Blue Road,
                            SK9 1FW, Scotland
                            </p>
                            </div>
                        </div>
                        <div className="Ireland">
                            <div className="Ireland_tt">
                            <div className="line"></div>
                               <h2>NORTHERN IRELAND</h2>
                            </div>
                            <div className="Ireland_ct">
                            <p>
                            512, Preston Rd, Morleyy Blue Road,
                            SK9 1FW, Scotland
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Form_ctn">
                <div className="wrap_form">
                    <div className="form_title">
                        <div className="intro">
                            <div className="line"></div>
                               <h2>FELL FREE TO GET IN TOUGH</h2>
                        </div>
                        <div className="intro_text">
                            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                    <div className="form_container">
                        <form action="" onSubmit={handleSubmit(handEmailSubmit)} >
                            <div className="formName">
                                <label htmlFor="">Name :</label>
                                <input type="text" {...register("name")} />
                            </div>
                            <div className="formEmail">
                                <label htmlFor="">Email :</label>
                                <input type="email" {...register("email")}  />
                            </div>
                            <div className="formText">
                                <label htmlFor="">Message :</label>
                                <textarea onChange={(e) => setText(e.target.value)} name="" id="" cols={30} rows={10}></textarea>
                            </div>
                            <div className="formButton">
                                <button type="submit" >Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <Footer />
  </>
}
export default Contact;