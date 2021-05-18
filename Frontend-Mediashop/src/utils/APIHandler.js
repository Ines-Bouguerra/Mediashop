
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");

class APIHandler {


    async saveContactData(name, email, phone_number, message) {
        

        var response = await Axios.post(
            Config.contactApiURL,
            {
                name: name,
                email: email,
                phone_number: phone_number,
                message: message,
            }, {
                headers: {
                  
                  "Content-Type": "application/json",
                },}
        );

        return response;
    }


}

export default APIHandler;
