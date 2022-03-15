import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.APIBaseURL}`,
  timeout: parseInt(`${process.env.requestTimeout || 0}`)
})

export {instance}
export {checkOrder, confirmationContactOrder} from "./order";