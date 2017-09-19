import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products:Product[]=[
  new Product(1, "第一个商品", 1.99, 3.5, "这是我在初步了解angular4时写的代码",["电子产品", "一起设备"]),
  new Product(2, "第二个商品", 2.99, 2.5, "这是我在初步了解angular4时写的代码",["电子产品", "一起设备"]),
  new Product(3, "第三个商品", 3.99, 4.5, "这是我在初步了解angular4时写的代码",["电子产品", "一起设备"]),
  new Product(4, "第四个商品", 4.99, 3.5, "这是我在初步了解angular4时写的代码",["电子产品", "一起设备"]),
  new Product(5, "第五个商品", 5.99, 4.5, "这是我在初步了解angular4时写的代码",["电子产品", "印鉴设备"]),
  new Product(6, "第六个商品", 6.99, 1.5, "这是我在初步了解angular4时写的代码",["电子产品", "一设备"])
];

  private comments:Comment[]=[
     new Comment(1,1,"2017-09-18 10:54:36","张三",3,"看起来挺好"),
    new Comment(2,1,"2017-09-18 11:54:36","离三",4,"哈哈来挺好"),
    new Comment(3,2,"2017-09-18 10:54:36","网三",2,"吃来挺好"),
    new Comment(4,2,"2017-09-18 13:54:36","张行",4,"回咯就起来挺好")
  ]

  constructor() { }
  getProducts():Product[]{
     return this.products
  }
  getProduct(id:number):Product{
    return this.products.find((product)=>product.id==id);
  }
  getCommentsForProductId(id:number):Comment[]{
       return this.comments.filter((comment:Comment)=>comment.productId==id)
  }
}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

export class Comment{
  constructor(
      public id:number,
      public productId:number,
      public timestamp:string,
      public uesr:string,
      public rating:number,
      public content:string
  ){

  }
}
