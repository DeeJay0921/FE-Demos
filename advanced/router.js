//发送GET请求，无参数
//GET/query
//返回响应数据

app.get('/loadMore',function (req,res) {
    var currentIndex = req.query.index; // 拿到前端给的index，注意是字符串形式的
    var length = req.query.length; //拿到前端给的每次加载的长度
    var data = [];
    for (var i = 0; i < length; i ++) {
        data.push('内容' + (parseInt(currentIndex) + i));
    }
    res.send(data); // 将push好的数据发送给前端
});