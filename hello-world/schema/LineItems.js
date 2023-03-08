cube(`LineItems`, {
  sql: `SELECT * FROM public.line_items`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },  
    quantity: {
      sql: `${CUBE}."QUANTITY"`,
      type: `sum`
    },
    totalPrice:{
      sql:`${CUBE}."PRICE"`,
      type:`sum`
    }
    
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
