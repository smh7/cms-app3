module.exports = {
/**
 *@api {post} /card
 *@apiGroup Card 
 * @apiName CreateCard
 * @apiSuccess {Object} Card A newly created card element
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:8080/card
 * @apiDescription LoggedIn user can create a new card
 * @apiHeader {String} Authorization  JWT Authorization header
 * @apiHeaderExample {json} Request Authorization Header
 * {
 *  "authorization" : "dfjjfdla98826830271"
 * }
 * @apiParam {String} [card_img_top]
 * @apiParam {String} [card_title]
 * @apiParam {String} [card_text]
 * @apiParam {String} [list_group1]
 * @apiParam {String} [list_group2]
 * @apiParam {String} [list_group3]
 */

  async create(ctx){
    try {
      ctx.body = await ctx.db.Card.create({
        card_img_top: ctx.request.body.card_img_top,
        card_title: ctx.request.body.card_title,
        card_text: ctx.request.body.card_text,
        list_group1: ctx.request.body.list_group1,
        list_group2: ctx.request.body.list_group2,
        list_group3: ctx.request.body.list_group3
      })
    } catch (error) {
        ctx.throw(500, err);
    }
  },

}