const moment =require('moment')
const date=moment().format('YYYY-MM-DD HH:mm:ss')
console.log(date);
/*
YYYY	2014	4 位或 2 位数字年份。注意：在模式下只能解析 4 位数字strict
YY     	14	2 位数字年份
Y	    -25	具有任意数字和符号的年份
Q	    1..4	一年四季度。设置月份到季度中的第一个月。
M MM	1..12	月号
MMM MMMM	Jan..December	区域设置中的月份名称设置为moment.locale()
D DD	1..31	月份中的某一天
Do	    1st..31st	带有序数的月份中的某一天
DDD DDDD	1..365	一年中的某一天
X	    1410715640.579	优尼克斯时间戳
x	    1410715640579	Unix ms 时间戳 
*/