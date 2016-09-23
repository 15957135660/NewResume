// JavaScript Document
//var respondFont={
//    width:640,
//    fontSize:625,
//    fontAuto:function(){
//        var winWidth=document.documentElement.clientWidth;
//        if(winWidth>=this.width)
//        {
//            document.documentElement.style.fontSize=this.fontSize+"%";
//        }
//        else
//        {
//            document.documentElement.style.fontSize=winWidth/this.width*this.fontSize+"%";
//        }
//    },
//    getElementViewTop:function(element){
//        var actualTop = element.offsetTop;
//        var current = element.offsetParent;
//        while(current !== null){
//            actualTop += current. offsetTop;
//            current = current.offsetParent;
//        }
//        if (document.compatMode == "BackCompat"){
//            var elementScrollTop=document.body.scrollTop;
//        }else{
//            var elementScrollTop=document.documentElement.scrollTop;
//        }
//        return actualTop-elementScrollTop;
//    },
//    resizeCallback:null,
//    init:function(){
//        this.fontAuto();
//        var obj=this;
//        window.addEventListener('resize',function(){
//            obj.fontAuto();
//            if(obj.resizeCallback)
//                obj.resizeCallback();
//        });
//        window.addEventListener('load',function(){
//            var inputs=document.querySelectorAll('input[type="text"],input[type="password"],textarea');
//            for(var kk=0;kk<inputs.length;kk++){
//                inputs[kk].addEventListener('focus',function(){
//                    var that=this;
//                    obj.resizeCallback=function(){
//                        document.body.scrollTop=getElementViewTop(that);
//                        document.documentElement.scrollTop=getElementViewTop(that);
//                    }
//                });
//                inputs[kk].addEventListener('blur',function(){
//                    obj.resizeCallback=null;
//                });
//            }
//        });
//    }
//};

var fontAuto={
    psWidth:640,
    fontAutoFun:function(){
        var htmlNode=document.documentElement;
        var winWidth=htmlNode.clientWidth;
        if(winWidth>=this.psWidth)
            htmlNode.style.fontSize="625%";
        else
            htmlNode.style.fontSize=winWidth/this.psWidth*625+'%';
    },
    init:function(){
        this.fontAutoFun();
        var that=this;
        window.addEventListener('resize',that.fontAutoFun)
    }
}
fontAuto.init()