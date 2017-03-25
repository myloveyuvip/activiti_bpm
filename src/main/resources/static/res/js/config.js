require.config({
	waitSeconds: 0,
	baseUrl: './',
	urlArgs: 'time=' + Date.now(),
	paths: {
		jquery: 'js/jquery.min',
		bootstrap: 'js/bootstrap.min',
		
		//模拟ajax请求
		mockjax: 'js/plugins/jquery.mockjax.min',	
		metisMenu: 'js/plugins/metisMenu/jquery.metisMenu',	
		moment: 'js/plugins/moment/moment',
		layer: 'js/plugins/layer/layer',
		
		iCheck: 'js/plugins/iCheck/icheck.min',
		slimScroll: 'js/plugins/slimscroll/jquery.slimscroll.min',
		jqueryPeity: 'js/plugins/peity/jquery.peity.min',
		bootstrapTable: 'js/plugins/bootstrap-table/bootstrap-table.min',
		bootstrapTableCN: 'js/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min',
		
		selectAddress: 'js/plugins/bootstrap-editable/inputs-ext/address/address',

		bootstrapEditable: 'js/plugins/bootstrap3-editable/js/bootstrap-editable',
//		select2: 'js/plugins/select2/3.5/select2',
//		select2CN: 'js/plugins/select2/3.5/select2_locale_zh-CN',
		select2: 'js/plugins/select2/js/select2.full.min',
		select2CN: 'js/plugins/select2/js/i18n/zh-CN',
		address: 'js/plugins/bootstrap3-editable/inputs-ext/address/address',
		
	},
	shim: {
		bootstrap: ['jquery'],
		metisMenu: ['bootstrap'],
		iCheck: ['jquery'],
		layer: ['jquery'],
		
		jqueryPeity: ['jquery'],
		slimScroll: ['jquery'],
		select2: ['jquery'],
		select2CN: ['select2'],
		selectAddress: ['select2', 'bootstrapEditable'],
		
		bootstrapTable: ['jquery'],
		bootstrapTableCN: ['bootstrapTable'],
		bootstrapEditable: ['bootstrap', 'moment'],
		address: ['jquery', 'bootstrapEditable'],
	}
});
