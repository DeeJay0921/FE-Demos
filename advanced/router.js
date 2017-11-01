var waterFallArr = [];
var waterFallCol = parseInt($('.content').width() / $('.item').width());
for (var i = 0; i < waterFallCol; i ++) {
    waterFallArr[i] = 0;
}
$('.item').each(function () {
    waterFall($(this));
});
function waterFall ($node) {
    var minHeight = Math.min.apply(null,waterFallArr);
    var minHeightIndex = waterFallArr.indexOf(minHeight);
    $node.css({
        left: minHeightIndex * $node.outerWidth(true),
        top: minHeight,
    })
    waterFallArr[minHeightIndex] += $node.outerHeight(true);
}