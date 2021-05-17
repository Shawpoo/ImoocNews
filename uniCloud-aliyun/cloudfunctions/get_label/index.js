'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	 
	try {
		let result = await db.collection('label').get();
		return {
				   "code": 200,
				   "msg": "OK",
				   "data": result.data
		}
	} catch(err) {
	   return {
		   "code": 500,
		   "msg": "服务端错误",
		   "data": null
	   }
	}
};
