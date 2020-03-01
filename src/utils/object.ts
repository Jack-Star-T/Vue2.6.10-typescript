//将对象的值进行清空
export function clearObject(object:any) {
    for(let i in object){
      object[i]='';
    }
}