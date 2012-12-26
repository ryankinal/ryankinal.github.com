define(['content/content-types'], function(ContentTypes) {
    var contentDB = {},
        archive = [],
        currentView = [],
        tags = null,
        sorted;

    contentDB.addContent = function(article)
    {
        archive.push(article);
        currentView = archive.slice();
        tags = null;
    }

    contentDB.addArticle = function(settings)
    {
        var article = Object.create(ContentTypes.article);
        article.init(settings);
        this.addContent(article);
        return article;
    }

    contentDB.addProject = function(settings)
    {
        var project = Object.create(ContentTypes.project);
        project.init(settings);
        this.addContent(project);
        return project;
    }

    contentDB.addGHPage = function(settings)
    {
        var ghPage = Object.create(ContentTypes.ghPage);
        ghPage.init(settings);
        this.addContent(ghPage);
        return ghPage;
    }

    contentDB.getAll = function(asc)
    {
        currentView = archive.slice(0);
        return currentView;
    }

    contentDB.sortByDate = function(asc)
    {
        currentView.sort(function(a, b) {
            var dateA = new Date(a.date),
                dateB = new Date(b.date);

            if (dateA == dateB)
            {
                return 0;
            }
            else
            {
                if (dateA < dateB)
                {
                    return asc ? 1 : -1;
                }
                else
                {
                    return asc ? -1 : 1;
                }
            }
        });

        return currentView;
    }

    contentDB.getTags = function(project)
    {
        if (tags === null)
        {
            tags = {};
            archive.forEach(function(item) {
                item.tags.forEach(function(tag) {
                    if (typeof tags[tag] === 'undefined')
                    {
                        tags[tag] = 1;
                    }
                    else
                    {
                        tags[tag]++;
                    }
                });
            });
        }

        return tags;
    }

    contentDB.getByTag = function(tag)
    {
        currentView = archive.filter(function(item) {
            return item.tags.some(function(item) {
                return item === tag;
            });
        });

        return currentView;
    }

    return contentDB;
});