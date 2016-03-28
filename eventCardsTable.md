# EventCards
  - This table is generated once and never changes
  - Stores all the individual event card data
  - This table will be used when event card events are implemented
  - Player will get one when dice roll lands player on event spot
  - 8 kinds of cards with uneven distribution
  
  ```javascript
  {
    eventsId: Number,
    name: String,
    type: String,
    description: String,
    function: {},
  }
  ```
  - function: will contain a function to run upon event card selection, still have to figure this one out 
