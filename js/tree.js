// treeLayout will override the default tree's layout if used
var layoutInfo = {
    startTab: "xp",
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""


}

addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
                style() {return  {'background-color': '#222222'}},

})