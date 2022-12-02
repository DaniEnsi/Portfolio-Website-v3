import { Module, VuexModule, Mutation } from "vuex-module-decorators"

@Module({
  name: "shop",
  stateFactory: true,
  namespaced: true,
})
class Shop extends VuexModule {
  item2 = "error"
  price2 = "error"

  @Mutation
  setItem(item: string) {
    this.item2 = item
  }

  @Mutation
  setPrice(price:  string) {
    this.price2 = price
  }
}

export default Shop
