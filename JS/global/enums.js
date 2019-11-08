//试玩类型
var TryTypeEnum =
{

    练级: 0,
    时长: 1,
    练战斗力: 2,
}
//JS 获取对应的枚举值用于显示
function GetTryTypeEnum(str){
    var retrunstr='';
 switch(str){
     case TryTypeEnum.练级:
            retrunstr= "练级";
            break;

    case TryTypeEnum.时长:
            retrunstr= "时长";
            break;
    case TryTypeEnum.练战斗力:
            retrunstr= "练战斗力";
            break;
 }
 return retrunstr;
}
//试玩类型
var DevicesEnum =
{
    电脑: 0,
    手机: 1,
}
//JS 获取对应的枚举值用于显示
function GetDevicesEnum(str){
    var retrunstr='';
 switch(str){
     case DevicesEnum.电脑:
            retrunstr= "电脑";
            break;

    case DevicesEnum.手机:
            retrunstr= "手机";
            break;
 }
 return retrunstr;
}