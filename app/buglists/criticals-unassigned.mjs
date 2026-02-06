import * as BugList from "buglist";

export function init($container) {
    BugList.append({
        id: "criticals-unassigned",
        $container: $container,
        title: "Unassigned Critical (S2) Defects",
        description:
            "Critical (S2) defects without an assignee and no pending NEEDINFOs. " +
            "Bugs with stalled or meta keywords are ignored.\n" +
            "Bugs are order by creation date, oldest first.\n" +
            "Timestamp shows bug creation.",
        query: {
            resolution: "---",
            f1: "bug_severity",
            o1: "anyexact",
            v1: "s2,critical",
            f2: "assigned_to",
            o2: "equals",
            v2: "nobody@mozilla.org",
            f3: "flagtypes.name",
            o3: "notsubstring",
            v3: "needinfo",
            f4: "keywords",
            o4: "notsubstring",
            v4: "stalled",
            f5: "keywords",
            o5: "notsubstring",
            v5: "meta",
            f6: "bug_type",
            o6: "equals",
            v6: "defect",
        },
        usesComponents: true,
    });
}
