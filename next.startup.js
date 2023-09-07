const faunadb = require('faunadb');

const FAUNA_DB_SECRET = process.env.FAUNA_DB_SECRET;

const DB_COLLECTIONS = [
    'formValuesCollection',
];

const client = new faunadb.Client({
    secret: FAUNA_DB_SECRET
});
const q = faunadb.query;


const createCollections = async () => {
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
    createCollections
};