const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser')

const app = new Koa()

const bots = []

const router = new Router()

router.get('/status', async (ctx, next) => {
  ctx.body = {
    bots: bots.length
  }
})

router.get('/add-bot', async (ctx, next) => {
  bots.push({})
})

app
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
