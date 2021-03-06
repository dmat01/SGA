//<debug>
//Ext.Loader.setPath({
//    'Ext': 'sdk/src'
//});
//</debug>

Ext.application({
    controllers: ['Main'],
    name: 'SGA',

    requires: [
        'Ext.MessageBox'
    ],
    viewport: {autoMaximize:true},
    views: [
        'Main', 
        'Home2', 
        'EventList', 
        'Connect', 
        'Contact',
        'Initiative',
        'ContactForm',
        'Election',
        'EventDetail',
        'SuggestionForm',
        'Links'
    ],
    models: [
        'Connect',
        'Officer',
        'Senator',
        'Liaison',
        'Vacant',
        'Event',
        'Initiative'
    ],
    stores: [
        'Connects',
        'Officers',
        'Senators',
        'Liaisons',
        'Vacants',
        'Events',
        'PastEvents',
        'Initiatives'
    ],
    icon: {
        //57: 'resources/icons/Icon.png',
        57: 'resources/icons/sga_icon.png',
        //72: 'resources/icons/Icon~ipad.png',
        72: 'resources/icons/sga_icon.png',
        //114: 'resources/icons/Icon@2x.png',
        114: 'resources/icons/sga_icon.png'
        //144: 'resources/icons/Icon~ipad@2x.png'
    },
    startupImage: {
        //'320x460': 'resources/startup/320x460.png',
        '320x460': 'resources/icons/sga_icon.png',
        //'640x920': 'resources/startup/640x920.png',
        '640x920': 'resources/icons/sga_icon.png',
        //'768x1004': 'resources/startup/768x1004.png',
        '768x1004': 'resources/icons/sga_icon.png'
        //'748x1024': 'resources/startup/748x1024.png',
        //'1536x2008': 'resources/startup/1536x2008.png',
        //'1496x2048': 'resources/startup/1496x2048.png'
    },
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('SGA.view.Main'));
    },

    onUpdated: function() {
        console.log("update triggered");
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
