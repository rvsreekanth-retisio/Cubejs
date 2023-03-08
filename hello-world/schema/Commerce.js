cube(`Commerce`, {
  sql: `SELECT * FROM public.commerce`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, productname]
    },
    grossrevenue:{
      type:`sum`,
      sql:  `${CUBE}."Revenue"`,
      format:  `currency`,
    },
    averageRevenue:{
      type:`avg`,
      sql: `${CUBE}."Revenue"`,
      format: `currency`,
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    revenue: {
      sql: `${CUBE}."Revenue"`,
      type: `number`,
      format: `percent`,
    },
    
    productname: {
      sql: `${CUBE}."ProductName"`,
      type: `string`,
      title: `Product Display Name`,
    },
    
    generatedat: {
      sql: `${CUBE}."generatedAt"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
