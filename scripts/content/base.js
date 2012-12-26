/*
    The base of a post object. 
*/
define(['lib/dom', 'config'], function(dom, config) {
    var base = {};

    base.init =  function(settings)
    {
        this.title = settings.title;
        this.date = settings.date;
        this.author = settings.author;
        this.link = settings.link;
        this.description = settings.description;
        this.inNav = (typeof settings.inNav === 'undefined') ? true : settings.inNav;
        this.tags = settings.tags || [];
    }

    base.addTag = function(tag)
    {
        var exists;

        if (typeof tag === 'string')
        {
            var exists = this.tags.some(function(item) {
                return item == tag;
            });

            if (!exists)
            {
                this.tags.push(tag);
                return true;
            }
        }
        else if (typeof tag.forEach === 'function')
        {
            tag.forEach(function(item) {
                var exists = this.tags.some(function(tag) {
                    return tag === item;
                }, this);
                
                if (!exists)
                {
                    this.tags.push(tag);
                    return true;
                }
                
            }, this);
        }

        return false;
    }

    base.removeTag =  function(tag)
    {
        this.tags = this.tags.filter(function(item) {
            item !== tag;
        }, this);
    }

    base.getNavElem = function()
    {
        var navItem,
            link;

        if (this.inNav)
        {
            navItem = dom.create(config.navItemTagName);
            link = dom.create('a');
            link.href = this.getURL();

            link.appendChild(dom.text(this.title));
            navItem.appendChild(link);

            return navItem;
        }
        else
        {
            return null;
        }
    }

    base.getDescriptionElem = function(level, className)
    {
        level = level || 1;
        className = className || config.contentClassName;

        var item = dom.create('div'),
            title = dom.create('h' + level),
            date = dom.create('p'),
            description = dom.create('p'),
            link = dom.create('a'),
            tags = this.getTagElem();

        item.className = className;
        link.href = this.getURL();

        title.appendChild(dom.text(this.title));
        date.appendChild(dom.text(this.date.toString()));
        description.appendChild(dom.text(this.description));
        link.appendChild(dom.text(config.readMoreText));

        item.appendChild(title);
        item.appendChild(date);
        item.appendChild(description);
        item.appendChild(link);
        item.appendChild(tags);

        return item;
    }

    base.getTagElem = function()
    {
        var tags = dom.create('ul');

        tags.className = 'tags';

        this.tags.forEach(function(item) {
            var tag = dom.create('li'),
                link = dom.create('a');

            link.dataset.tag = item;
            link.className = 'tag';
            link.href = '#';
            link.appendChild(dom.text(item));

            tag.appendChild(link);
            tags.appendChild(tag);
        });

        return tags;
    }

    base.getURL = function()
    {
        return this.link;
    }

    return base;
});