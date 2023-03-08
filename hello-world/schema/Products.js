cube(`Products`, {
  sql: `SELECT * FROM public."Products"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [productName]
    },
    grossrevenue: {
      type:`sum`,
      sql: `${CUBE}."Revenue"`
    }
  },
  
  dimensions: {
    revenue: {
      sql: `${CUBE}."Revenue"`,
      type: `string`
    },
    
    generated: {
      sql: `${CUBE}."Generated"`,
      type: `string`
    },
    
    productName: {
      sql: `product_name`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
