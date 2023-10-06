
 function Field() {
  return (target: any, key: string) => {
    const fields = Reflect.getMetadata('fields', target) || [];
    if (!fields.includes(key)) {
      fields.push(key)
    }
    Reflect.defineMetadata('fields', fields, target)
    console.log(fields)
  }
}


export class Foo {
  @Field()
  foo: string

  @Field()
  bar: string
}

