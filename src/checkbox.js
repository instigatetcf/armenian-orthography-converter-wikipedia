(function(window, $){
    var spell = getCookie('spell');
    if (spell === '') {
        setCookie('spell', 'soviet', 30);
    }
    $(window.document).ready( function() {
    //Active only on view, and only on Main, Talk, User, UserTalk, Project, ProjectTalk pages
        if (wgAction === 'view' && wgNamespaceNumber >=0 && wgNamespaceNumber <= 5) {
            isChecked();
            jQuery('#check').change(onConvertChange);
        }
    });
    //function for creating chekbox
    function createChekbox() {
        var li = $('<li />');
        li.attr('id','mashtots');
        li.css('color', '#0645AD');
        var lab = jQuery('<label />');
        lab.attr('for', 'check');
        lab.attr('id','mashtots_link');
        lab.attr('title', 'ցուցադրել բովանդակութիւնը աւանդական ուղղագրութեամբ');
        var inp = jQuery('<input />');
        inp.attr('type', 'checkbox');
        inp.attr('name', 'dasakan');
        inp.attr('id', 'check');
        inp.css('position', 'relative');
        inp.css('vertical-align', 'middle');
        inp.css('bottom', '1px');
        inp.css('padding', '0');
        inp.css('margin', '0');
        inp.css('margin-right', ' 0.3em');
        var t ='աւանդական';
        lab.append(inp);
        lab.append(t);
        li.append(lab);
        $('#p-personal ul').prepend(li);
    }
    function isChecked(){
        createChekbox();
        if(spell=='mashtots') {
            document.getElementById('check').checked=true;
            window.mashtots.sovietToMashtotsDom(window.document.getElementById('firstHeading'));
            window.mashtots.sovietToMashtotsDom(window.document.getElementById('bodyContent'));
            window.mashtots.sovietToMashtotsDom(window.document.getElementById('mw-panel'));
        }
    }
    // function for converting the page from soviet->mashtots
    function onConvertChange() {
        if($('#check').is(':checked')) {
            setCookie('spell', 'mashtots', 30);
            window.mashtots.sovietToMashtotsDom(window.document.getElementById('firstHeading'));
            window.mashtots.sovietToMashtotsDom(window.document.getElementById('bodyContent'));
            window.mashtots.sovietToMashtotsDom(window.document.getElementById('mw-panel'));
        } else {
            setCookie('spell', 'soviet', 30);
            window.mashtots.mashtotsToSovietDom(window.document.getElementById('firstHeading'));
            window.mashtots.mashtotsToSovietDom(window.document.getElementById('bodyContent'));
            window.mashtots.mashtotsToSovietDom(window.document.getElementById('mw-panel'));
        }
    }
    function setCookie(c_name,value,exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + '; path=/' +((exdays==null) ? '' : '; expires='+exdate.toUTCString());
        document.cookie = c_name + '=' + c_value;
    }
    function getCookie(c_name) {
        var i,x,y,ARRcookies=document.cookie.split(';');
        for (i=0;i<ARRcookies.length;i++) {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf('='));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf('=')+1);
            x=x.replace(/^\s+|\s+$/g,'');
            if (x==c_name) {
                return unescape(y);
            }
        }
        return '';
    }
})(window, jQuery);
