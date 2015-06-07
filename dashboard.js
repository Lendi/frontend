$(document).ready(function(){

    if (request.session['userType'] == 1)
    {
        $('#myModal').modal('show'){
                keyboard: false,
                backdrop: 'static'}

        }
        else if (request.session['userType'] == 2)
        {
        $('#myModal').modal('hide')

        }
});

$(document).ready(function(){
        $('#user_type').select2({
        minimumResultsForSearch: -1
    });

        $('.checkbox-custom').checkbox();


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
        } else if (id == 'myDiscussions') {
                window.location.hash = "#" + id;
        }
        else {
                window.location.hash = "#location=" + id;
        }

        window.location.reload(true);
}

/* #TODO
setInterval(function() {
    urlGetUpdates();
}, 30000);
*/
                                      
