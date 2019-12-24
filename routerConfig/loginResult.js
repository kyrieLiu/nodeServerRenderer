var toLogin=async(ctx,next)=>{

    if(ctx.request.body.name==='admin'){
        ctx.render('login_result.html',{result:'登录成功'})
    }else{
        ctx.render('login_result.html',{result:'登录失败'})
    }
}

module.exports={
    'POST/login':toLogin
}