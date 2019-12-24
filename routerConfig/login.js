var loginFunction=async(ctx,next)=>{
    ctx.render('login.html',{name:'测试系统'})
}

module.exports={
    'GET/index':loginFunction,
    'GET/':loginFunction,
}