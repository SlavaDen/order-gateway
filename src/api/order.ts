import {instance} from "./"

const checkOrder = async ({orderGuid})=>{
  const response = await instance.get(`${process.env.APICheckOrderURL}/${orderGuid}`);
  return response;
}

const confirmationContactOrder = async ({typeConfirm, value})=>{
  const response = await instance.post(`${process.env.APIConfirmationContactOrderURL}`, {
    typeConfirm,
    value
  });
  return response;
}

export {checkOrder, confirmationContactOrder}