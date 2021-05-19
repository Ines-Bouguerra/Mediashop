
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
            },
        }
        );

        return response;
    }

    async saveBrandData(name, slug, created_at, updated_at, image) {


        var response = await Axios.post(
            Config.brandApiURL,
            {
                name: name,
                slug: slug,
                created_at: created_at,
                updated_at: updated_at,
                image: image
            }, {
            headers: {

                "Content-Type": "application/json",
            },
        }
        );

        return response;
    }

    async fetchBrand() {

        var response = await Axios.get(Config.brandApiURL);
        return response;

    }


    async fetchBrandById(id) {

        var response = await Axios.get(Config.brandDetailApiURL + "" + id);

        return response;
    }

    async editBrandData(name, slug, created_at, updated_at, image, id) {


        var response = await Axios.put(
            Config.brandDetailApiURL + "" + id + "/",
            {
                name: name,
                slug: slug,
                created_at: created_at,
                updated_at: updated_at,
                image: image,
            }
        );

        return response;
    }
    async deleteBrand(id) {

        var response = await Axios.delete(Config.brandDetailApiURL + "" + id);

        return response;
    }

}

export default APIHandler;
