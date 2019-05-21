window.jQuery.ajax=function(url,method,body,successFn,failFn){
    return new promise(function(resolve,reject){
        let request=new XMLHttpRequest()                         
        request.open(url,method)                                   
       //我要拿到headers的值：                                    
       for(let key in headers){                                
           let value=headers[key]                                  
           request.setHeader(key,value)                             
       }                                                           
        request.onreadystatechange((e)=>{                        
            if(request.status===4){                               
                console.log('请求响应都已完毕')                               
            }if(request.readyState>=200&&request.readyState<300){
                console.log('说明请求成功')
                let string=request.responseText
                let object=window.JSON.parse(string)
    
              resolve.call(undefined,request.responseText)
    
            }else if(request.readyState>=400){
                console.log('说明请求失败了')
    
             reject.call(undefined,request)
            }
        request.send(body)
        })
    })
      
  }

function success(responseText){
    console.log(responseText)
}
function fail(request){
    console.log(request)
}
//promise是确定函数形式的规范(不用取名字，标准化)
//先引用jcdnjs 的 jQuery   https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
window.botton.addEventListener('click',(e)=>{
    $.ajax({
        url:'/xxx',
        method:'get',
        //用then来取代下面的代码
        // success:(x)=>{
        //     f1.call(undefined,x),
        //     f2.call(undefined,x)
        // },  
        // error:(x)=>{
        //     console.log(x)
        //     console.log(x.status)
        //     console.log(x.responseText)
        //}
    }).then(success,fail)//还可以写成这样,上面的函数function success/fail(){}可以去掉了 then(
                                       //      (responseText)=>{console.log(responseText)},
                                       //      (rquest)=>{console.log(rquest)})  
 })//如果在执行一个函数，可以再then()

 //这里的responseText()是一个对象，因为服务器看到json会自动把字符串转化为对象