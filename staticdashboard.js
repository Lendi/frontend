$(document).ready(function(){
	
	$('#introduce-modal').modal({
		keyboard: false,
		backdrop: 'static'
	});
	
	$('#user_type').select2({
        minimumResultsForSearch: -1	
    });
	
	$('.checkbox-custom').checkbox();
    
    $('.timeago').timeago();
    
    $('#locations').select2({
        minimumResultsForSearch: -1	
    });
    $('textarea.issue').focus( function(){
        $('.list-menu').show();
        //$('.issue-action .issue-btn').css({'margin-top': '-7px'});
        $('.issue-action').css({'position': 'static', 'top': '0px', 'text-align': 'right'});
        $('.issue-container .issue').attr('rows', 5).css({'height':'132px'});
    });
});

/*function feedModel() {
    console.log(feed_data);
    this.feeds = ko.observableArray(feed_data.feeds);
}*/

//console.log(ko);
ko.page = 'dashboard';
//ko.applyBindings(new feedModel());

function loadFeed(id) {
	if (id == '') {
		window.location.hash = "";
	} else {
		window.location.hash = "#location=" + id;
	}

	window.location.reload(true);
}

urlGetUpdates();
/* #TODO
setInterval(function() {
    urlGetUpdates();
}, 30000);
*/
