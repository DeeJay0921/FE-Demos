app.get('/cors',function (req,res) {
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
    res.header("Access-Control-Allow-Origin","http://index1.com:8080");// 后端设置一个响应头，第二个参数代表只允许规定的域访问
    // res.header("Access-Control-Allow-Origin","*");//写成*代表不管什么域都允许请求数据
    res.send(data);
})