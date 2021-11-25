var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e481c82c183866bf90dfb5cc388c27ce";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

function ClearLocal() {
    window.localStorage.clear();
    showMessage();
}

function showMessage(data) {
    $('.modal').html(data);
    $('.modal').fadeIn();
    setTimeout(function () {
        $('.modal').fadeOut();
    }, 2000);
};

function goDate() {
    var today = new Date();
    var y = today.getFullYear();
    var mo = today.getMonth() + 1;
    var d = today.getDate();
    var h = today.getHours();
    if (mo < 10)
        mo = "0" + mo;
    startDate = y + "-" + mo + "-" + d;
    endDate = y + "-" + mo + "-" + (d);
    var res = new Array(startDate, endDate);
    return res;
}

function randomn(n) {
    if (n > 21) return null
    return parseInt((Math.random() + 1) * Math.pow(10, n - 1))
}
function Random() {
    var lastname = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "楚", "魏"];
    var name = ["行露", "皋野", "皋野", "远致", "革有", "振于", "陈夏", "孟洵", "哉予", "期良", "君止", "子邦", "维其", "须悠", "良之", "之怀", "之功", "黍与"];
    var number = ["2019", "2020", "2020"];
    var college = ["计算机科学与工程学院/软件学院"];
    // var college = ["计算机科学与工程学院"];
    var major = ["电子信息", "软件工程", "计算机科学与技术"];
    var reason = ["实验室团日活动", "实验室团日活动", "实验室团日活动", "实验室团日活动", "导师交代任务", "导师交代任务", "身体不适去医院看病", "牙疼去医院", "身份证丢失补办", "没有理由", "今天就想去吃南门的煎饼果子", "I want to look at the scenery outside！"];
    var storage = window.localStorage;
    res = goDate();

    storage.uid = number[Math.floor((Math.random() * number.length))] + "010" + randomn(3);
    storage.uname = lastname[Math.floor((Math.random() * lastname.length))] + name[Math.floor((Math.random() * name.length))];
    storage.startDate = res[0];
    storage.endDate = res[1];
    storage.ucollege = college;
    storage.umajor = major[Math.floor((Math.random() * major.length))];
    storage.ureason = reason[Math.floor((Math.random() * reason.length))];
    storage.uwhereabouts = "桂林";

    window.location.href = "yzdx.html";
}



function oldTo() {
    var storage = window.localStorage;
    if (typeof (localStorage.uid) == "undefined" || typeof (localStorage.uname) == "undefined" || typeof (localStorage.ucollege) == "undefined" || typeof (localStorage.umajor) == "undefined" || typeof (localStorage.ureason) == "undefined" || typeof (localStorage.uwhereabouts) == "undefined") {
        var r = confirm("本地数据不完整，是否继续？");
        if (r == true) {
            window.location.href = "yzdx.html";
        }
        else {
            location.reload();
        }
    } else {
        res = goDate();

        window.localStorage.startDate = res[0];
        window.localStorage.endDate = res[1];

        window.location.href = "yzdx.html";
    }
}
function toForm() {
    window.location.href = "form.html";
}




// form html
function toYZDX() {
    if (!window.localStorage) {
        alert("浏览器不支持localstorage");
    } else {
        var storage = window.localStorage;

        storage.uid = document.getElementsByName('uid')[0].value;
        storage.uname = document.getElementsByName("uname")[0].value;
        storage.startDate = document.getElementsByName("startDate")[0].value;
        storage.endDate = document.getElementsByName("endDate")[0].value;
        storage.ucollege = document.getElementsByName("ucollege")[0].value;
        storage.umajor = document.getElementsByName("umajor")[0].value;
        storage.ureason = document.getElementsByName("ureason")[0].value;
        storage.uwhereabouts = document.getElementsByName("uwhereabouts")[0].value;

        window.location.href = "yzdx.html";
    }
}

// yzdx html

function backYzdx() {
    // setTimeout(function (){
    // }, 15000);
    window.location.href = "http://yiban.gxnu.edu.cn/yzdx/affairs/leave";
}

function backPage() {
    // document.getElementsByClassName('header')[0].innerHTML = '请假条-已销假';
    // document.getElementsByClassName('operate')[0].innerHTML = '<p data-v-d4d5c34c="" style="font-size: 18px; color: red; line-height: 1.429;">已销假，不可出校<br data-v-d4d5c34c="">只可在1小时内进校</p><button data-v-d4d5c34c="" type="button" onclick="backYzdx();" icon="" _type="button" class="dx-btn dx-btn_info"><!---->返 回</button>';
    showInfo();
    // setTimeout(function (){
    // }, 15000);

    // backYzdx();
}

function showInfo() {
    $('.read-later-alert').html();
    $('.read-later-alert').fadeIn();
    setTimeout(function () {
        $('.read-later-alert').hide();
        window.location.href = "http://yiban.gxnu.edu.cn/yzdx/affairs/leave";
    }, 500);



    // $(document).on("click", ".dx-btn_primary", function (event) {
    //     $(".read-later-alert").show();
    //     set_id = setTimeout(function () {
    //         $(".read-later-alert").hide()
    //         window.location.href="http://yiban.gxnu.edu.cn/yzdx/affairs/leave";
    //     }, 3000);
    // });
}