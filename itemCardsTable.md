# ItemCards
  - This table is generated once and never changes
  - Stores all the individual item card data
  - This table will be used when item card events are implemented
  - Player will get one when dice roll lands player on city
  - 12 kinds of cards with uneven distribution

  ```javascript
  {
    itemsId: Number,
    name: String,
    type: String,
    description: String,
    function: {},
  }
  ```
  - function: will contain a function to run upon item card selection, still have to figure this one out 
  