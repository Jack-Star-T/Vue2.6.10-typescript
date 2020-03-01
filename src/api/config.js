let url;
if(window.location.hostname==='localhost'){    //本地开发
  url='';
}else if(window.location.hostname===''){   //本地测试
  url='';
}else if(window.location.hostname===''){   //正式库
  url='';
}else{
  url=null;
}

export default url;