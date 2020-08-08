import { Resolver, InputType, Int, Field, Mutation, Arg, Query } from "type-graphql";
import { Product } from "../entity/Product";

@Resolver()
export class ProductResolver {

  @Mutation(() => Boolean)
  async createProduct (
    @Arg("name") name: string,
    @Arg("quantity", () => Int) quantity: number
  ) {
    await Product.insert({ name, quantity })
    return true
  }

  @Query(() => [Product])
  getProducts() {
    return Product.find()
  }
}