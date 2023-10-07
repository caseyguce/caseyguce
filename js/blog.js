const BlogHandler = {
    loadBlogs: function()
    {
        const self = this;
        const sectionObj = jQuery("#blog-section").find(".grid-wrapper");
        const blogs = PreviewUtil.getMetadata("../blog/");

        blogs.forEach((data) => sectionObj.append(self.createPreview("blog-section", data)));
    },

    createPreview: function(section, meta)
    {
        const element = jQuery("<div>");
        const imageMeta = PreviewUtil.mapMetadata(meta.image);

        element.addClass("grid-item");
        element.attr("contents", meta.contents);
        element.click(PreviewUtil.initClick(section, meta));

        const img = jQuery("<img>").attr("src", `./images/${imageMeta.filename}`);
        const title = jQuery("<h5>").html(meta.title);
        const description = jQuery("<p>").html(meta.description);
        const date = jQuery("<h6>").html(meta.date);

        element.append(img, title, description, date);

        return element;
    }
}