const PreviewUtil = {
    getMetadata: function(directoryPath)
    {
        const self = this;
        const metadata = [];

        jQuery.ajax({
            url: directoryPath,
            type: "GET",
            async: false,
            success: function(directory)
            {
                jQuery(directory).find("a").each(function()
                {
                    jQuery.ajax({
                        url: jQuery(this).attr("href"),
                        type: "GET",
                        dataType: "xml",
                        async: false,
                        success: (fileContents) => metadata.push(self.xmlParser(fileContents))
                    });
                });
            }
        })

        return metadata;
    },

    xmlParser: function(xml)
    {
        const obj = {};
        const meta = jQuery(xml).contents().children();

        meta.each((index, value) => {
            const tagName = jQuery(value).prop("tagName");
            const tagValue = jQuery(value).html();

            obj[tagName] = tagValue;
        });

        return obj;
    },

    mapMetadata: function(meta)
    {
        const metadata = {};

        jQuery(meta).each((index, value) => {
            const tagName = jQuery(value).prop("tagName");
            const tagValue = jQuery(value).html();

            if (!!tagName) { metadata[tagName.toLowerCase()] = tagValue.trim(); }
        });

        return metadata;
    },

    initClick: function(section, meta)
    {
        return function()
        {
            jQuery(`#${section}`).append(PopUpHandler.createPopUp(meta));
        }
    }
};