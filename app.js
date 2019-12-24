const Koa=require('koa')
const app=new Koa()
const renderServer=require('./renderServer')
const viewController=require('./viewController')
const bodyParser=require('koa-bodyparser')

app.use(async(ctx,next)=>{
    await next();
})

app.use(bodyParser())
app.use(renderServer());

app.use(viewController())

app.listen(3000)

console.log('start 3000')