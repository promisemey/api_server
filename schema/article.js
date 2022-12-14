// 导入定义验证规则包
const joi = require('joi')

// 验证规则对象 - 发布文章
const title = joi.string().required()
const cate_id = joi.number().integer().min(1).required()
const content = joi.string().required().allow('')
const state = joi.string().valid('已发布', '草稿').required()


// 共享发布文章验证规则
exports.add_article_schema = {
    body: {
        title,
        cate_id,
        content,
        state
    }
}