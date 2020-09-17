import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);


pool.get("getConnection").then(
    connetion=>{
        pool.get('releaseConnection').then(
            res=>{
                console.log(res);
            }
        )
    }
)


export default pool;