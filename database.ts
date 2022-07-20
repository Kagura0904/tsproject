import { createPool } from 'mysql2/promise';

export async function connect() {
const connection = await createPool({
    host:'localhost',
    user:'root',
    password:'uiop7890',
    database:'timecard_db'
})
return connection;
}