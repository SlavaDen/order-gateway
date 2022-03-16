import {instance} from "./"

const checkOrder = async (orderGuid: string)=>{
  console.log(orderGuid)
  const response = await instance.get(`${process.env.APICheckOrderURL}/${orderGuid}`);
  return response;
}

const confirmationContactOrder = async (orderGuid: string, value: string)=>{
  const response = await instance.post(`${process.env.APIConfirmationContactOrderURL}/${orderGuid}`, {
    value
  });
  return response;
}

export {checkOrder, confirmationContactOrder}