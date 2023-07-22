import express from "express";
import { Post_Email } from "../controller/Email";

const routeEmail = express.Router();

routeEmail.post("/email", Post_Email);

export default routeEmail;
