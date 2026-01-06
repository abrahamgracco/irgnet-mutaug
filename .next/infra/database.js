import {client} from 'pg';

async function query (query.object) {
    const client = new client ( {
        host:'localhost',
        port: 5432, 
        user: 'postgres',
        database: 'postgres',
        password: 'local_password',
    }

    );
    await client.connect ();
    const result = await client.query (queryObject);
    await client.end (); 
    return result; 


} 
export default {
    query: query;

}