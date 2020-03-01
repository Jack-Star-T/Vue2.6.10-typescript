//互换数组中两个元素的位置   參數为數組，索引1，索引2   例如swapArr([1,2,3,4,5],2,3)  返回[1,2,4,3,5]    
export function swapArr(arr:Array<any>, index1:number, index2:number) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

//將某个元素置頂   参数为数组，索引   例如toFirst([1,2,3,4,5],2)  返回[3,1,2,4,5]
export function toFirst(arr:Array<any>,index:number) {
  if(index!=0){
      arr.unshift(arr.splice(index , 1)[0]);
  }
}

//將某个元素往前移动一个格子  参数为数组，索引   例如upGo([1,2,3,4,5],2)  返回[1,3,2,4,5]
export function upGo(arr:Array<any>,index:number){
  if(index!=0){
    arr[index] = arr.splice(index-1, 1, arr[index])[0];
  }else{
    arr.push(arr.shift());
  }
}

//將某个元素往后移动一个格子  参数为数组，索引   例如downGo([1,2,3,4,5],2)  返回[1,2,4,3,5]
export function downGo(arr:Array<any>,index:number) {
  if(index!=arr.length-1){
    arr[index] = arr.splice(index+1, 1, arr[index])[0];
  }else{
    arr.unshift( arr.splice(index,1)[0]);
  }
}

//将某个元素设置到末尾  参数为数组，索引   例如toEnd([1,2,3,4,5],2)  返回[1,2,4,5,3]
export function toEnd(arr:Array<any>,index:number) {
  arr.push(arr[index]);
  arr.splice(index,1);
  return arr;
}

//数组去重  参数为数组   例如unique([1,2,2,3,3,4,5])   返回[1,2,3,4,5]
export function unique(arr:Array<any>){
  return Array.from(new Set(arr));
}

//删除数组中的指定元素 参数为数组，元素值,是否严格模式(变量类型严格比较)  例如removeArr([1,2,3,4,5],2,false) 返回[1,3,4,5]   例如removeArr([1,2,3,4,5],2,true) 返回[1,2,3,4,5]
export function removeArr (arr:Array<any>,value:string,strict:boolean) {
  let index:number;
  if(strict===true){
    index = arr.findIndex(x=>x===value);
  }else{
    index = arr.findIndex(x=>x==value);
  }
  if (index > -1) {
    arr.splice(index, 1);
  }
}