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
 * @apiParam {String} [card_img_top] At present format=  img src='http://localhost:8080/img/maine.jpg'
 * @apiParam {String} [card_title] This is the card title
 * @apiParam {String} [card_text] This is the larger section of text withint the card
 * @apiParam {String} [list_group1] This is the first list group item beneath the card-text
 * @apiParam {String} [list_group2] This is the 2nd, might not be needed
 * @apiParam {String} [list_group3] This is the 3rd
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

  /**
   * @api {get} /cards
   * @apiGroup Cards
   *  @apiName GetCards
   *  @apiSuccess {Object[]} Card List of Product Cards
   *  @apiExample {curl} Example usage:
   *  curl -i http://localhost:8080/cards
   *  @apiDescription Any User Can Return a View of all Product Cards
   * 
   */

  async find(ctx){
    try {
      ctx.body = await ctx.db.Card.findAll({});
    } catch (error) {
      ctx.throw(500, err);
    }
  }

};