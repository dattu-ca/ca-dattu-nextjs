const faunadb = require('faunadb');
const {COLLECTIONS} = require('./collectionNames.ts');

const FAUNA_DB_SECRET = process.env.FAUNA_DB_SECRET;

const DB_COLLECTIONS = Object.values(COLLECTIONS);

const client = new faunadb.Client({
    secret: FAUNA_DB_SECRET
});
const q = faunadb.query;


const setupDatabase = async () => {
    for (const dbName of DB_COLLECTIONS) {
        const isCollection = await client.query(
            q.IsCollection(q.Collection(dbName))
        );
        if (!isCollection) {
            await client.query(
                q.CreateCollection({name: dbName})
            )
            console.log('Created collection', dbName)
        }
    }
}


module.exports = {
    setupDatabase
};