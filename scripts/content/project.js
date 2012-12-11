define(['./base'], function(base) {
    var project = Object.create(base);
    project.getURL = function()
    {
        return 'http://www.github.com/' + this.author + '/' + this.link;
    }

    return project;
})