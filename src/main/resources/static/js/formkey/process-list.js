/**
 * Created by yuliyao on 2017/3/8.
 */
require(['select2', 'select2CN', 'bootstrapTable', 'bootstrapTableCN', 'bootstrap', 'layer'], function () {

    layer.config({
        path: '/res/js/plugins/layer/',
        skin: 'layer-ext-moon',
        extend: 'skin/moon/style.css'
    });


    $('#table').bootstrapTable({
        striped: 'true',
        pagination: "true",
        sidePagination: "server",
        pageSize: "20",
        pageList: "[10, 20, 50]",
        method: "post",
        contentType:"application/x-www-form-urlencoded",
        url:"/formKey/processList"
        /*queryParams: function(params){
            return buildParams(params);
        }*/
    });


    //查询
    $('#query-data-btn').click(function () {
        $('#table').bootstrapTable("refresh");
    });


})

var operateFormatter = function (value, row) {
    var detailUrl = "/generatorTest/generatorTestDetail.do";
    //var show = "<a onclick='OpenNewIframe(\"" + detailUrl + "?id=" + row.id + "\",\"详情\")'>详情</a>";
    var show = "";
    show += "&nbsp;&nbsp; <a onclick='deleteItem(" + row.id + ")'>删除</a>";
    return show;
}
