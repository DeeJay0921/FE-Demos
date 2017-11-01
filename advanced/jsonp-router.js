app.get('/jsonp',function (req,res) {
    var content = [
        "内容10",
        "内容4",
        "内容5",
        "内容6",
        "内容7",
        "内容8",
        "内容9",
    ];
    var data = [];
    for (var i = 0; i < 3; i ++) {
        var index = parseInt(Math.random()*content.length);
        data.push(content[index]);
        content.splice(index,1);
    }

    //进行后端的jsonp跨域处理
    var cb = req.query.callback;
    if (cb) { //如果存在回调函数的话
        res.send(cb + '(' + JSON.stringify(data) + ')' ); //拼接成最后能调用的语法格式
    }
    else {
        res.send(data);
    }
})