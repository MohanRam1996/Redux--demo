//ACTION TYPE
export const ITEMVALUE = "ITEMVALUE";

// ACTION
export function sendDataAction(data) {
  return {
    type: ITEMVALUE,
    data: data,
  };
}

// ACTION CREATOR
export function sendDataToStore(dispatch, data) {
  //api call here and store that information inside the store
  dispatch(sendDataAction(data));
}
