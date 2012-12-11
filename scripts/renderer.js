define(['content-db', 'config', 'dom', 'publish-content'], function(contentDB, config, dom) {
    var nav = dom.getById(config.navID),
        content = dom.getById(config.contentID);

    console.dir(contentDB.getAll());
    console.dir(contentDB.getTags());

    contentDB.getAll().forEach(function(item) {
        nav.appendChild(item.getNavElem());
        content.appendChild(item.getDescriptionElem());
    });
});