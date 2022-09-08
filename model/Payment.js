const Payment = (Sequelize, DataTypes) => {
    // Sequelize : model/index.js 의 sequelize 객체
    // dataType : model/index.js 의 Sequelize 객체
    const model = Sequelize.define(
        "visitor", {
            id: {
                // id int not null  primary key auto_imcrememt
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false

            },
            comment: {
                // comment modiumtext
                type: DataTypes.TEXT("medium")

            },
        }, {
            tableName: "visitor",
            // insert into visitor values (~~~~~~~~~~)
            // table name fixed
            freezeTableName: true,
            // table에 어떤 값 insert 시 modified(수정)/등록시간이 찍힘
            timestamps: false
        }
        /* payment에 대한 컬럼 정의 
         "payment", {
           pay :{
             type : DataTypes.INTEGER,
             allowNull : false
           }  
         }
         */
    );
    return model;
}

module.exports = Visitor;