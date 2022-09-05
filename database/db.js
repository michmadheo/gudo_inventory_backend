const Pool = require('pg').Pool;

const pool = new Pool({
    connectionString: 'postgres://nvsxreqdvznhqw:50eccbb1919d58848f00e3a56e97569fe0eff55d03490fbe768fb644eb404c68@ec2-34-235-31-124.compute-1.amazonaws.com:5432/de7tg3stofbma1',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;