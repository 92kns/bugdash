import * as BugList from "buglist";

export function init($container) {
    BugList.append({
        id: "recent-regressions",
        $container: $container,
        title: "Recent Regressions",
        description:
            "Bugs with a regression keyword created in the last 90 days.\n" +
            "Bugs with an open NEEDINFO request are ignored.\n" +
            "Bugs are order by creation date, oldest first.\n" +
            "Timestamp shows bug creation.",
        query: {
            chfield: "[Bug creation]",
            chfieldfrom: "-90d",
            chfieldto: "Now",
            keywords: "regression",
            keywords_type: "allwords",
            resolution: "---",
            f1: "flagtypes.name",
            o1: "notsubstring",
            v1: "needinfo",
        },
        usesComponents: true,
    });
}
