cube(`Ecommerce`, {
  sql: `SELECT * FROM public.ecommerce`,
  
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
    }
   
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."ID"`,
      type: `number`,
      primaryKey: true
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    createdAt: {
      sql: `${CUBE}."CREATED_AT"`,
      type: `time`
    },
    
    completedAt: {
      sql: `${CUBE}."COMPLETED_AT"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
