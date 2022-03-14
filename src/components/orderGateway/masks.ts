
import IMask from "imask";

  export const currencyMask = (event) =>{
    console.log(event.target.value);
    if(event.target.value !== "1"){
      return {
        type: "required",
        message: "Введите"
      }
    }
  }
  