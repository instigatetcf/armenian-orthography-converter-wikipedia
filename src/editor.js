(function(){
    setTimeout(function() {
        if (typeof($.fn.wikiEditor) !== 'undefined' && typeof(mashtots) !== 'undefined') {
            $('#wpTextbox1').wikiEditor('addToToolbar', {
                'section': 'main',
                'groups': {
                    'additional': { 'label': '' }
                }
            });
            $('#wpTextbox1').wikiEditor('addToToolbar', {
                'section': 'main',
                'group': 'additional',
                'tools': {
                    'mashtots': {
                        label: 'Սովետական ուղղագրութիւն',
                        type: 'button',
                        icon: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Gnome-face-smile.svg/22px-Gnome-face-smile.svg.png',
                        action: {
                            type: 'callback',
                            execute: function(context) {
                                var $textarea = $('.wikiEditor-ui-text textarea');
                                mashtots.mashtotsToSovietDom($textarea.get(0), [
                                    '(<ref( name="[^\<\>]*")?>[^\<\>]*</ref>)|(<ref name="[^\<\>]*" ?/>)',
                                    '\{\{[^\{\}]*\}\}',
                                    '\\[\\[[^\\[\\]]*\\]\\]',
                                    '\\[[^\\[\\]]*\\]',
                                    '(http|https|ftp)://[^ ]+',
                                    '\<[^\<\>]*\>'
                                ]);
                            }
                        }
                    }
                }
            } );
        }
    }, 0);
})();
