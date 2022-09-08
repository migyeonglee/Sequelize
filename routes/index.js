const express = require("express");
const visitor = require("../controller/VisitorController");
const router = express.Router();

// 헷갈리면 모두 post 써도 됌 (기능 분리 어려울 시)
router.get("/", visitor.get_visitors); // get : 조회 시 사용 (select) (read) 
router.post("/write", visitor.post_comment); // post :  새 정보를 insert 할 때 (create)
router.get("/get", visitor.get_visitor);
router.patch("/edit", visitor.patch_comment); // patch :  데이터의 일부분을 update(수정) 할때 (update)
router.delete("/delete", visitor.delete_comment); // delete :  삭제 (delete) 
// put : (insert) (update)
module.exports = router;


// sequelize : JS 구문을 알아서 SQL로 변환
// DB 작업을 쉽게 할 수 있도록 도와주는 ORW 라이브러리 중 하나
// ORW : Object Relation Mapping - 관계형 DB를 mapping 해주는 것