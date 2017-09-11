//本地安装gulp进行开发npm install gulp -D  使得可以require到gulp
var gulp = require('gulp');

//安装2个需要用到的插件
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');





//通过gulp.task创建一个任务，叫做css
gulp.task('css', function() {

    // gulp.src('./src/css/*.css') //需要处理的文件是相对于gulpfile.js的路径即当前文件夹下的src/css下的所有的css文件
    //如果只想处理common.css和index.css，那么可以写成
    gulp.src(['./src/css/common.css','./src/css/index.css']) //这样就得到了数据流
        .pipe(concat('index-merge.css')) //将数据流通过pipe传递给下一个工序，这里是concat(),合并css文件并且命名为index-merge.css
        .pipe(cssnano())//然后进行压缩
        .pipe(gulp.dest('./dist/css')) //然后通过dest输出到指定目录下，这里是dist文件夹下

});
// 写好之后  可以通过终端 定位到当前目录下 运行gulp 指定task名即可,这里是gulp css
// 运行之后我们的两个css文件就合并成功了

//接着我们可以把剩下的reset.css只进行压缩一下 也放到dist/css下
gulp.task('default',function () {
    gulp.src('./src/css/reset.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
})
//写好之后运行gulp nanoReset
//当然也可以将task名字命名为default 这样运行的时候就直接输入gulp 即可运行 或者再创建一个task，名字为default
//然后写上 gulp.task('default',['css']) 最后运行的时候输入gulp即可