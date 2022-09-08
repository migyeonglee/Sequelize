// const sequelize = require("sequelize");
const Sequelize = require("Sequelize");
const config = require("../config/config.json")["devalopment"];

/*config = {
    "devalopment": {
        "host": "localhost",
        "database": "kdt_test",
        "username": "user",
        "password": "mi04090506!!",
        "dialect": "mysql"
    }

}*/
const db = {};
const sequelize = new Sequelize(
    // DB, user(name), pw, DB 정보
    config.database,
    config.username,
    config.password,
    config
);
// db = {"sequelize" : sequelize}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.payment = require("./Payment")(sequelize, Sequelize);
//////////////////////patment//////////////////////////
db.Visitor.hasMany(db.payment, {
    foreignkey: "user_ID",
    sourceKey: "ID",
    onDelete: "cascade"
});
db.payment.belongsTo(db.Visitor, {
    foreignkey: "user_ID",
    sourceKey: "ID",
    onDelete: "cascade"
});
///////////////////////////////////////////////////////
/*
db = {
    sequelize : sequelize,
    Sequelize : Sequelize,
    Visiter : require("./Visitor")(sequelize, Sequelize)
}
*/

module.exports = db