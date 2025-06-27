const { deleteItem, filterByPrice,filterByCategory,deleteFromCards } = require("../seller/helper");

describe("test delete function", () => {
  test("function must return array after delete 1 item", () => {
    const actual = deleteItem(
      [
        { id: 12134, name: "phoen" },
        { id: 413, name: "phoen" },
        { id: 43141, name: "phoen" },
      ],
      413
    );
    const expected = [
      { id: 12134, name: "phoen" },
      { id: 43141, name: "phoen" },
    ];

    expect(actual).toEqual(expected);
  })
})

describe("testing cart delete function" ,() => {
  test("make sure of length of array" , () => {
    const actual = deleteFromCards([{id:12134,name:'phoen'},{id:413,name:'phoen'},{id:43141,name:'phoen'}] ,413)
    const expected = [{id:12134,name:'phoen'},{id:43141,name:'phoen'}]
    expect(actual).toEqual(expected);



  })

})


describe('testing the filter by category function',()=>{
  test('function must return array after filtering it by each item category',()=>{
    const actual = filterByCategory([
      {
        id: 11,
        name: 'iphone mobile',
        price: 800,
        url: 'https://www.example.com',
        description: 'lorem',
        cata: 'iphone',
      },
      {
        id: 22,
        name: 'samsung mobile',
        price: 400,
        url: 'https://www.example.com',
        description: 'lorem',
        cata: 'samsung',
      },
    ], 'iphone');

    const expected = [
      {
        id: 11,
        name: 'iphone mobile',
        price: 800,
        url: 'https://www.example.com',
        description: 'lorem',
        cata: 'iphone'
      }
    ]

    
    expect(actual).toEqual(expected);
    
  })
})

 
describe("filter by price function", () => {
  test("get products by selected price", () => {
    const actual = filterByPrice(
      [
        { name: "samsung", price: "200" },
        { name: "iphone", price: "300" },
      ],
      "200"
    );
    const expected = [{ name: "samsung", price: "200" }];

    expect(actual).toEqual(expected);
  });
});
