// JavaScript Document
jQuery(function(){
	$.datetimepicker.setLocale('zh');
	$('#datetimepicker').datetimepicker();
	$('.some_class').datetimepicker();
	$('#datetimepicker9').datetimepicker({
	onGenerate:function( ct ){
		$(this).find('.xdsoft_date.xdsoft_weekend').addClass('xdsoft_disabled');
	},
		weekends:['01.01.2014','02.01.2014','03.01.2014','04.01.2014','05.01.2014','06.01.2014'],
		timepicker:false
	});
	$('#datetimepicker8').datetimepicker({
	  timepicker:false,
	});
	jQuery('#datetimepicker7').datetimepicker({
	  datepicker:false,
	  format:'H:i'
	});
	 jQuery('#date_timepicker_start').datetimepicker({
	  format:'Y/m/d',
	  onShow:function( ct ){
	   this.setOptions({
		maxDate:jQuery('#date_timepicker_end').val()?jQuery('#date_timepicker_end').val():false
	   })
	  },
	  timepicker:false
	 });
	 jQuery('#date_timepicker_end').datetimepicker({
	  format:'Y/m/d',
	  onShow:function( ct ){
	   this.setOptions({
		minDate:jQuery('#date_timepicker_start').val()?jQuery('#date_timepicker_start').val():false
	   })
	  },
	  timepicker:false
	 });
});