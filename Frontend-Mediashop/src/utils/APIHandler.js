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

  async saveBrandData(name, slug, image) {
    var response = await Axios.post(
      Config.brandApiURL,
      {
        name: name,
        slug: slug,
        // created_at: created_at,
        // updated_at: updated_at,
        image: image,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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

  async editBrandData(name, slug, updated_at, image, id) {
    var response = await Axios.put(
      Config.brandDetailApiURL + "" + id + "/",
      {
        name: name,
        slug: slug,
        updated_at: updated_at,
        image: image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

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

  async fetchAdminContact() {
    var response = await Axios.get(Config.adminContactApiURL);
    return response;
  }
  async saveProductForAdminData(
    category,
    description,
    domaine,
    name,
    reference,
    discount,
    url,
    timestamp,
    brand,
    priceString,
    retailer,
    marketplace,
    price,
    currency,
    sub_category,
    country,
    short_description,
    old_price,
    image,
    marketplaceId
  ) {
    var response = await Axios.post(
      Config.adminProductApiURL,
      {
        category: category,
        description: description,
        domaine: domaine,
        name: name,
        reference: reference,
        discount: discount,
        url: url,
        timestamp: timestamp,
        brand: brand,
        priceString: priceString,
        retailer: retailer,
        marketplace: marketplace,
        price: price,
        currency: currency,
        sub_category: sub_category,
        country: country,
        short_description: short_description,
        old_price: old_price,
        image: image,
        marketplaceId: marketplaceId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  }

  async fetchProductForAdminById(id) {
    var response = await Axios.get(Config.adminProductDetailApiURL + "" + id);

    return response;
  }

  async editProductForAdminData(
    category,
    description,
    domaine,
    name,
    reference,
    discount,
    url,
    timestamp,
    brand,
    priceString,
    retailer,
    marketplace,
    price,
    currency,
    sub_category,
    country,
    short_description,
    old_price,
    image,
    marketplaceId,
    id
  ) {
    var response = await Axios.put(
      Config.adminProductDetailApiURL + "" + id + "/",
      {
        category: category,
        description: description,
        domaine: domaine,
        name: name,
        reference: reference,
        discount: discount,
        url: url,
        timestamp: timestamp,
        brand: brand,
        priceString: priceString,
        retailer: retailer,
        marketplace: marketplace,
        price: price,
        currency: currency,
        sub_category: sub_category,
        country: country,
        short_description: short_description,
        old_price: old_price,
        image: image,
        marketplaceId: marketplaceId,
      }
    );

    return response;
  }
  async deleteProductForAdmin(id) {
    var response = await Axios.delete(
      Config.adminProductDetailApiURL + "" + id
    );

    return response;
  }
}

export default APIHandler;
