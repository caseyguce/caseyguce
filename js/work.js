const WorkHandler = {
    loadWork: function()
    {
        const self = this;
        const sectionObj = jQuery("#work-section").find(".grid-wrapper");
        const work = PreviewUtil.getMetadata("../work/");

        work.forEach((data) => sectionObj.append(self.createPreview(data)));
    },

    createPreview: function(meta)
    {
        const element = jQuery("<div>");
        const overlay = jQuery("<div>").addClass("overlay");
        const textArea = jQuery("<div>");
        const imageMeta = PreviewUtil.mapMetadata(meta.image);

        element.addClass("preview");
        element.addClass("grid-item");
        element.css("background-image", `url('./images/${imageMeta.filename}')`);

        const title = jQuery("<h4>").html(meta.title);
        const description = jQuery("<p>").html(meta.description);
        const links = this.formatLinks(meta.links);

        textArea.addClass("textArea");
        textArea.attr("contents", meta.contents);
        textArea.append(title, description, links);

        overlay.append(textArea);
        element.append(overlay);

        return element;
    },

    formatLinks: function(meta)
    {
        const element = jQuery("<div>");
        const linkList = jQuery("<ul>");
        const links = PreviewUtil.mapMetadata(meta);

        element.addClass("grid-item-links");

        for (const key in links)
        {
            const listItem = jQuery("<li>");
            const link = jQuery("<a>").html(key);

            link.attr("href", links[key]);
            link.attr("target", "_blank");
            
            listItem.html(link);
            listItem.css("margin-right", "10px");

            linkList.append(listItem);
        }

        element.append(linkList);

        return element;
    }
}