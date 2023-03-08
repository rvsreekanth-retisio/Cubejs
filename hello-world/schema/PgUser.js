cube(`PgUser`, {
  sql: `SELECT * FROM pg_catalog.pg_user`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usesysid, usecreatedb, usename]
    }
  },
  
  dimensions: {
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    usecreatedb: {
      sql: `usecreatedb`,
      type: `string`
    },
    
    usesuper: {
      sql: `usesuper`,
      type: `string`
    },
    
    userepl: {
      sql: `userepl`,
      type: `string`
    },
    
    usebypassrls: {
      sql: `usebypassrls`,
      type: `string`
    },
    
    passwd: {
      sql: `passwd`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    useconfig: {
      sql: `useconfig`,
      type: `string`
    },
    
    valuntil: {
      sql: `valuntil`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
