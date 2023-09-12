const faunadb = require('faunadb');
const {COLLECTIONS} = require('./collectionNames.ts');

const FAUNA_DB_SECRET = process.env.FAUNA_DB_SECRET;

const DB_COLLECTIONS = Object.values(COLLECTIONS);

const client = new faunadb.Client({
    secret: FAUNA_DB_SECRET
});
const q = faunadb.query;


const setupDatabase = async () => {
    for (const collectionName of DB_COLLECTIONS) {
        const isCollection = await client.query(
            q.IsCollection(q.Collection(collectionName))
        );
        if (!isCollection) {
            await client.query(
                q.CreateCollection({name: collectionName})
            )
            console.log('Created collection', collectionName)
        }
        if (collectionName === COLLECTIONS.FORM_SUBMISSION) {
            
        }
    }
}


module.exports = {
    setupDatabase
};