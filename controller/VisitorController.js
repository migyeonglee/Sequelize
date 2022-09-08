// const Visitor = require("../model/Visitor");
// {변수} : 변수만 가져오겠다. (변수의 키에 해당하는 것만)
const { Visitor } = require("../model");

/*^
const model = require("../model")
model = {
    "sequelize": sequelize,
    "Sequelize" : Sequelize,
    "Visitor" : Visiter
}
model.Visitor;
*/

exports.get_visitors = (req, res) => {
    // findAll() : select * from visitor 를 실행 (promise로 되어있음)
    Visitor.findAll().then((result) => {
        console.log("result : ", result);
        // Visitor.get_visitors(function(result) {
        // console.log("result : ", result);
        console.log("index");
        res.render("index", { data: result });
        // });
    });
    // select
}

exports.post_comment = (req, res) => {
    // Visitor.insert(req.body.name, req.body.comment, function(result) {
    // insert into visitor (name, comment) values(req.body.name, req.body.comment)
    var data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.create(data).then((result) => {
        console.log(result);
        res.send({ id: result.id });
    })
    console.log(req.body);
    // });
}
exports.get_visitor = (req, res) => {
    // findOne = limit 1 : 배열 하나만 
    // select name,comment from visitor where id = req.query.id limit 1 
    Visitor.findOne({
        attributes: ['id', 'name', 'comment'],
        where: { id: req.query.id }
    }).then((result) => {
        console.log("result : ", result);
        res.send({ result: result });
    });
    // Visitor.get_visitor(req.query.id, function(result) {
    // })
}

exports.patch_comment = (req, res) => {
    // Visitor.update(req.body, function(result) {
    // update visitor set name=req.body.name, comment=req.body.comment where id = req.body.id
    //딕셔너리 형태
    var data = {
        name: req.body.name,
        comment: req.body.comment
    }
    Visitor.update(data, {
        where: { id: req.body.id }
    }).then((result) => {

        console.log(result);
        res.send("수정 성공");
    })
}

exports.delete_comment = (req, res) => {
    // delete from visitor where id = req.body.id
    Visitor.destroy({
        where: { id: req.body.id }
    }).then((result) => {

        console.log(result);
        res.send("삭제 성공");

    });
    // Visitor.delete(req.body.id, function(result) {
    //             // });
}