function f() {
    var questionDiv = document.getElementsByClassName("questionDiv");
    for (var i = 0; i < questionDiv.length; i++)
        questionDiv[i].style.display = "block";
    var ps = document.answerForm.problem_id;
    for (var i = 0; i < ps.length; i++) {
        var div = document.getElementById("answerDiv" + i);
        var text = div.getElementsByTagName('textarea');
        if (text.length > 0) {
            text[0].value = "都很满意。。。。。。。。。。。";//想填其它文字可以直接修改
            continue;
        }
        var id = ps[i].value;
        var name = "problem" + id;
        var radio = document.getElementsByName(name);
        radio[0].checked = true;//0是全部5分，1是全部4分，2是全部3分，以此类推
    }
}
function summit() {
    setTimeout(goSubmitForm, 10000);//10秒后会自动提交，提交太快会导致提交失败
}
f();
summit();//如果想手动提交就不要复制这行代码
