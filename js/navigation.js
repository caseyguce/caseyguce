// Script for navigation's appearance and adaptivity for different screen sizes.

// Main function for toggling navigation appearance.
// Parameter/s:
//      navButton (element): the navigation button element.
function toggleNav(navButton)
{
    const navDivId = "nav-div";
    const currNavDisplay = getMarginTop(navDivId);
    const navDisplay = toggleElementVisibility(navDivId, currNavDisplay);

    toggleNavButtonContent(navButton, navDisplay);
}

// Gets an element's top margin.
// Parameter/s:
//      elementId (string): the ID of the element.
function getMarginTop(elementId)
{
    return document.getElementById(elementId) ? document.getElementById(elementId).style.marginTop : "0";
}

// Sets the given element's top margin.
// Parameter/s:
//      newDisplayVal (string/px): the new value of the top margin.
function setMarginTop(elementId, newDisplayVal)
{
    document.getElementById(elementId).style.marginTop = newDisplayVal;
}

// This adjusts the given element's top margin. With the
// navigation drawer, it basically toggles its visibility.
// Parameter/s:
//      elementId (string): the ID of the element.
//      elementMarginTop (string/px): the current top margin of the element.
function toggleElementVisibility(elementId, elementMarginTop)
{
    if (elementMarginTop == "-300px" || elementMarginTop == "")
    {
        setMarginTop(elementId, "0");
    }
    else if (window.innerWidth < 800)
    {
        setMarginTop(elementId, "-300px");
    }

    return getMarginTop(elementId);
}

// This toggles the displayed button on the navigation button
// depending on if the navigation drawer is visible or not.
// Parameter/s:
//      navButton (element): the navigation button.
//      navTopMargin (string/px): the navigation drawer's top margin.
function toggleNavButtonContent(navButton, navTopMargin)
{
    const symbol = navTopMargin === "0px" ? "&#x2635;" : "&#x2630;";
    const decoded = jQuery("<div/>").html(symbol).text();
    
    jQuery(navButton).attr("data-content", decoded);
}