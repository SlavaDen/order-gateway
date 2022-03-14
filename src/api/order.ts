import {instance} from "./"

const checkOrder = async ({orderGuid})=>{
  const response = await instance.get(`check-order/${orderGuid}`);
  return response;
}

const confirmationContactOrder = async ({typeConfirm, value})=>{
  const response = await instance.post(`confirmation-contact`, {
    typeConfirm,
    value
  });
  return response;
}

export {checkOrder, confirmationContactOrder}