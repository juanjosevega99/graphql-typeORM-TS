import { Resolver, InputType, Int, Field, Mutation, Arg, Query } from "type-graphql";
import { Product } from "../entity/Product";

@InputType()
class ProductInput {
  @Field()
  name!: string
  
  @Field(() => Int)
  quantity!: number
}

@Resolver()
export class ProductResolver {

  @Mutation(() => Product)
  async createProduct (
    // @Arg("name") name: string,
    // @Arg("quantity", () => Int) quantity: number
    @Arg("variables", () => ProductInput) variables: ProductInput
  ) {
    // await Product.insert({ name, quantity })
    const newProduct = Product.create(variables)
    return await newProduct.save()
  }

  @Query(() => [Product])
  getProducts() {
    return Product.find()
  }
}