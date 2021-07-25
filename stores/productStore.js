import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProducts = async () => {
    try {
      const response = await instance.get("/product");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchCookies: ", error);
    }
  };

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);
}

const productInstance = new ProductStore();
productInstance.fetchProducts();

export default productInstance;
