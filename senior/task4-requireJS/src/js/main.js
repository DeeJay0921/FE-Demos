requirejs.config({
    baseUrl: 'src/js',
    path: {
        'jquery': 'lib/jquery-3.2.1.min',
    }
})

requirejs(['app/index']);