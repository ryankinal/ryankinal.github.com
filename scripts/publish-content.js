define(['content-db'], function(contentDB) {
    contentDB.addGHPage({
        title: 'GMScreen',
        author: 'ryankinal',
        link: 'GMScreen',
        date: new Date(),
        description: 'Customizable online notes and tables for gamemasters, which are persistent between sessions. Come back with the same browser, and all your stuff is still there',
        tags: [
            'gaming',
            'programming',
            'javascript',
            'css',
            'learning',
            'project'
        ]
    });

    contentDB.addArticle({
        title: 'jQuery Makes Everything Boring',
        author: 'Ryan Kinal',
        date: '2012-12-10',
        link: 'jquery-makes-everything-boring.html',
        description: 'jQuery makes it really easy for designers to get what they need out of JavaScript. But it\'s also *really, really boring*.',
        tags: [
            'programming',
            'javascript',
            'article',
            'rant'
        ]
    });

    contentDB.addArticle({
        title: 'Snowbound Blues Post-Mortem',
        author: 'Ryan Kinal',
        date: '2012-12-10',
        link: 'snowbound-blues-post-mortem.html',
        description: 'Snowbound was a great event. But I wasn\'t feeling all that great.',
        tags: [
            'article',
            'dance',
            'blues',
            'workshop',
            'post-mortem'
        ]
    });

    return {};
});