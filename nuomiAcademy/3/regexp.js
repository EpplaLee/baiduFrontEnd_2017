var phoneNum1 = 18812011232;
var phoneNum2 = 18812312;
var phoneNum3 = 12345678909;
var checkPhoneNum = /1[34578]+\d{9}/;
console.log(checkPhoneNum.test(phoneNum1));
console.log(checkPhoneNum.test(phoneNum2));
console.log(checkPhoneNum.test(phoneNum3));

var list1 = 'foo foo bar';
var list2 = 'foo bar foo'; 
var list3 = 'foo  barbar bar';
var checkWordList = /.*\b(\w+)\b\s+\1\b.*/;
console.log(checkWordList.test(list1));
console.log(checkWordList.test(list2));
console.log(checkWordList.test(list3));