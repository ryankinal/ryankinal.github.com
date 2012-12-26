define(['content-db', 'config', 'lib/dom', 'publish-content'], function(contentDB, config, dom) {
    var nav = dom.getById(config.navID),
        projects = dom.getById('projects'),
        tags = dom.getById('tags'),
        content = dom.getById(config.contentID);

    contentDB.sortByDate();

    contentDB.getAll().forEach(function(item) {
        nav.appendChild(item.getNavElem());
        content.appendChild(item.getDescriptionElem());
    });

    contentDB.getByTag('project').forEach(function(item) {
        projects.appendChild(item.getNavElem());
    });

    /*contentDB.getTags().forEach(function(item, key) {
        var tag = dom.create('li'),
            link = dom.create('a');

        link.appendChild(dom.text(key));
        tag.appendChild(link);
        tags.appendChild(tag);
    });*/
});