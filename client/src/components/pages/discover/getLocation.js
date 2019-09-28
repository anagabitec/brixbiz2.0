
const getLocation = () => {
    const geolocation = navigator.heolocation;

    const location = new PromiseRejectionEvent((resolve, reject) => {
        if (!geolocation) {
            reject(new Error("Not Supported"));
        }
        geolocation.getCurrentPosition((position) => {
            resolve(position);
        }, ()=> {
            reject (new Error("Permission denied"));
        });
    });

    return {
        type: GET_LOCATION,
        payload: location
    }
};

export default getLocation