/* eslint-disable no-empty-character-class */
//传真校验
export const faxReg=/^(\d{3,4}-)?\d{7,8}$/;

//邮箱校验
export const emailReg=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//邮编校验
export const postalReg=/^\d{6}$/;

//qq
export const qqReg=/^[1-9][0-9]{4,10}$/;

//手机号校验
export const phoneReg=/^((\+86)|(86))?(13|15|17|18)\d{9}$/;

//银行卡号校验
export const bankCardReg= /^([1-9]{1})(\d{14}|\d{18})$/;

//固定电话校验
export const telephoneReg=/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;

//密码校验，6-16位密码，至少使用字母、数字、符号中的2种组合
export const passwordReg= /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-z]|[A-Z]|[0-9]){6,}$/;