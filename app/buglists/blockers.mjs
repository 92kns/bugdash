import * as BugList from "buglist";

/* eslint-disable camelcase */

export function init($container) {
    BugList.append({
        id: "blockers",
        $container: $container,
        title: "Blocker (S1) Defects",
        description:
            "Blocker (S1) defects. " +
            "Bugs with the stalled keyword are ignored.\n" +
            "Bugs are order by last updated, oldest first.\n" +
            "Timestamp shows last modified.",
        query: {
            resolution: "---",
            f1: "bug_severity",
            o1: "anyexact",
            v1: "s1,blocker",
            f2: "keywords",
            o2: "notsubstring",
            v2: "stalled",
            f3: "bug_type",
            o3: "equals",
            v3: "defect",
        },
        usesComponents: true,
        augment: (bug) => {
            bug.timestamp_ago = bug.updated_ago;
            bug.timestamp = bug.updated;
        },
        order: (a, b) => a.updated_epoch - b.updated_epoch,
    });
}
