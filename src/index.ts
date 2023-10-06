import "reflect-metadata";
import { Foo } from "./decorators";


const appName = "ts-node-starter"
const SECRET_KEY = process.env.SECRET_KEY

console.log(`app started - ${appName}`)
console.log(SECRET_KEY)
new Foo()
