// globalData 可以随便定义，调用的时候相同即可
var globalData = {

    /**
  * setUserInfo 方法名
  *  uid 用户id
  *  uname 用户姓名
  * // cid 用户学院
  * startDate 开始日期
  * endDate 结束日期
  **/
    //多个存储
    setUserInfo: function (uid, uname, startDate, endDate) {
        //单个存储
        sessionStorage.setItem("uid", uid);
        sessionStorage.setItem("uname", uname);
        //sessionStorage.setItem("cid", cid);
        sessionStorage.setItem("startDate", startDate);
        sessionStorage.setItem("endDate", endDate);
        // sessionStorage.setItem("startTime", startTime);
        // sessionStorage.setItem("endTime", endTime);

    },
    //单个获取
    getUserUid: function () {
        return sessionStorage.getItem("uid");
    },
    getUserUname: function () {
        return sessionStorage.getItem("uname");
    },
    // getUserCid: function () {     return sessionStorage.getItem("cid"); }
    getUserStartDate: function () {
        return sessionStorage.getItem("startDate");
    },
    getUserEndDate: function () {
        return sessionStorage.getItem("endDate");
    },
    // getUserStartTime: function () {     return
    // sessionStorage.getItem("startTime"); }, getUserEndTime: function () {
    // return sessionStorage.getItem("endTime"); },
}

