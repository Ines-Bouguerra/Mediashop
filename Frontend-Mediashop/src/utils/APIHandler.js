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
      },
      {
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
        image: image,
      },
      {
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
    var response = await Axios.put(Config.brandDetailApiURL + "" + id + "/", {
      name: name,
      slug: slug,
      created_at: created_at,
      updated_at: updated_at,
      image: image,
    });

    return response;
  }
  async deleteBrand(id) {
    var response = await Axios.delete(Config.brandDetailApiURL + "" + id);

    return response;
  }

  async savePostData(subject, comment, rate, product, user) {
    var response = await Axios.post(
      Config.postApiURL,
      {
        subject: subject,
        comment: comment,
        rate: rate,
        product: product,
        user: user,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  }

  async fetchPost() {
    var response = await Axios.get(Config.postApiURL);
    return response;
  }

  async fetchPostById(id) {
    var response = await Axios.get(Config.postDetailApiURL + "" + id);

    return response;
  }

  async editPostData(subject, comment, rate, product, user, id) {
    var response = await Axios.put(Config.brandDetailApiURL + "" + id + "/", {
      subject: subject,
      comment: comment,
      rate: rate,
      product: product,
      user: user,
    });

    return response;
  }
  async deletePost(id) {
    var response = await Axios.delete(Config.postDetailApiURL + "" + id);

    return response;
  }

  async savewishlistData(product, user, created_at) {
    var response = await Axios.post(
      Config.brandApiURL,
      {
        product: product,
        user: user,
        created_at: created_at,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  }

  async fetchWishlist() {
    var response = await Axios.get(Config.wishlistApiURL);
    return response;
  }
  async deletewishlist(id) {
    var response = await Axios.delete(Config.wishlistDetailApiURL + "" + id);

    return response;
  }

  async fetchSubCategory() {
    var response = await Axios.get(Config.subCategoryApiURL);
    return response;
  }
}

export default APIHandler;
