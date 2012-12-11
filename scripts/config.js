define(function() {
    var isLocal = window.location.host === 'localhost',
        baseURL = isLocal ? '/ryankinal.github.com/' : '/';

    return {
        baseURL: baseURL,
        navItemTagName: 'li',
        readMoreText: 'Read more...',
        contentClassName: 'post',
        navID: 'nav',
        contentID: 'content'
    }
});