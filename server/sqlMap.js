// sqlMap.js  sql语句
const sqlMap = {
	sqlMap_document: {
		add: 'insert into document(name,describes,https,icon,lastdate,type) values (?,?,?,?,?,?)',
		show: 'select * from document',
		show_type: 'select * from document where type = ?',
		del: 'delete from document where id = ?',
		update: 'update document set name = ?,describes = ?,https = ?,icon = ?,lastdate = ? where id = ?',
	},
	sqlMap_user: {
		getuser: 'select * from user',
		setuser: '',
	}
}

// const sqlMap_document = {
//     Stu: {
//         add: 'insert into test(name,age) values (?,?)',
//         show: 'select * from document',
//         del: 'delete from test where stu_Id = ?',
//         update: 'update test set stu_name = ?,stu_sex = ?,stu_college = ?,stu_class = ? where stu_Id = ?',

//     }
// }

// const sqlMap_videos = {
//     Stu: {
//         add: 'insert into test(name,age) values (?,?)',
//         show: 'select * from videos',
//         del: 'delete from test where stu_Id = ?',
//         update: 'update test set stu_name = ?,stu_sex = ?,stu_college = ?,stu_class = ? where stu_Id = ?',

//     }
// }

module.exports = sqlMap
// module.exports = sqlMap_document
// module.exports = sqlMap_videos
