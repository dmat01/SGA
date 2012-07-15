Ext.define('SGA.view.Initiative', {
    extend: 'Ext.Panel',
    xtype: 'initiativepanel',
    requires: [
        'Ext.data.Store','Ext.TitleBar'
    ],
    config: {

        cls: 'sga-list-events',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Initiatives'
            },
            {
                xtype: 'list',
                itemTpl: '<div class="list-item-leftdetail"> {description} </div>',
                title: 'Upcoming Event',
                store: 'Initiatives',
                grouped: true,
                listeners: {
                    itemtap: function(dv, ix, item, e) {
                            // Delay the selection clear
                            // so they get a nice blue flash for HCI's sake
                            setTimeout(function(){dv.deselect(ix);},500);
                    }
                }//listeners
            }
        ]
    }
});