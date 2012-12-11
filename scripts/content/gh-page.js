define(['./base'], function(base) {
    var project = Object.create(base);
    project.getURL = function()
    {
        return 'http://' + this.author + '.github.com/' + this.link;
    }

    return project;
})