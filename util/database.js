const MongoClient = require("mongodb").MongoClient;
let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(
        ""
    )
        .then((client) => {
            console.log("ok");
            _db = client.db();
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "no database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
