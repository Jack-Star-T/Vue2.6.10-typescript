import {bankCardReg, emailReg, faxReg, passwordReg, phoneReg, postalReg, qqReg, telephoneReg} from "./reg";

//固定电话的验证
export const testTelephone = (rule: any, value: string, callback: any) => {
  if(value){
    if(!telephoneReg.test(value)){
      callback(new Error('请输入区号-电话号码'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//传真的验证
export const testFax = (rule: any, value: string, callback: any) => {
  if(value){
    if(!faxReg.test(value)){
      callback(new Error('请输入区号-传真号码'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//邮箱的验证
export const testEmail = (rule: any, value: string, callback: any) => {
  if(value){
    if(!emailReg.test(value)){
      callback(new Error('请输入正确的邮箱地址'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//邮编的验证
export const testPostal = (rule: any, value: string, callback: any) => {
  if(value){
    if(!postalReg.test(value)){
      callback(new Error('请输入正确的邮编'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//银行卡号的验证
export const testBankCard = (rule: any, value: string, callback: any) => {
  if(value){
    if(!bankCardReg.test(value)){
      callback(new Error('请输入正确的银行卡号'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//密码强度的验证
export const testPassword = (rule: any, value: string, callback: any) => {
  if(value){
    if(!passwordReg.test(value)){
      callback(new Error('请输入6-16位密码，至少使用字母、数字、符号中的2种组合'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//手机号码的校验
export const testPhone = (rule: any, value: string, callback: any) => {
  if(value){
    if(!phoneReg.test(value)){
      callback(new Error('请输入正确的手机号'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};

//qq号码的校验
export const testQQ = (rule: any, value: string, callback: any) => {
  if(value){
    if(!qqReg.test(value)){
      callback(new Error('请输入正确的qq号'));
    }else{
      callback();
    }
  }else{
    callback();
  }
};
