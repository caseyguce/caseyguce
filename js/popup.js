const PopUpHandler = {
    createPopUp: function(meta)
    {
        const popUpDiv = this.formatData(meta);
        return popUpDiv;
    },

    formatData: function(meta)
    {
        const popUpDiv = jQuery("<div>");

        popUpDiv.attr("id", "pop-up");
        popUpDiv.attr("data-aos", "fade-up");
        popUpDiv.addClass("pop-up");

        const title = jQuery("<h3>").html(meta.title);
        const blogDetails = jQuery("<h6>").html("by Casey Guce, " + meta.date);
        const content = jQuery("<div>").html(meta.contents).addClass("pop-up-content");

        return popUpDiv.append(
            title,
            this.getImage(meta),
            blogDetails,
            this.getSummary(meta.summary),
            this.getCloseBtn(),
            content);
    },

    getImage: function(meta)
    {
        const imageMeta = {};

        jQuery(meta.image).each((index, value) => {
            const tagName = jQuery(value).prop("tagName");
            const tagValue = jQuery(value).html();

            if (!!tagName) { imageMeta[tagName.toLowerCase()] = tagValue.trim(); }
        });

        const figure = jQuery("<figure>");
        const image = jQuery("<img>");
        const caption = jQuery("<figcaption>");
        const imgDir = "./images/";
        
        image.attr("id", "pop-up-title-image");
        image.attr("alt", imageMeta.altText);
        image.attr("src", imgDir + imageMeta.filename);

        caption.html(imageMeta.caption);

        figure.append(image, caption);

        return figure;
    },

    getSummary: function(summaryMeta)
    {
        const summaryDiv = jQuery("<div>");
        const header = jQuery("<h4>").html("Summary Points");
        const list = jQuery("<ul>").html(summaryMeta);

        summaryDiv.addClass("summary-points");

        summaryDiv.append(header, list);

        return summaryDiv;
    },

    getCloseBtn: function()
    {
        const closeButton = jQuery("<button>");

        closeButton.attr("id", "pop-up-close-btn");
        closeButton.attr("onclick", "PopUpHandler.destroyPopUp()");
        closeButton.html("x");

        return closeButton;
    },

    destroyPopUp: function()
    {
        jQuery("#pop-up").css({
            "opacity": "0",
            "transition": "200ms"
        });

        setTimeout(function () {
            jQuery("#pop-up").remove();
        }, 190);
    }
}