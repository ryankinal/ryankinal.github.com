define(['./base', 'config'], function(base, config) {
    var article = Object.create(base);
    article.getURL = function()
    {
        return config.baseURL + 'posts/' + this.link;
    }

    return article;
});