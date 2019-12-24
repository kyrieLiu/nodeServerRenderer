const router=require('koa-router')()
const fs=require('fs')
const nodePath=require('path')

module.exports=function(){
    let path=nodePath.join(__dirname,'routerConfig')
   
    let fileArray=fs.readdirSync(path)

    fileArray=fileArray.filter((item)=>{
        return item.endsWith('.js')
    })

    fileArray.forEach((item)=>{
        let mapping=require(nodePath.join(__dirname,'routerConfig',item))
        for(var url in mapping){
            if(url.startsWith('GET')){
                var path=url.substring(3)
                router.get(path,mapping[url])
            }else if(url.startsWith('POST')){
                var path=url.substring(4)
                router.post(path,mapping[url])
            }
        }
    })

    return router.routes()
}