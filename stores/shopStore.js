import { makeAutoObservable } from "mobx";

import instance from "./instance";

class ShopStore {
  shops = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchshop = async () => {
    try {
      let response = await instance.get("/shop");
      this.shops = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const shopInstens = new ShopStore();
shopInstens.fetchshop();

export default shopInstens;
