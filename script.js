/* ─── NMIMS Exam Seating Portal — script.js ─────────────────────── */

const DEFAULT_ROOMS = [
    "E. CR 101", "E. CR 102", "E. CR 103", "E. CR 104", "E. CR 105", "E. CR 106", "E. CR 107", "E. CR 108",
    "E. CR 201", "E. CR 202", "E. CR 203", "E. CR 204", "E. CR 205",
    "E. CR 206", "E. CR 207", "E. CR 208", "E. CR 209",
    "E. CR 301", "E. CR 302", "E. CR 303", "E. CR 304", "E. CR 305", "E. CR 306", "E. CR 307", "E. CR 308", "E. CR 309", "E. CR 310",
    "E. CR 401", "E. CR 402", "E. CR 403", "E. CR 404",
    "E. CR 405", "E. CR 406", "E. CR 407", "E. CR 408",
    "E. CR 501", "E. CR 502", "E. CR 503", "E. CR 504", "E. CR 505",
    "E. CR 506", "E. CR 507", "E. CR 508", "E. CR 509",
    "E. CR 601", "E. CR 602", "E. CR 603", "E. CR 604", "E. CR 605",
    "E. CR 606", "E. CR 607", "E. CR 608", "E. CR 609",
    "E. CR 702", "E. CR 703", "E. CR 704",
    "E. CR 801",
    "E. CR LG1",
    "E. CR G1", "E. CR G2", "E. CR G3", "E. CR G4", "E. CR G5",
    "E. TR 201", "E. TR 202", "E. TR 203", "E. TR 301", "E. TR 302", "E. TR 303",
    "E. TR 501", "E. TR 601"
];


//To delete
// const DEFAULT_ROOMS = [
//   "E. TR 303", "E. CR 304", "E. CR 305", "E. CR 306", "E. CR 307", "E. CR 308",
//   "E. CR 405", "E. CR 406", "E. CR 506", "E. CR 507", "E. CR 606", "E. CR 607", "E. CR 401", "E. CR 601",
//   "E. CR 402", "E. CR 403", "E. CR 404",
//   "E. CR 407", "E. CR 408", "TR 501", "E. CR 501", "E. CR 502", "E. CR 503",
//   "E. CR 504", "E. CR 505", "E. CR 508", "TR 601", "E. CR 602", "E. CR 603",
//   "E. CR 604", "E. CR 605", "E. CR 608", "E. CR 702", "E. CR 703", "E. CR 704",
//   "E. CR 801", "E. CR LG1", "E. CR G1", "E. CR G2", "E. CR G3", "E. CR G5",
//   "E. CR 509", "E. CR G4", "E. CR 107", "E. CR 609",
//   "E. CR 102", "E. CR 103", "E. CR 101", "E. CR 104", "E. CR 105", "E. CR 106",
//   "E. CR 108", "E. CR 201", "E. CR 301", "E. CR 202", "E. CR 203", "E. CR 204", "E. CR 205",
//   "E. CR 206", "E. CR 207", "E. CR 208", "E. CR 209", "E. TR 201", "E. TR 202", "E. TR 203",

// ];

const ROOM_DEFAULTS = {
    "E. CR 101": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 102": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 103": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 104": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 105": {
        layoutType: "auditorium",
        totalRows: 6,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 },  // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ],
    },
    "E. CR 106": {
        layoutType: "auditorium",
        totalRows: 6,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 },  // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ],
    },
    "E. CR 107": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. CR 108": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1: no middle bench
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },


    "E. CR 201": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 1, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 202": {
        layoutType: "straight_quad",
        totalRows: 7,
        rowConfigs: [
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R1
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R2
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R3
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R4
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R5
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R6
            { left: 0, mid1: 2, mid2: 2, right: 2 }, // R7
        ],
        alternateSeating: true
    },
    "E. CR 203": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },

    "E. CR 204": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },

    "E. CR 205": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 206": {
        layoutType: "auditorium",
        totalRows: 4,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 } // R4

        ],
    },
    "E. CR 207": {
        layoutType: "auditorium",
        totalRows: 6,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 },  // R5
            { left: 2, middle: 0, right: 3 }, // R6
        ],
    },
    "E. CR 208": {
        layoutType: "lab",
        totalRows: 10,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. CR 209": {
        layoutType: "lab",
        totalRows: 10,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1: no middle bench
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 },  // R9
            { left: 2, middle: 0, right: 2 },  // R10
        ],
        alternateSeating: true
    },
    "E. TR 201": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 0, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },
    "E. TR 202": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. TR 203": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 0, middle: 0, right: 2 }  // R9
        ],
        alternateSeating: true
    },
    "E. CR 301": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 1, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 302": {
        layoutType: "straight_quad",
        totalRows: 7,
        rowConfigs: [
            { left: 2, mid1: 2, mid2: 0, right: 0 }, // R1
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R2
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R3
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R4
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R5
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R6
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R7
        ],
        alternateSeating: true
    },
    "E. CR 303": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 309": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 0, middle: 0, right: 2 }  // R9
        ],
        alternateSeating: true
    },
    "E. CR 310": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 0, middle: 2, right: 0 }  // R9
        ],
        alternateSeating: true
    },
    "E. CR 509": {
        layoutType: "lab",
        totalRows: 10,
        rowConfigs: [
            { left: 0, middle: 0, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 },  // R9
            { left: 2, middle: 2, right: 2 }  // R10
        ],
        alternateSeating: true
    },

    "E. CR 607": {
        layoutType: "auditorium",
        totalRows: 6,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 },  // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ],
    },
    "E. CR 608": {
        layoutType: "lab",
        totalRows: 10,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 },  // R9
            { left: 2, middle: 2, right: 2 }  // R10
        ],
        alternateSeating: true
    },
    "E. CR 609": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },
    "E. CR 801": {
        layoutType: "lab",
        totalRows: 8,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 } // R8

        ],
        alternateSeating: true
    },
    "E. CR LG1": {
        layoutType: "straight_hexa",
        totalRows: 5,
        rowConfigs: [
            { left: 0, mid1: 0, mid2: 0, mid3: 0, mid4: 0, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, mid4: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, mid4: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, mid4: 2, right: 2 },
            { left: 0, mid1: 2, mid2: 2, mid3: 2, mid4: 2, right: 2 }
        ],
        alternateSeating: true
    },
    "E. CR G1": {
        layoutType: "straight_penta",
        totalRows: 5,
        rowConfigs: [
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 }
        ],
        alternateSeating: true
    },
    "E. CR G2": {
        layoutType: "straight_penta",
        totalRows: 5,
        rowConfigs: [
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 0 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 }
        ],
        alternateSeating: true
    },
    "E. CR G3": {
        layoutType: "straight_penta",
        totalRows: 6,
        rowConfigs: [
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
            { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 }
        ],
        alternateSeating: true
    },
    "E. CR G4": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },

    "E. CR G5": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },
    "E. TR 301": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 2, right: 2 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3 
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 0, middle: 2, right: 2 }, // R8
            { left: 0, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },
    "E. TR 302": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: [
            { left: 2, middle: 0, right: 0 }, // R1
            { left: 2, middle: 2, right: 2 }, // R2
            { left: 2, middle: 2, right: 2 }, // R3 
            { left: 2, middle: 2, right: 2 }, // R4
            { left: 2, middle: 2, right: 2 }, // R5
            { left: 2, middle: 2, right: 2 }, // R6
            { left: 2, middle: 2, right: 2 }, // R7
            { left: 2, middle: 2, right: 2 }, // R8
            { left: 2, middle: 2, right: 2 }  // R9
        ],
        alternateSeating: true
    },













    "E. TR 303": {
        layoutType: "lab",
        totalRows: 8,
        rowConfigs: [
            { left: 0, middle: 0, right: 2 }, // R1
            { left: 2, middle: 0, right: 2 }, // R2
            { left: 2, middle: 0, right: 2 }, // R3
            { left: 2, middle: 0, right: 2 }, // R4
            { left: 2, middle: 0, right: 2 },  // R5
            { left: 2, middle: 0, right: 2 },  // R6
            { left: 2, middle: 0, right: 2 },  // R7
            { left: 2, middle: 0, right: 2 }  // R8
        ],
        alternateSeating: true
    },
    "E. CR 304": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }  // R5
        ],
    },
    "E. CR 405": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },
    "E. CR 406": {
        layoutType: "auditorium",
        totalRows: 6,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },
    "E. CR 506": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },
    "E. CR 507": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },
    "E. CR 606": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },

    "E. CR 703": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },
    "E. CR 704": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
            { left: 3, middle: 0, right: 3 }  // R6
        ]
    },
    "E. CR 401": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 1, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 501": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 1, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 601": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 1, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 402": {
        layoutType: "straight_quad",
        totalRows: 8,
        rowConfigs: [
            { left: 2, mid1: 0, mid2: 0, right: 2 }, // R1
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R2
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R3
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R4
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R5
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R6
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R7
            { left: 2, mid1: 2, mid2: 2, right: 2 }  // R8: Inner columns empty/skipped
        ],
        alternateSeating: true
    },
    "E. CR 403": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 504": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 603": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 404": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 503": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 505": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 604": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 605": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 702": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 2, middle: 0, right: 2 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 407": {
        layoutType: "lab",
        totalRows: 8,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. CR 408": {
        layoutType: "lab",
        totalRows: 8,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. TR 501": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. CR 501": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 4, middle: 0, right: 4 }, // R4
            { left: 4, middle: 0, right: [1, 0, 1, 0] }, // R5
        ]
    },
    "E. CR 502": {
        layoutType: "straight_quad",
        totalRows: 8,
        rowConfigs: [
            { left: 0, mid1: 0, mid2: 0, right: 2 }, // R1
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R2
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R3
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R4
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R5
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R6
            { left: 0, mid1: 2, mid2: 0, right: 2 }, // R7
        ],
        alternateSeating: true
    },
    "E. CR 503": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 4, middle: 0, right: 4 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 504": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 4, middle: 0, right: 4 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 505": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 3, middle: 0, right: 3 }, // R3
            { left: 4, middle: 0, right: 4 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },
    "E. CR 508": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. TR 601": {
        layoutType: "lab",
        totalRows: 9,
        rowConfigs: { left: 2, middle: 2, right: 2 },
        alternateSeating: true
    },
    "E. CR 602": {
        layoutType: "straight_quad",
        totalRows: 8,
        rowConfigs: [
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R1
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R2
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R3
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R4
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R5
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R6
            { left: 2, mid1: 2, mid2: 2, right: 2 }, // R7
        ],
        alternateSeating: true
    },
    "E. CR 603": {
        layoutType: "auditorium",
        totalRows: 5,
        rowConfigs: [
            { left: 3, middle: 0, right: 3 }, // R1
            { left: 4, middle: 0, right: 4 }, // R2
            { left: 4, middle: 0, right: 4 }, // R3
            { left: 3, middle: 0, right: 3 }, // R4
            { left: 3, middle: 0, right: 3 }, // R5
        ]
    },

};
/* ═══════════════════════════════════════════════════════════════════
   NMIMS Supervisor Portal — Application Logic
   -------------------------------------------------------------------
   A "session" is one invigilation unit = Room + Exam Date + Exam Time.
   Every row of the seating plan file belongs to exactly one session,
   and every session produces one supervisor report. Reports are built
   for all sessions automatically once both files are uploaded; the
   room layout is taken from ROOM_DEFAULTS for the allotted room.
   ═══════════════════════════════════════════════════════════════════ */

/* ─── Flat (bench) classrooms ─────────────────────────────────────
   Official bench counts supplied by the examination office. Every
   bench seats two, so a room holds `benches` students under single
   seating and 2 x benches under double seating. Where a room's saved
   layout disagrees with this figure, the figure wins and the row
   arrangement is rebuilt to match it — the report says when that
   happened, because the rebuilt arrangement is an estimate.
   ----------------------------------------------------------------- */
const BENCH_ROOMS = {
    "E. CR 107": 27, "E. CR 108": 26,
    "E. CR G1": 25, "E. CR G2": 24, "E. CR G3": 30, "E. CR G4": 27, "E. CR G5": 27,
    "E. TR 201": 26, "E. TR 202": 26, "E. TR 203": 25,
    "E. CR 202": 27, "E. CR 208": 30, "E. CR 209": 29,
    "E. TR 301": 25, "E. TR 302": 25, "E. TR 303": 23, "E. CR 302": 25,
    "E. TR 401": 26, "E. CR 402": 30, "E. CR 407": 27, "E. CR 408": 27,
    "E. TR 501": 26, "E. CR 502": 27, "E. CR 508": 26, "E. CR 509": 28,
    "E. TR 601": 26, "E. CR 602": 28, "E. CR 608": 30, "E. CR 609": 27,
    "E. CR 801": 24
};

/* Match a room name whatever prefix the spreadsheet uses, so
   "CR 508", "E. CR 508" and "E.CR508" all resolve to the same room. */
function benchCountFor(room) {
    const want = squash(room).replace(/^e/, "");
    for (const key of Object.keys(BENCH_ROOMS)) {
        if (squash(key).replace(/^e/, "") === want) return BENCH_ROOMS[key];
    }
    return null;
}

/* ─── Institute branding ──────────────────────────────────────────
   Everything that appears in the report header is set here, so
   rebranding means editing these four lines and nothing else.
   ---------------------------------------------------------------
   crest   short text in the badge (2-8 characters), or "" to hide it
   logo    path to an image file, e.g. "logo.png" — used instead of
           the crest text when it is set; put the file next to
           index.html. The badge sizes itself to whatever you give it.
   ----------------------------------------------------------------- */
const INSTITUTE = {
    crest: "MPSTME",
    logo: "",
    name: "SVKM's NMIMS",
    tagline: "Narsee Monjee Institute of Management Studies \u00b7 Deemed to be University"
};

/* Column order used when filling seats, per layout type. */
const SIDE_ORDER = {
    auditorium: ["left", "middle", "right"],
    lab: ["left", "middle", "right"],
    straight_quad: ["left", "mid1", "mid2", "right"],
    straight_penta: ["left", "mid1", "mid2", "mid3", "right"],
    straight_hexa: ["left", "mid1", "mid2", "mid3", "mid4", "right"]
};

const MONTHS = {
    jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2, apr: 3, april: 3,
    may: 4, jun: 5, june: 5, jul: 6, july: 6, aug: 7, august: 7, sep: 8, sept: 8,
    september: 8, oct: 9, october: 9, nov: 10, november: 10, dec: 11, december: 11
};

/* ─── State ──────────────────────────────────────────────────────── */
const state = {
    rollFile: null,
    metaFile: null,
    rollData: null,
    metaData: null,
    sessions: [],          // every generated report, date-ordered
    view: [],              // indices of sessions matching the active filter
    current: 0,            // index into state.sessions
    overrides: {},         // room name -> { layoutType, totalRows, rowConfigs }
    academicYear: "",
    examType: "Final Exam",
    interleaveBatches: false,
    startDirection: "left",
    scale: "lg",
    printMode: "sidebyside", // "sidebyside" = one sheet, records in a right column
                             // "stacked"     = one sheet, records below the plan
                             // "full"        = two sheets, largest type
    allRendered: false
};

const uploadView = () => document.getElementById("uploadView");
const reportView = () => document.getElementById("reportView");
const $ = (id) => document.getElementById(id);

/* ─── Report tweaks that live in script.js ────────────────────────
   Two things the stylesheet would normally carry:
     - the small labels (ACADEMIC YEAR, EXAM DATE and the rest) were a
       light grey that does not come out well on a printer;
     - each signature sits on one line, "Supervisor 1 ________", so the
       block takes a single line instead of three.
   They live here so the portal needs only script.js updating; move
   them into style.css whenever convenient.
   ----------------------------------------------------------------- */
const REPORT_LABEL_CSS = `
  .mb-label, .ts-label, .acc-f-label, .sig-meta, .sig-meta span {
      color: #262320 !important;
      font-weight: 700 !important;
  }
  .acc-cap, .section-heading, .sig-label { color: #10234b !important; }

  /* (R) beside a roll number sitting a re-examination */
  .seat-box.is-repeat { white-space: nowrap; }
  .seat-re {
      font-size: .60em;
      font-weight: 700;
      margin-left: .28em;
      position: relative;
      top: -.08em;
  }

  /* "Supervisor 1 ______________" on a single line */
  .sig-item.sig-inline {
      display: flex;
      align-items: baseline;
      gap: 8px;
      min-width: 0;
  }
  .sig-item.sig-inline .sig-label {
      flex: 0 0 auto;
      margin-bottom: 0 !important;
      white-space: nowrap;
  }
  .sig-item.sig-inline .sig-rule {
      flex: 1 1 auto;
      min-width: 25mm;
      border-bottom: 1px solid #262320;
      align-self: flex-end;
  }

  @media print {
      .mb-label, .ts-label, .acc-f-label, .sig-meta, .sig-meta span {
          color: #000 !important;
          font-weight: 700 !important;
      }
      .acc-cap, .section-heading, .sig-label { color: #10234b !important; }
      .sig-item.sig-inline { gap: 2.5mm !important; }
      .sig-item.sig-inline .sig-rule { border-bottom: .7pt solid #000 !important; }
  }
`;

function applyReportLabelStyle() {
    if (document.getElementById("reportLabelStyle")) return;
    const el = document.createElement("style");
    el.id = "reportLabelStyle";
    el.textContent = REPORT_LABEL_CSS;
    document.head.appendChild(el);
}

/* ─── Init ───────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
    applyReportLabelStyle();
    loadSavedLayouts();
    bindUploadCards();
    bindSidebarControls();
    bindToolbar();
    bindGenerateBtn();
    applyScale(state.scale);
    applyPrintMode(state.printMode);

    if (typeof DecompressionStream === "undefined") {
        setStatus("This browser is too old to read .xlsx files. "
            + "Please use a current version of Chrome, Edge or Firefox.", true);
    }
});

/* ─── Small helpers ──────────────────────────────────────────────── */
function normalizeStr(s) {
    if (s === 0) return "0";
    if (!s) return "";
    return String(s).trim().toLowerCase().replace(/\s+/g, " ");
}

function squash(s) {
    return normalizeStr(s).replace(/[\s.\-_]/g, "");
}

function titleCaseSubject(s) {
    const str = String(s || "").trim();
    if (!str) return "";
    if (str !== str.toUpperCase()) return str;          // already mixed case
    return str.toLowerCase().replace(/\b([a-z])/g, (m, c) => c.toUpperCase());
}

function extractNum(val) {
    const m = String(val).match(/\d+/);
    return m ? parseInt(m[0], 10) : NaN;
}

function pick(row, names, fallback = "") {
    for (const n of names) {
        if (row[n] !== undefined && row[n] !== null && String(row[n]).trim() !== "") return row[n];
    }
    // tolerate stray spaces / case differences in the header cell
    const wanted = names.map(squash);
    for (const key of Object.keys(row)) {
        if (wanted.includes(squash(key)) && String(row[key]).trim() !== "") return row[key];
    }
    return fallback;
}

function setStatus(msg, isError = false) {
    const el = $("statusLine");
    if (!el) return;
    el.textContent = msg || "";
    el.classList.toggle("is-error", !!isError);
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ─── Date handling ──────────────────────────────────────────────── */
function parseExamDate(val) {
    if (!val) return null;
    if (val instanceof Date && !isNaN(val)) return val;

    const s = String(val).trim().replace(/^[A-Za-z]+,\s*/, "");   // drop weekday
    let m = s.match(/^(\d{1,2})[\s,]+([A-Za-z]+)[\s,]+(\d{4})$/); // 25 November, 2025
    if (m) {
        const mo = MONTHS[m[2].toLowerCase()];
        if (mo !== undefined) return new Date(+m[3], mo, +m[1]);
    }
    m = s.match(/^([A-Za-z]+)[\s,]+(\d{1,2})[\s,]+(\d{4})$/);     // November 25, 2025
    if (m) {
        const mo = MONTHS[m[1].toLowerCase()];
        if (mo !== undefined) return new Date(+m[3], mo, +m[2]);
    }
    m = s.match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{2,4})$/);     // 25-11-2025
    if (m) {
        const yr = +m[3] < 100 ? 2000 + +m[3] : +m[3];
        return new Date(yr, +m[2] - 1, +m[1]);
    }
    const d = new Date(s);
    return isNaN(d) ? null : d;
}

/* Local-date key. toISOString() would shift the day for anyone east or
   west of UTC (IST is +05:30), so the key is built from local parts. */
function dateKeyOf(dateObj) {
    const pad = (n) => String(n).padStart(2, "0");
    return dateObj.getFullYear() + "-" + pad(dateObj.getMonth() + 1) + "-" + pad(dateObj.getDate());
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* The weekday printed on the report is the one written in the seating
   plan file, never a recomputed one — the file is the official document.
   If the two disagree, say so instead of quietly changing it. */
function formatDateLong(dateObj, raw) {
    const str = String(raw || "").trim();
    if (/^[A-Za-z]{3,9}\s*,/.test(str)) {
        return str.replace(/\s*,\s*/g, ", ").replace(/,\s*(\d{4})$/, " $1");
    }
    if (!dateObj) return str || "—";
    return dateObj.toLocaleDateString("en-GB", {
        weekday: "long", day: "2-digit", month: "long", year: "numeric"
    });
}

/* Returns the weekday named in the raw value, when it names one. */
function statedWeekday(raw) {
    const m = String(raw || "").trim().match(/^([A-Za-z]{3,9})\s*,/);
    if (!m) return null;
    const name = m[1].toLowerCase();
    const hit = WEEKDAYS.find((w) => w.toLowerCase().startsWith(name.slice(0, 3)));
    return hit || null;
}

function formatDateShort(dateObj, raw) {
    if (!dateObj) return String(raw || "—").trim() || "—";
    return dateObj.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function normalizeTime(val) {
    if (val instanceof Date && !isNaN(val)) {
        return val.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    }
    return String(val || "").trim().replace(/\s*-\s*/g, " – ").replace(/\s+/g, " ") || "—";
}

function formatSemester(val) {
    const s = String(val || "").trim();
    if (!s) return "—";
    const cleaned = s.replace(/^semester\s*/i, "").replace(/^sem\.?\s*/i, "").trim();
    return cleaned ? "Semester " + cleaned : s;
}

/* ─── Upload handling ────────────────────────────────────────────── */
function bindUploadCards() {
    bindOneUpload("rollUpload", "rollCard", "rollFilename", (file) => {
        state.rollFile = file;
        parseExcel(file, (data) => {
            state.rollData = data;
            setStatus(`Roll list loaded — ${data.length} rows.`);
            maybeAutoGenerate();
        });
    });
    bindOneUpload("metaUpload", "metaCard", "metaFilename", (file) => {
        state.metaFile = file;
        parseExcel(file, (data) => {
            state.metaData = data;
            setStatus(`Seating plan loaded — ${data.length} allocations.`);
            maybeAutoGenerate();
        });
    });
}

function bindOneUpload(inputId, cardId, filenameId, callback) {
    const input = $(inputId);
    const card = $(cardId);
    const filenameEl = $(filenameId);
    if (!input || !card) return;

    const accept = (file) => {
        if (!file) return;
        card.classList.add("uploaded");
        filenameEl.textContent = file.name;
        callback(file);
    };

    input.addEventListener("change", (e) => accept(e.target.files[0]));
    card.addEventListener("dragover", (e) => { e.preventDefault(); card.classList.add("drag-over"); });
    card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
    card.addEventListener("drop", (e) => {
        e.preventDefault();
        card.classList.remove("drag-over");
        accept(e.dataTransfer.files[0]);
    });
}

/* ═══════════════════════════════════════════════════════════════════
   Built-in .xlsx reader
   -------------------------------------------------------------------
   An .xlsx file is a ZIP of XML parts. Reading it here — rather than
   fetching a library from a CDN — means the portal keeps working with
   no internet connection and behind the campus firewall.
   ═══════════════════════════════════════════════════════════════════ */

/* ZIP: read the central directory, then each entry's data. */
async function unzip(buffer) {
    const view = new DataView(buffer);
    const bytes = new Uint8Array(buffer);

    // End of central directory record, scanning back over the comment
    let eocd = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 66000); i--) {
        if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error("not a valid .xlsx file (no ZIP directory)");

    const count = view.getUint16(eocd + 10, true);
    let ptr = view.getUint32(eocd + 16, true);

    const files = new Map();
    for (let i = 0; i < count; i++) {
        if (view.getUint32(ptr, true) !== 0x02014b50) break;
        const method = view.getUint16(ptr + 10, true);
        const compSize = view.getUint32(ptr + 20, true);
        const nameLen = view.getUint16(ptr + 28, true);
        const extraLen = view.getUint16(ptr + 30, true);
        const commentLen = view.getUint16(ptr + 32, true);
        const localOff = view.getUint32(ptr + 42, true);
        const name = new TextDecoder().decode(bytes.subarray(ptr + 46, ptr + 46 + nameLen));

        // local header tells us where the data actually starts
        const lNameLen = view.getUint16(localOff + 26, true);
        const lExtraLen = view.getUint16(localOff + 28, true);
        const dataStart = localOff + 30 + lNameLen + lExtraLen;

        files.set(name, { method, data: bytes.subarray(dataStart, dataStart + compSize) });
        ptr += 46 + nameLen + extraLen + commentLen;
    }
    return files;
}

async function inflateRaw(bytes) {
    const stream = new Blob([bytes]).stream()
        .pipeThrough(new DecompressionStream("deflate-raw"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function zipText(files, name) {
    const entry = files.get(name);
    if (!entry) return null;
    const raw = entry.method === 0 ? entry.data : await inflateRaw(entry.data);
    return new TextDecoder().decode(raw);
}

function parseXml(text) {
    const doc = new DOMParser().parseFromString(text, "application/xml");
    if (doc.querySelector("parsererror")) throw new Error("the file's XML could not be read");
    return doc;
}

/* "BC7" -> column 54 (zero-based) */
function colOf(ref) {
    let n = 0;
    for (const ch of ref) {
        const c = ch.charCodeAt(0);
        if (c < 65 || c > 90) break;
        n = n * 26 + (c - 64);
    }
    return n - 1;
}

/* Excel serial -> Date (epoch 1899-12-30 absorbs the 1900 leap-year bug) */
function excelDate(serial) {
    const ms = Math.round(serial * 86400000);
    return new Date(Date.UTC(1899, 11, 30) + ms);
}

const BUILTIN_DATE_FMTS = new Set([14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 46, 47]);

/* Which style indexes format their number as a date */
function dateStyles(stylesXml) {
    const set = new Set();
    if (!stylesXml) return set;
    let doc;
    try { doc = parseXml(stylesXml); } catch (e) { return set; }

    const custom = new Map();
    doc.querySelectorAll("numFmts > numFmt").forEach((f) => {
        const id = parseInt(f.getAttribute("numFmtId"), 10);
        const code = (f.getAttribute("formatCode") || "").replace(/\[[^\]]*\]/g, "").replace(/"[^"]*"/g, "");
        if (/[dmyhs]/i.test(code) && /[dy]/i.test(code)) custom.set(id, true);
    });

    const xfs = doc.querySelector("cellXfs");
    if (!xfs) return set;
    Array.from(xfs.children).forEach((xf, i) => {
        const id = parseInt(xf.getAttribute("numFmtId") || "0", 10);
        if (BUILTIN_DATE_FMTS.has(id) || custom.get(id)) set.add(i);
    });
    return set;
}

/* Reads the first worksheet into the same shape SheetJS produced:
   an array of objects keyed by the header row, blanks as "". */
async function readXlsx(buffer) {
    const files = await unzip(buffer);

    const wbXml = await zipText(files, "xl/workbook.xml");
    if (!wbXml) throw new Error("this is not an .xlsx workbook");

    // first sheet, resolved through the relationship id
    const wb = parseXml(wbXml);
    const sheet = wb.querySelector("sheets > sheet");
    if (!sheet) throw new Error("the workbook has no sheets");
    const rid = sheet.getAttribute("r:id") || sheet.getAttribute("id");

    let target = null;
    const relsXml = await zipText(files, "xl/_rels/workbook.xml.rels");
    if (relsXml && rid) {
        const rel = Array.from(parseXml(relsXml).querySelectorAll("Relationship"))
            .find((r) => r.getAttribute("Id") === rid);
        if (rel) target = rel.getAttribute("Target");
    }
    let path = target ? (target.startsWith("/") ? target.slice(1)
        : target.startsWith("xl/") ? target : "xl/" + target)
        : "xl/worksheets/sheet1.xml";
    if (!files.has(path)) path = "xl/worksheets/sheet1.xml";

    const sheetXml = await zipText(files, path);
    if (!sheetXml) throw new Error("the first worksheet could not be found");

    // shared strings
    const shared = [];
    const sstXml = await zipText(files, "xl/sharedStrings.xml");
    if (sstXml) {
        const sst = parseXml(sstXml).documentElement;
        const items = sst ? sst.children : [];
        for (let i = 0; i < items.length; i++) {
            const si = items[i];
            if (si.tagName !== "si") continue;
            let out = "";
            const kids = si.children;
            for (let k = 0; k < kids.length; k++) {
                const kid = kids[k];
                if (kid.tagName === "t") out += kid.textContent;
                else if (kid.tagName === "r") {
                    const ts = kid.getElementsByTagName("t");
                    for (let n = 0; n < ts.length; n++) out += ts[n].textContent;
                }
            }
            shared.push(out);
        }
    }

    const dateFmt = dateStyles(await zipText(files, "xl/styles.xml"));

    // cells -> a grid
    const grid = [];
    /* Walking the DOM children directly rather than running a selector per
       cell: a 58,000-row roll call has a third of a million cells, and
       querySelector on each one is far too slow. */
    const sheetDoc = parseXml(sheetXml);
    const sheetData = sheetDoc.getElementsByTagName("sheetData")[0];
    const rowEls = sheetData ? sheetData.children : [];

    for (let ri = 0; ri < rowEls.length; ri++) {
        const row = rowEls[ri];
        if (row.tagName !== "row") continue;
        const rowIdx = parseInt(row.getAttribute("r"), 10) - 1;
        const cells = [];
        let auto = 0;

        const cellEls = row.children;
        for (let ci2 = 0; ci2 < cellEls.length; ci2++) {
            const c = cellEls[ci2];
            if (c.tagName !== "c") continue;
            const ref = c.getAttribute("r");
            const ci = ref ? colOf(ref) : auto;
            auto = ci + 1;

            const type = c.getAttribute("t");
            let value = "";

            if (type === "inlineStr") {
                const is = c.getElementsByTagName("t")[0];
                value = is ? is.textContent : "";
            } else {
                let raw = "";
                const kids = c.children;
                for (let k = 0; k < kids.length; k++) {
                    if (kids[k].tagName === "v") { raw = kids[k].textContent; break; }
                }
                if (raw === "") value = "";
                else if (type === "s") value = shared[parseInt(raw, 10)] ?? "";
                else if (type === "str") value = raw;
                else if (type === "b") value = raw === "1";
                else if (type === "e") value = "";
                else {
                    const num = parseFloat(raw);
                    const st = parseInt(c.getAttribute("s") || "-1", 10);
                    value = (!isNaN(num) && dateFmt.has(st)) ? excelDate(num)
                        : (isNaN(num) ? raw : num);
                }
            }
            cells[ci] = value;
        }
        grid[isNaN(rowIdx) ? grid.length : rowIdx] = cells;
    }

    // first non-empty row is the header
    const notEmpty = (r) => r && r.some((v) => v !== undefined && v !== "" && v !== null);
    const headerIdx = grid.findIndex(notEmpty);
    if (headerIdx < 0) return [];

    const seen = new Map();
    const header = (grid[headerIdx] || []).map((h, i) => {
        let name = (h === undefined || h === null || h === "") ? "__EMPTY" + (i ? "_" + i : "") : String(h);
        if (seen.has(name)) {
            const n = seen.get(name) + 1;
            seen.set(name, n);
            name = name + "_" + n;
        } else seen.set(name, 0);
        return name;
    });

    const out = [];
    for (let r = headerIdx + 1; r < grid.length; r++) {
        const row = grid[r];
        if (!notEmpty(row)) continue;
        const obj = {};
        header.forEach((key, i) => {
            const v = row[i];
            obj[key] = (v === undefined || v === null) ? "" : v;
        });
        out.push(obj);
    }
    return out;
}

/* Reads the workbook, preferring the built-in reader. */
function parseExcel(file, callback) {
    const name = (file.name || "").toLowerCase();
    if (name.endsWith(".xls")) {
        setStatus("This is an old .xls file. Open it in Excel and use "
            + "Save As → Excel Workbook (.xlsx), then upload again.", true);
        return;
    }

    const reader = new FileReader();
    reader.onerror = () => setStatus("The file could not be read from disk.", true);
    reader.onload = async (e) => {
        try {
            const rows = await readXlsx(e.target.result);
            if (!rows.length) {
                setStatus("No rows found in the first sheet of " + file.name + ".", true);
                return;
            }
            callback(rows);
        } catch (err) {
            // fall back to SheetJS if a copy happens to be available
            if (window.XLSX) {
                try {
                    const wb = XLSX.read(new Uint8Array(e.target.result), { type: "array", cellDates: true });
                    callback(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: "" }));
                    return;
                } catch (e2) { /* fall through to the message below */ }
            }
            setStatus("Could not read " + file.name + ": " + err.message, true);
        }
    };
    reader.readAsArrayBuffer(file);
}

/* Both files present -> build every report straight away. */
function maybeAutoGenerate() {
    const ready = state.rollData && state.metaData;
    const btn = $("generateBtn");
    if (btn) btn.disabled = !ready;
    if (ready) generateAll();
}

function bindGenerateBtn() {
    const btn = $("generateBtn");
    if (!btn) return;
    btn.disabled = true;
    btn.addEventListener("click", () => {
        if (!state.rollData || !state.metaData) {
            setStatus("Please upload both the roll list and the seating plan.", true);
            return;
        }
        generateAll();
    });
}

/* ─── Roll number ranges ─────────────────────────────────────────── */
function parseRollRange(rangeStr) {
    const results = [];
    const str = String(rangeStr || "");
    for (const part of str.split(/[,;]/).map((p) => p.trim()).filter(Boolean)) {
        const seg = part.split(/\s*(?:-|–|—|to)\s*/i).filter(Boolean);
        const a = seg[0] || "";
        const b = seg.length > 1 ? seg[seg.length - 1] : a;
        const prefix = (a.match(/[A-Za-z]+/) || [""])[0];
        const start = extractNum(a);
        const end = extractNum(b);
        if (!isNaN(start) && !isNaN(end)) {
            results.push({ prefix, start: Math.min(start, end), end: Math.max(start, end) });
        }
    }
    return results;
}

function rollInRanges(roll, ranges) {
    const s = String(roll).trim();
    const prefix = (s.match(/[A-Za-z]+/) || [""])[0];
    const num = extractNum(s);
    if (isNaN(num)) return false;
    return ranges.some((r) =>
        num >= r.start && num <= r.end && normalizeStr(prefix) === normalizeStr(r.prefix));
}

/* ─── Reading the roll call file ───────────────────────────────────
   The roll call export and the seating plan are produced by different
   offices and do not name their columns the same way, nor spell their
   programmes the same way. These helpers reconcile the two.
   ----------------------------------------------------------------- */
const COL = {
    roll:    /^roll(no|number)?$/,
    subject: /^subject/,
    prog:    /^prog/,                  // "Prog. Name & Stream" or "Program & Stream"
    sem:     /^sem/
};

const colKey = (k) => String(k).toLowerCase().replace(/[^a-z0-9]/g, "");

function pickBy(row, pattern, fallback = "") {
    for (const key of Object.keys(row)) {
        if (!pattern.test(colKey(key))) continue;
        const v = row[key];
        if (v !== undefined && v !== null && String(v).trim() !== "") return v;
    }
    return fallback;
}

function hasColumnBy(rows, pattern) {
    return (rows || []).some((r) => String(pickBy(r, pattern)).trim() !== "");
}

/* "Semester III", "Sem III" and " III" all reduce to "iii". */
function canonSemester(v) {
    return String(v || "").toLowerCase()
        .replace(/semester|sem\.?/g, "").replace(/[^a-z0-9]/g, "").trim();
}

/* The plan writes "MBA Tech DS"; the roll call writes "MASTER OF BUSINESS
   ADMINISTRATION IN TECHNOLOGY MANAGEMENT (DATA SCIENCE)". Both reduce to
   degree + stream, with six-year integrated programmes kept distinct. */
const DEGREES = [
    [/masterofbusinessadministration|mbatech|^mba/, "mbatech"],
    [/masterofcomputerapplications|^mca/, "mca"],
    [/masteroftechnology|^mtech/, "mtech"],
    [/bacheloroftechnology|^btech/, "btech"],
    [/diploma/, "diploma"]
];
const STREAMS = [
    [/computerscienceandbusinesssystems|csbs/, "csbs"],
    [/computerscienceandengineering.*cybersecurity|csecs/, "csecs"],
    [/computerscienceandengineering.*datascience|cseds/, "cseds"],
    [/computerscienceandengineering|compsciandeng/, "cse"],
    [/artificialintelligence|(^|[^a-z])ai([^a-z]|$)/, "ai"],
    [/datascience|(^|[^a-z])ds([^a-z]|$)/, "ds"],
    [/informationtechnology|(^|[^a-z])it([^a-z]|$)/, "it"],
    [/electronics.*telecommunication|extc/, "extc"],
    [/mechatronics|mxtc/, "mxtc"],
    [/mechanical|mecheng|(^|[^a-z])mech([^a-z]|$)/, "mech"],
    [/civil/, "civil"],
    [/computerengineering|compeng|computer/, "computer"]
];

/* Words that carry no stream information, removed so that a short code
   like "B Tech AI" is left as just "ai". */
const PROG_FILLER = /bacheloroftechnology|masterofbusinessadministrationintechnologymanagement|masteroftechnology|masterofcomputerapplications|btech|mbatech|mtech|mba|mca|diploma|sixyearsintegratedprogram|integratedprogram|integrated|intg|programme|program|engineering/g;

/* Short codes, longest first so "cseds" wins over "cse". */
const STREAM_CODES = [
    ["compsciandeng", "cse"], ["csecs", "csecs"], ["cseds", "cseds"], ["csbs", "csbs"],
    ["compeng", "computer"], ["computer", "computer"], ["cse", "cse"],
    ["mecheng", "mech"], ["mech", "mech"], ["mxtc", "mxtc"], ["extc", "extc"],
    ["civil", "civil"], ["ai", "ai"], ["ds", "ds"], ["it", "it"]
];

/* Both spellings are reduced to "degree:stream", with six-year
   integrated programmes kept apart. "B Tech AI" and "BACHELOR OF
   TECHNOLOGY (ARTIFICIAL INTELLIGENCE)" meet in the middle. */
function canonProgramme(v) {
    const flat = String(v || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!flat) return "";
    const degree = (DEGREES.find(([re]) => re.test(flat)) || [, ""])[1];
    if (degree === "mca") return "mca:";                    // no stream to speak of

    let stream = (STREAMS.find(([re]) => re.test(flat)) || [, ""])[1];
    if (!stream) {                                          // a short code such as "B Tech AI"
        const rest = flat.replace(PROG_FILLER, "").replace(/^in/, "");
        const hit = STREAM_CODES.find(([code]) => rest.startsWith(code));
        if (hit) stream = hit[1];
    }
    const integrated = /integrated|intg/.test(flat) ? "+i" : "";
    return degree + ":" + stream + integrated;
}

/* The roll call runs to tens of thousands of rows and every allocation
   searches it, so it is indexed once by roll-number prefix. */
function rollIndex() {
    if (state._rollIndex && state._rollIndexFor === state.rollData) return state._rollIndex;
    const idx = new Map();
    for (const st of state.rollData || []) {
        const roll = String(pickBy(st, COL.roll)).trim();
        const m = roll.match(/^([A-Za-z]+)\s*0*(\d+)$/);
        if (!m) continue;
        const key = m[1].toUpperCase();
        if (!idx.has(key)) idx.set(key, []);
        idx.get(key).push({
            roll,
            num: parseInt(m[2], 10),
            subject: normalizeStr(pickBy(st, COL.subject)),
            prog: canonProgramme(pickBy(st, COL.prog)),
            sem: canonSemester(pickBy(st, COL.sem))
        });
    }
    state._rollIndex = idx;
    state._rollIndexFor = state.rollData;
    return idx;
}

/* A subject written like "Calculus (Re 2024-2025)" is a re-examination,
   and its students are marked (R) on the report. The bracket and the
   word "Re" are both required, so a subject such as "(Research Methods)"
   is not caught. */
function isRepeatSubject(name) {
    return /\(\s*re\b[^)]*\)/i.test(String(name || ""));
}

/* Roll numbers in order: letter prefix first, then the number. */
function sortRolls(list) {
    return list.slice().sort((a, b) => {
        const pa = (a.match(/[A-Za-z]+/) || [""])[0], pb = (b.match(/[A-Za-z]+/) || [""])[0];
        return pa === pb ? extractNum(a) - extractNum(b) : pa.localeCompare(pb);
    });
}

/* Students for one allocation row. A roll number is seated only when it
   appears in the roll call file for that subject and that semester, and
   for that programme where the two files' programme names correspond. */
function studentsForAllocation(metaRow, ranges) {
    const data = state.rollData || [];
    const wantSubject = normalizeStr(pick(metaRow, ["Subject", "Subjects"]));
    const wantProg = canonProgramme(pickBy(metaRow, COL.prog));
    const wantSem = canonSemester(pickBy(metaRow, COL.sem));

    const hasSubjectCol = hasColumnBy(data, COL.subject);
    const hasProgCol = hasColumnBy(data, COL.prog);
    const hasSemCol = hasColumnBy(data, COL.sem);

    const idx = rollIndex();
    let rows = [];
    for (const r of ranges) {
        const bucket = idx.get(String(r.prefix).toUpperCase()) || [];
        for (const st of bucket) if (st.num >= r.start && st.num <= r.end) rows.push(st);
    }
    const inRangeCount = rows.length;

    let droppedSubject = 0, droppedSemester = 0, droppedProgramme = 0, progIgnored = false;

    if (wantSubject && hasSubjectCol) {
        const before = rows.length;
        rows = rows.filter((st) => st.subject === wantSubject);
        droppedSubject = before - rows.length;
    }
    // the semester is what separates two intakes sharing a roll range
    if (wantSem && hasSemCol) {
        const before = rows.length;
        rows = rows.filter((st) => st.sem === wantSem);
        droppedSemester = before - rows.length;
    }
    if (wantProg && hasProgCol) {
        const kept = rows.filter((st) => st.prog === wantProg);
        if (kept.length || !rows.length) {
            droppedProgramme = rows.length - kept.length;
            rows = kept;
        } else {
            // the two files name programmes differently; say so rather
            // than seating nobody
            progIgnored = true;
        }
    }

    const rolls = [];
    const seen = new Set();
    for (const st of rows) if (!seen.has(st.roll)) { seen.add(st.roll); rolls.push(st.roll); }
    rolls.sort((a, b) => {
        const pa = (a.match(/[A-Za-z]+/) || [""])[0], pb = (b.match(/[A-Za-z]+/) || [""])[0];
        return pa === pb ? extractNum(a) - extractNum(b) : pa.localeCompare(pb);
    });

    return {
        rolls, inRangeCount, droppedSubject, droppedSemester, droppedProgramme, progIgnored,
        noSubjectColumn: !!wantSubject && !hasSubjectCol,
        noProgrammeColumn: !!wantProg && !hasProgCol
    };
}

/* ─── Room layout ────────────────────────────────────────────────── */
function cloneRowConfigs(defaults, layoutType, totalRows) {
    const sides = SIDE_ORDER[layoutType] || SIDE_ORDER.auditorium;
    const blank = () => {
        const c = {};
        sides.forEach((s) => { c[s] = 0; });
        return c;
    };
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
        const cfg = blank();
        let src = null;
        if (Array.isArray(defaults)) src = defaults[i];
        else if (defaults) src = defaults;                   // uniform config
        if (src) sides.forEach((s) => { cfg[s] = Number(src[s]) || 0; });
        rows.push(cfg);
    }
    return rows;
}

/* Rooms absent from ROOM_DEFAULTS get a sensible auditorium that fits. */
function autoFitLayout(count) {
    const perRow = 6;
    const rows = Math.max(4, Math.min(25, Math.ceil((count || 1) / perRow)));
    return {
        layoutType: "auditorium",
        totalRows: rows,
        rowConfigs: Array.from({ length: rows }, () => ({ left: 3, middle: 0, right: 3 })),
        alternateSeating: false,
        isFallback: true
    };
}

/* Rebuilds a flat room as an even bench grid holding exactly `benches`
   benches, keeping the room's own layout type and its widest row shape.
   The short row goes nearest the board, which is how these rooms are
   actually laid out. */
function benchGrid(layoutType, benches, template) {
    const sides = SIDE_ORDER[layoutType] || SIDE_ORDER.auditorium;
    const perRow = sides.reduce((a, side) => a + Math.floor((Number(template[side]) || 0) / 2), 0) || 3;
    const full = Math.floor(benches / perRow);
    const rest = benches % perRow;

    const rows = [];
    if (rest) {                                   // short row first, nearest the board
        const cfg = {};
        let left = rest;
        sides.forEach((side) => {
            const cap = Math.floor((Number(template[side]) || 0) / 2);
            const take = Math.min(cap, left);
            cfg[side] = take * 2;
            left -= take;
        });
        rows.push(cfg);
    }
    for (let i = 0; i < full; i++) {
        const cfg = {};
        sides.forEach((side) => { cfg[side] = Number(template[side]) || 0; });
        rows.push(cfg);
    }
    return rows;
}

function getRoomLayout(room, count) {
    const override = state.overrides[room];
    if (override) return JSON.parse(JSON.stringify(override));

    const benches = benchCountFor(room);
    const d = ROOM_DEFAULTS[room];

    if (!d) {
        if (benches) {                            // known flat room, no saved layout
            const template = { left: 2, middle: 2, right: 2 };
            const rowConfigs = benchGrid("lab", benches, template);
            return {
                layoutType: "lab", totalRows: rowConfigs.length, rowConfigs,
                alternateSeating: true, isFallback: false,
                benchRoom: true, benchTarget: benches, benchRebuilt: true
            };
        }
        return autoFitLayout(count);
    }

    const layoutType = d.layoutType || "auditorium";
    const totalRows = d.totalRows || 6;
    const layout = {
        layoutType,
        totalRows,
        rowConfigs: cloneRowConfigs(d.rowConfigs, layoutType, totalRows),
        alternateSeating: !!d.alternateSeating,
        isFallback: false,
        benchRoom: !!benches,
        benchTarget: benches
    };

    // the examination office's bench count is the authority
    if (benches) {
        const have = usableSeats(layout, "single");
        if (have !== benches) {
            const sides = SIDE_ORDER[layoutType] || SIDE_ORDER.auditorium;
            const widest = layout.rowConfigs.reduce((best, cfg) => {
                const w = sides.reduce((a, x) => a + (Number(cfg[x]) || 0), 0);
                const bw = sides.reduce((a, x) => a + (Number(best[x]) || 0), 0);
                return w > bw ? cfg : best;
            }, layout.rowConfigs[0] || {});
            layout.rowConfigs = benchGrid(layoutType, benches, widest);
            layout.totalRows = layout.rowConfigs.length;
            layout.benchRebuilt = true;
            layout.benchWas = have;
        }
    }
    return layout;
}

/* Seats a layout can actually use. Under single seating no two occupied
   seats may touch, so a block of n seats holds ceil(n / 2) students. */
function usableSeats(layout, density) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    return layout.rowConfigs.reduce((sum, cfg) => sum + sides.reduce((a, side) => {
        const n = Number(cfg[side]) || 0;
        return a + (density === "single" ? Math.ceil(n / 2) : n);
    }, 0), 0);
}

function countSeats(layout) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    return layout.rowConfigs.reduce((sum, cfg) =>
        sum + sides.reduce((a, s) => a + (Number(cfg[s]) || 0), 0), 0);
}

/* A supervisor report must never drop a student. If the saved layout for
   the room holds fewer seats than the students allotted to it, extend it
   with extra rows (shaped like the widest existing row) and report it. */
function fitLayoutToStudents(layout, count, density) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    const rowSeats = (cfg) => sides.reduce((a, s) => a + (Number(cfg[s]) || 0), 0);
    const rowHolds = (cfg) => sides.reduce((a, s) => {
        const n = Number(cfg[s]) || 0;
        return a + (density === "single" ? Math.ceil(n / 2) : n);
    }, 0);

    let seats = usableSeats(layout, density);
    if (count <= seats) return { added: 0, short: 0, seats };

    // widest row is the best template for an extra row
    const template = layout.rowConfigs.reduce(
        (best, cfg) => (rowSeats(cfg) > rowSeats(best) ? cfg : best),
        layout.rowConfigs[0] || {});
    const perRow = rowHolds(template);
    if (!rowSeats(template) || !perRow) return { added: 0, short: count - seats, seats };

    let added = 0;
    while (seats < count && layout.rowConfigs.length < 25) {
        layout.rowConfigs.push(Object.assign({}, template));
        seats += perRow;
        added++;
    }
    layout.totalRows = layout.rowConfigs.length;
    return { added, short: Math.max(0, count - seats), seats };
}

/* Interleave two or more programme cohorts so neighbours differ. */
function interleaveCohorts(cohorts) {
    const lists = cohorts.filter((c) => c.length);
    if (lists.length < 2) return lists.flat();
    const out = [];
    for (let i = 0; out.length < lists.reduce((a, l) => a + l.length, 0); i++) {
        for (const l of lists) if (i < l.length) out.push(l[i]);
    }
    return out;
}

/* A layout is bench-based when every block of seats is an even number,
   so the seats pair off cleanly into benches of two. */
function isBenchLayout(layout) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    let any = false;
    for (const cfg of layout.rowConfigs) {
        for (const side of sides) {
            const n = Number(cfg[side]) || 0;
            if (n === 0) continue;
            if (n % 2 !== 0) return false;
            any = true;
        }
    }
    return any;
}

/* The benches of a room, ordered the way they are filled: column by
   column, and within a column from R1 (nearest the board) upwards. Rows
   of different widths are handled, so a short front row is simply skipped
   in the columns it does not reach. */
function benchSlots(layout) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    const pairsIn = (cfg, side) => Math.floor((Number(cfg[side]) || 0) / 2);
    const slots = [];
    for (const side of sides) {
        const widest = layout.rowConfigs.reduce((m, cfg) => Math.max(m, pairsIn(cfg, side)), 0);
        for (let pair = 0; pair < widest; pair++) {
            for (let r = 0; r < layout.rowConfigs.length; r++) {
                if (pairsIn(layout.rowConfigs[r], side) > pair) slots.push({ r, side, pair });
            }
        }
    }
    return slots;
}

/* Deals students onto benches.

   Single seating  : one student per bench, the other place left empty.
   Double seating  : two students per bench, and when the room holds more
                     than one subject the two are always sitting different
                     papers. Any surplus from the larger subject takes a
                     bench on its own rather than sitting beside its own
                     subject.

   `groups` is one entry per subject. Returns a flat seat sequence where
   each consecutive pair is one bench; "" marks an empty place. */
function benchPlan(groups, density, benchCount) {
    const queues = groups.map((g) => g.slice()).filter((q) => q.length)
        .sort((a, b) => b.length - a.length);          // largest subject first
    const benches = Array.from({ length: Math.max(0, benchCount) }, () => ["", ""]);
    if (!benches.length) return [];

    /* Pass 1 — every subject in turn takes a bench of its own, the
       largest subject first, until the benches run out. */
    const owner = [];                                   // subject sitting alone on each bench
    const spare = [];
    let b = 0;
    queues.forEach((q, qi) => {
        while (q.length && b < benches.length) {
            benches[b][0] = q.shift();
            owner[b] = qi;
            b++;
        }
        if (q.length) spare.push({ qi, rolls: q });
    });

    if (density === "single") return benches.flat();    // never share a bench

    /* Pass 2 — only now, with no empty bench left, students double up,
       and always beside someone sitting a different paper. */
    for (const lot of spare) {
        for (const roll of lot.rolls) {
            let at = benches.findIndex((bench, i) =>
                bench[0] && !bench[1] && owner[i] !== undefined && owner[i] !== lot.qi);
            if (at < 0) at = benches.findIndex((bench) => bench[0] && !bench[1]);
            if (at < 0) at = benches.findIndex((bench) => !bench[0]);
            if (at < 0) break;                          // room genuinely full
            benches[at][benches[at][0] ? 1 : 0] = roll;
        }
    }
    return benches.flat();
}

/* Seat filling: row by row (R1 nearest the board), column by column.
   Under single seating every other seat in a block is left empty, so no
   two students sit side by side. */
function assignSeats(students, layout, startDirection, density, seatSeq) {
    const sides = (SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium).slice();
    if (startDirection === "right") sides.reverse();
    const single = density === "single";
    const seq = Array.isArray(seatSeq) ? seatSeq : null;   // bench plan, blanks included

    /* A bench plan is laid out bench by bench, down each column in turn,
       so the roll numbers read vertically up the room. */
    if (seq) {
        const rows = layout.rowConfigs.map((cfg) => {
            const row = {};
            sides.forEach((side) => { row[side] = new Array(Number(cfg[side]) || 0).fill(""); });
            return row;
        });
        benchSlots(layout).forEach((slot, n) => {
            const place = rows[slot.r][slot.side];
            place[slot.pair * 2] = seq[n * 2] || "";
            place[slot.pair * 2 + 1] = seq[n * 2 + 1] || "";
        });
        if (startDirection === "right") rows.forEach((row) => sides.forEach((side) => row[side].reverse()));
        return rows;
    }

    let i = 0;
    return layout.rowConfigs.map((cfg) => {
        const row = {};
        sides.forEach((side) => { row[side] = []; });
        for (const side of sides) {
            const n = Number(cfg[side]) || 0;
            for (let s = 0; s < n; s++) {
                const takes = single ? (s % 2 === 0) : true;
                row[side].push(takes && i < students.length ? students[i++] : "");
            }
        }
        if (startDirection === "right") sides.forEach((side) => row[side].reverse());
        return row;
    });
}

/* ─── Build every session ────────────────────────────────────────── */
function generateAll() {
    const meta = state.metaData || [];
    if (!meta.length) {
        setStatus("The seating plan file has no rows.", true);
        return;
    }

    const groups = new Map();
    let skipped = 0;

    meta.forEach((row, idx) => {
        const room = String(pick(row, ["Room No.", "Room", "RoomNo", "Room Number"])).trim();
        if (!room) { skipped++; return; }

        const dateRaw = pick(row, ["Exam Date", "Date"]);
        const timeRaw = pick(row, ["Exam Time", "Time"]);
        const dateObj = parseExamDate(dateRaw);
        const time = normalizeTime(timeRaw);
        const key = [squash(room), dateObj ? dateKeyOf(dateObj) : squash(dateRaw), squash(time)].join("|");

        if (!groups.has(key)) {
            groups.set(key, {
                key, room, dateRaw, dateObj, time,
                order: idx,
                rows: []
            });
        }
        groups.get(key).rows.push(row);
    });

    const sessions = [];
    for (const g of groups.values()) {
        const programmes = [], subjects = [], ranges = [], sems = [], cohorts = [];
        let stated = 0;

        let droppedProgramme = 0, droppedSubject = 0, blankRangeRows = 0;
        let missingSubjectColumn = false, missingProgrammeColumn = false;
        let droppedSemester = 0, progNamesDiffer = false;
        const repeatRolls = new Set();        // students sitting a re-examination

        for (const row of g.rows) {
            const prog = String(pick(row, ["Prog. Name & Stream", "Programme", "Prog Name", "Program"])).trim();
            const subj = titleCaseSubject(pick(row, ["Subject", "Subjects"]));
            const rangeStr = String(pick(row, ["Roll No. Range", "Roll No.Range", "Roll Range", "Roll No."])).trim();
            const sem = formatSemester(pick(row, ["Semester", "Sem"]));
            const cnt = parseInt(pick(row, ["Total Students Count", "Total Students", "Count"], 0), 10);

            if (prog && !programmes.includes(prog)) programmes.push(prog);
            if (subj && !subjects.includes(subj)) subjects.push(subj);
            if (rangeStr && !ranges.includes(rangeStr)) ranges.push(rangeStr);
            if (sem && sem !== "\u2014" && !sems.includes(sem)) sems.push(sem);

            // no usable roll number range -> the row is not seated at all
            const parsed = parseRollRange(rangeStr);
            if (!parsed.length) {
                blankRangeRows++;
                cohorts.push({ subject: subj, rolls: [] });
                continue;
            }

            if (!isNaN(cnt)) stated += cnt;
            const found = studentsForAllocation(row, parsed);
            if (isRepeatSubject(pick(row, ["Subject", "Subjects"]))) {
                found.rolls.forEach((r) => repeatRolls.add(r));
            }
            droppedProgramme += found.droppedProgramme;
            droppedSubject += found.droppedSubject;
            droppedSemester += found.droppedSemester;
            if (found.progIgnored) progNamesDiffer = true;
            if (found.noSubjectColumn) missingSubjectColumn = true;
            if (found.noProgrammeColumn) missingProgrammeColumn = true;
            cohorts.push({ subject: subj, rolls: found.rolls });
        }

        // a roll number is seated once, in the first allocation that claims it
        const seen = new Set();
        const cleanCohorts = cohorts.map((c) => ({
            subject: c.subject,
            rolls: c.rolls.filter((r) => !seen.has(r) && seen.add(r))
        }));

        /* Order of seating. With more than one subject in the room each
           subject keeps its own run of seats, the largest paper first, so
           the roll numbers read in sequence — the same order the bench
           rooms use. Ticking "Interleave programmes" goes back to dealing
           the subjects alternately. */
        const bySubject = new Map();
        for (const c of cleanCohorts) {
            const key = c.subject || "";
            if (!bySubject.has(key)) bySubject.set(key, []);
            bySubject.get(key).push(...c.rolls);
        }
        const subjectGroups = [...bySubject.values()].filter((g2) => g2.length);
        const students = subjectGroups.length > 1
            ? (state.interleaveBatches
                ? interleaveCohorts(subjectGroups)
                : subjectGroups.slice().sort((a, b) => b.length - a.length).flat())
            : (state.interleaveBatches
                ? interleaveCohorts(cleanCohorts.map((c) => c.rolls))
                : cleanCohorts.flatMap((c) => c.rolls));

        /* Seating density. One subject in the room means single seating —
           alternate seats left empty — but only where the cohort actually
           fits that way; otherwise the room is filled normally and the
           report says so. */
        const layout = getRoomLayout(g.room, students.length);
        const savedSeats = countSeats(layout);
        const singleCapacity = usableSeats(layout, "single");
        const wantsSingle = subjects.length <= 1;
        const density = (wantsSingle && students.length <= singleCapacity) ? "single" : "double";

        /* On a bench room the places are dealt bench by bench: every
           student gets a bench to themselves while benches remain, and
           only once they run out does anyone share — always with someone
           sitting a different paper. */
        const benchRoom = isBenchLayout(layout);
        let seatSeq = null, benchesTotal = 0, benchesUsed = 0, sharedBenches = 0, loneBenches = 0;
        let fit;

        if (benchRoom) {
            // the room must at least hold everyone two to a bench
            fit = fitLayoutToStudents(layout, Math.ceil(students.length / 2), "single");
            benchesTotal = usableSeats(layout, "single");
            seatSeq = benchPlan(subjectGroups, density, benchesTotal);
            for (let i = 0; i < seatSeq.length; i += 2) {
                const one = seatSeq[i], two = seatSeq[i + 1];
                if (one && two) { sharedBenches++; benchesUsed++; }
                else if (one || two) { loneBenches++; benchesUsed++; }
            }
        } else {
            fit = fitLayoutToStudents(layout, students.length, density);
        }

        const seats = benchRoom ? countSeats(layout) : fit.seats;
        const benchesAvailable = benchesTotal;

        const errors = [], warnings = [], notes = [];

        if (blankRangeRows) {
            errors.push(`${blankRangeRows} allocation row(s) for this room have no Roll No. Range `
                + `in the seating plan and were not seated.`);
        }
        if (students.length === 0) {
            errors.push("No students matched the roll call file for this room — "
                + "check the roll number range and programme name.");
        }
        if (missingSubjectColumn) {
            errors.push("The roll call file has no SUBJECT column, so students could not be "
                + "checked against the subject — everyone in the range was taken.");
        }
        if (missingProgrammeColumn) {
            errors.push("The roll call file has no Prog. Name & Stream column, so students could "
                + "not be checked against the programme — everyone in the range was taken.");
        }
        if (droppedProgramme) {
            errors.push(`${droppedProgramme} roll number(s) inside the stated range belong to a `
                + `different programme and were not seated.`);
        }
        if (benchRoom && students.length > benchesAvailable * 2) {
            errors.push(`Room capacity exceeded \u2014 ${students.length} students allotted to `
                + `${g.room}, which has ${benchesAvailable} benches (${benchesAvailable * 2} places).`);
        } else if (!benchRoom && students.length > savedSeats) {
            errors.push(`Room capacity exceeded \u2014 ${students.length} students allotted to `
                + `${g.room}, which has ${savedSeats} seats.`);
        }
        if (fit.short > 0) {
            errors.push(`${fit.short} student(s) could not be seated even after extending the layout.`);
        }

        if (droppedSemester) {
            notes.push(`${droppedSemester} student(s) in this roll number range are in a different `
                + `semester and belong to another room.`);
        }
        if (progNamesDiffer) {
            notes.push(`The roll call file spells programmes differently from the seating plan `
                + `(e.g. "BACHELOR OF TECHNOLOGY (DATA SCIENCE)" against "B Tech DS"), so students `
                + `were matched on roll range, subject and semester only.`);
        }
        if (droppedSubject) {
            notes.push(`${droppedSubject} registration row(s) in this roll number range belong to `
                + `other subjects and were skipped (the roll call file lists one row per subject, `
                + `so a student taking several papers appears several times).`);
        }
        if (density === "single") {
            notes.push(`Single seating: one subject in this room, so alternate seats are left empty.`);
        } else if (wantsSingle) {
            notes.push(`Single seating needs one bench each: ${students.length} benches. `
                + `${g.room} has ${benchRoom ? benchesAvailable : Math.floor(savedSeats / 2)}, `
                + `so some benches are shared.`);
        } else if (subjectGroups.length > 1) {
            notes.push(`Double seating: ${subjectGroups.length} subjects in this room. `
                + (state.interleaveBatches
                    ? `Dealt alternately so neighbours sit different papers.`
                    : `Each subject keeps its own run of seats, the largest paper first, `
                      + `so the roll numbers read in sequence.`));
        }
        if (fit.added > 0) {
            notes.push(`Saved layout holds ${savedSeats} seats; ${fit.added} extra row(s) were added `
                + `so every student has a seat.`);
        }
        if (benchRoom && density === "double") {
            notes.push(`Benches: ${benchesUsed} of ${benchesAvailable} in use \u2014 `
                + `${loneBenches} with one student, ${sharedBenches} shared`
                + (sharedBenches ? ` (each shared bench holds two different subjects).` : `.`));
        }
        if (layout.benchRebuilt) {
            notes.push(`${g.room} is a flat bench room with ${layout.benchTarget} benches on the `
                + `official list`
                + (layout.benchWas ? `, but the saved layout had ${layout.benchWas}` : ``)
                + `. The rows were rebuilt to the official count \u2014 please confirm the row split.`);
        }
        if (stated && stated !== students.length) {
            notes.push(`Seating plan states ${stated} students; the roll call file gives `
                + `${students.length}. The roll call file has been used.`);
        }
        if (layout.isFallback) notes.push(`No saved layout for ${g.room} — a standard layout was applied.`);

        const saidDay = statedWeekday(g.dateRaw);
        if (saidDay && g.dateObj && saidDay !== WEEKDAYS[g.dateObj.getDay()]) {
            notes.push(`The seating plan says "${saidDay}" for this date, but `
                + `${formatDateShort(g.dateObj, g.dateRaw)} is a ${WEEKDAYS[g.dateObj.getDay()]}. `
                + `The report prints the date exactly as given in the file — please confirm which is right.`);
        }

        sessions.push({
            id: g.key,
            room: g.room,
            dateRaw: g.dateRaw,
            dateObj: g.dateObj,
            dateLong: formatDateLong(g.dateObj, g.dateRaw),
            dateShort: formatDateShort(g.dateObj, g.dateRaw),
            dateKey: g.dateObj ? dateKeyOf(g.dateObj) : squash(g.dateRaw),
            time: g.time,
            order: g.order,
            programmes, subjects, rollRanges: ranges, sems,
            academicYear: String(pick(g.rows[0], ["Academic Year", "AcademicYear"], "")).trim(),
            students,
            statedCount: stated,
            layout, seats,
            assigned: assignSeats(students, layout, state.startDirection, density, seatSeq),
            density, savedSeats, subjectGroups, benchRoom,
            roster: sortRolls(students),       // attendance sheet order
            repeatRolls,                       // marked (R) on the report
            errors, warnings, notes
        });
    }

    sessions.sort((a, b) => {
        const da = a.dateObj ? a.dateObj.getTime() : Infinity;
        const db = b.dateObj ? b.dateObj.getTime() : Infinity;
        if (da !== db) return da - db;
        if (a.time !== b.time) return a.time.localeCompare(b.time);
        return a.room.localeCompare(b.room, undefined, { numeric: true });
    });

    state.sessions = sessions;
    state.allRendered = false;
    state.current = 0;
    if (!state.academicYear) {
        const ay = sessions.find((s) => s.academicYear);
        state.academicYear = ay ? ay.academicYear : "2025-2026";
        const ayInput = $("academicYear");
        if (ayInput) ayInput.value = state.academicYear;
    }

    if (!sessions.length) {
        setStatus("No exam sessions could be built from the seating plan.", true);
        return;
    }

    buildDateFilter();
    buildRoomFilter();
    const dSel = $("dateFilter"), rSel = $("roomFilter");
    if (dSel) dSel.value = "all";
    if (rSel) rSel.value = "all";
    applyFilter();
    openReportView();

    const errored = sessions.filter((s) => s.errors.length).length;
    const single = sessions.filter((s) => s.density === "single").length;
    setStatus(`${sessions.length} reports generated across `
        + `${new Set(sessions.map((s) => s.dateKey)).size} exam dates. `
        + `${single} use single seating, ${sessions.length - single} double.`
        + (errored ? ` ${errored} report(s) carry an error \u2014 see the red band on the sheet.` : "")
        + (skipped ? ` ${skipped} row(s) had no room number.` : ""),
        errored > 0);
}

/* ─── Session navigation ─────────────────────────────────────────── */
function buildDateFilter() {
    const sel = $("dateFilter");
    if (!sel) return;
    const dates = [];
    for (const s of state.sessions) {
        if (!dates.some((d) => d.key === s.dateKey)) {
            dates.push({ key: s.dateKey, label: s.dateShort, time: s.time });
        }
    }
    sel.innerHTML = `<option value="all">All dates (${state.sessions.length} reports)</option>`
        + dates.map((d) => {
            const n = state.sessions.filter((s) => s.dateKey === d.key).length;
            return `<option value="${escapeHtml(d.key)}">${escapeHtml(d.label)} — ${n} room${n > 1 ? "s" : ""}</option>`;
        }).join("");
}

function buildRoomFilter() {
    const sel = $("roomFilter");
    if (!sel) return;
    const rooms = [...new Set(state.sessions.map((s) => s.room))]
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    sel.innerHTML = `<option value="all">All rooms (${rooms.length})</option>`
        + rooms.map((r) => {
            const n = state.sessions.filter((s) => s.room === r).length;
            return `<option value="${escapeHtml(r)}">${escapeHtml(r)} — ${n} report${n > 1 ? "s" : ""}</option>`;
        }).join("");
}

/* Date and room filters are independent; either may be "all". */
function applyFilter() {
    const dateKey = ($("dateFilter") || {}).value || "all";
    const room = ($("roomFilter") || {}).value || "all";

    state.view = state.sessions
        .map((s, i) => ({ s, i }))
        .filter(({ s }) => (dateKey === "all" || s.dateKey === dateKey)
                        && (room === "all" || s.room === room))
        .map(({ i }) => i);

    if (!state.view.length) {          // that room is not used on that date
        showNoMatch(room, dateKey);
        return;
    }
    if (!state.view.includes(state.current)) state.current = state.view[0];

    buildSessionSelect();
    renderReport(state.sessions[state.current]);
}

function showNoMatch(room, dateKey) {
    const sess = $("sessionSelect");
    if (sess) sess.innerHTML = `<option value="">No report matches this combination</option>`;
    const counter = $("sessionCounter");
    if (counter) counter.textContent = "0 of 0";
    ["prevBtn", "nextBtn"].forEach((id) => { const b = $(id); if (b) b.disabled = true; });

    $("reportPages").innerHTML = `<div class="empty-state">
        <div class="empty-title">No report for this combination</div>
        <div class="empty-sub">${escapeHtml(room === "all" ? "That date" : room)} has no exam
          ${dateKey === "all" ? "" : "on the selected date"}. Choose another room or date.</div>
      </div>`;

    ["statTotal", "statSeats", "statRows", "statOccupancy"].forEach((id) => {
        const e = $(id); if (e) e.textContent = "—";
    });
    const warn = $("warningBar");
    if (warn) warn.style.display = "none";
}

function buildSessionSelect() {
    const sel = $("sessionSelect");
    if (!sel) return;
    sel.innerHTML = state.view.map((i) => {
        const s = state.sessions[i];
        const flag = s.errors.length ? "  \u25cf ERROR" : (s.warnings.length ? " *" : "");
        return `<option value="${i}" ${i === state.current ? "selected" : ""}>`
            + `${escapeHtml(s.room)} — ${escapeHtml(s.dateShort)} — ${escapeHtml(s.subjects.join(", ") || "—")}${flag}</option>`;
    }).join("");
    updateCounter();
}

function updateCounter() {
    const pos = state.view.indexOf(state.current);
    const el = $("sessionCounter");
    if (el) el.textContent = `${pos + 1} of ${state.view.length}`;
    const prev = $("prevBtn"), next = $("nextBtn");
    if (prev) prev.disabled = pos <= 0;
    if (next) next.disabled = pos >= state.view.length - 1;
}

function gotoSession(index) {
    if (index < 0 || index >= state.sessions.length) return;
    state.current = index;
    const sel = $("sessionSelect");
    if (sel) sel.value = String(index);
    updateCounter();
    renderReport(state.sessions[index]);
}

function step(delta) {
    const pos = state.view.indexOf(state.current);
    const nextPos = pos + delta;
    if (nextPos < 0 || nextPos >= state.view.length) return;
    gotoSession(state.view[nextPos]);
}

function bindToolbar() {
    const dateSel = $("dateFilter");
    if (dateSel) dateSel.addEventListener("change", () => applyFilter());

    const roomSel = $("roomFilter");
    if (roomSel) roomSel.addEventListener("change", () => applyFilter());

    const sessSel = $("sessionSelect");
    if (sessSel) sessSel.addEventListener("change", () => gotoSession(parseInt(sessSel.value, 10)));

    const prev = $("prevBtn"), next = $("nextBtn");
    if (prev) prev.addEventListener("click", () => step(-1));
    if (next) next.addEventListener("click", () => step(1));

    const scaleSel = $("scaleSelect");
    if (scaleSel) scaleSel.addEventListener("change", () => applyScale(scaleSel.value));

    const modeSel = $("printModeSelect");
    if (modeSel) modeSel.addEventListener("change", () => applyPrintMode(modeSel.value));

    document.addEventListener("keydown", (e) => {
        if (reportView() && reportView().style.display === "none") return;
        if (["INPUT", "SELECT", "TEXTAREA"].includes((e.target.tagName || "").toUpperCase())) return;
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
    });
}

function applyScale(value) {
    state.scale = value;
    document.documentElement.setAttribute("data-scale", value);
    const sel = $("scaleSelect");
    if (sel && sel.value !== value) sel.value = value;
    refreshPrintMetrics();
}

function applyPrintMode(value) {
    state.printMode = value;
    document.documentElement.setAttribute("data-print", value);
    const sel = $("printModeSelect");
    if (sel && sel.value !== value) sel.value = value;
    refreshPrintMetrics();
}

function refreshPrintMetrics() {
    const s = state.sessions[state.current];
    const sheet = document.querySelector("#reportPages .session-sheet");
    if (s && sheet) applyPrintMetrics(sheet, s);
}

function openReportView() {
    uploadView().style.display = "none";
    reportView().style.display = "block";
    document.body.classList.add("has-report");
}

function goBack() {
    uploadView().style.display = "block";
    reportView().style.display = "none";
    document.body.classList.remove("has-report");
}

/* ─── Saved room layouts ──────────────────────────────────────────
   Manual layout corrections are kept in this browser, and can be
   exported to a file so the same corrections can be loaded on another
   machine or committed alongside the portal.
   ----------------------------------------------------------------- */
const LAYOUT_STORE_KEY = "nmims.roomLayouts.v1";

function loadSavedLayouts() {
    try {
        const raw = localStorage.getItem(LAYOUT_STORE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        if (data && typeof data === "object") state.overrides = data;
    } catch (e) { /* private mode or file:// — overrides stay session-only */ }
}

function saveLayouts() {
    try {
        localStorage.setItem(LAYOUT_STORE_KEY, JSON.stringify(state.overrides));
        return true;
    } catch (e) { return false; }
}

function exportLayouts() {
    const rooms = Object.keys(state.overrides);
    if (!rooms.length) {
        setStatus("There are no manual layout changes to export yet.", true);
        return;
    }
    const blob = new Blob([JSON.stringify(state.overrides, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "NMIMS_room_layouts.json";
    a.click();
    URL.revokeObjectURL(a.href);
    setStatus(`Exported manual layouts for ${rooms.length} room(s).`);
}

function importLayouts(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data || typeof data !== "object") throw new Error("unexpected contents");
            Object.assign(state.overrides, data);
            saveLayouts();
            const n = Object.keys(data).length;
            if (state.sessions.length) generateAll();
            setStatus(`Loaded manual layouts for ${n} room(s).`);
        } catch (err) {
            setStatus("That layout file could not be read: " + err.message, true);
        }
    };
    reader.readAsText(file);
}

/* ─── Sidebar (optional layout override) ─────────────────────────── */
function bindSidebarControls() {
    const ay = $("academicYear");
    if (ay) ay.addEventListener("input", () => {
        state.academicYear = ay.value.trim();
        if (state.sessions.length) renderReport(state.sessions[state.current]);
    });

    const ex = $("examType");
    if (ex) ex.addEventListener("change", () => {
        state.examType = ex.value;
        if (state.sessions.length) renderReport(state.sessions[state.current]);
    });

    const interleave = $("interleaveBatches");
    if (interleave) interleave.addEventListener("change", () => {
        state.interleaveBatches = interleave.checked;
        if (state.sessions.length) generateAll();
    });

    const dir = $("startDirection");
    if (dir) dir.addEventListener("change", () => {
        state.startDirection = dir.value;
        if (state.sessions.length) generateAll();
    });

    const rowsInput = $("totalRows");
    if (rowsInput) rowsInput.addEventListener("change", () => {
        const n = Math.max(1, Math.min(25, parseInt(rowsInput.value, 10) || 6));
        rowsInput.value = n;
        const s = state.sessions[state.current];
        if (!s) return;
        const draft = draftLayout();
        draft.totalRows = n;
        draft.rowConfigs = cloneRowConfigs(draft.rowConfigs, draft.layoutType, n);
        stageLayout(draft);
    });

    const layoutSel = $("layoutType");
    if (layoutSel) layoutSel.addEventListener("change", () => {
        const draft = draftLayout();
        draft.layoutType = layoutSel.value;
        draft.rowConfigs = cloneRowConfigs(draft.rowConfigs, draft.layoutType, draft.totalRows);
        stageLayout(draft);
    });

    const apply = $("applyLayoutBtn");
    if (apply) apply.addEventListener("click", applyLayoutOverride);

    const reset = $("resetLayoutBtn");
    if (reset) reset.addEventListener("click", () => {
        const s = state.sessions[state.current];
        if (!s) return;
        delete state.overrides[s.room];
        saveLayouts();
        rebuildSession(state.current);
        renderRowConfigEditor(state.sessions[state.current].layout);
        setStatus(`Layout for ${s.room} reset to the saved default.`);
    });

    const exportBtn = $("exportLayoutBtn");
    if (exportBtn) exportBtn.addEventListener("click", exportLayouts);

    const importInput = $("importLayoutInput");
    if (importInput) importInput.addEventListener("change", (e) => {
        const f = e.target.files[0];
        if (f) importLayouts(f);
        e.target.value = "";
    });

    const toggle = $("toggleConfigBtn");
    if (toggle) toggle.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("hidden");
        toggle.setAttribute("aria-expanded", sidebar.classList.contains("hidden") ? "false" : "true");
    });
}

let layoutDraft = null;

function draftLayout() {
    if (layoutDraft) return layoutDraft;
    const s = state.sessions[state.current];
    layoutDraft = s ? JSON.parse(JSON.stringify(s.layout)) : autoFitLayout(36);
    return layoutDraft;
}

function stageLayout(draft) {
    layoutDraft = draft;
    renderRowConfigEditor(draft);
}

function applyLayoutOverride() {
    const s = state.sessions[state.current];
    if (!s) return;
    const draft = draftLayout();
    state.overrides[s.room] = {
        layoutType: draft.layoutType,
        totalRows: draft.totalRows,
        rowConfigs: draft.rowConfigs,
        alternateSeating: !!draft.alternateSeating
    };
    const kept = saveLayouts();
    // every session in this room follows the override
    state.sessions.forEach((sess, i) => { if (sess.room === s.room) rebuildSession(i); });
    setStatus(`Layout applied to every report for ${s.room}.`
        + (kept ? " It will be remembered on this computer." : ""));
}

function rebuildSession(index) {
    const s = state.sessions[index];
    if (!s) return;
    s.layout = getRoomLayout(s.room, s.students.length);
    s.savedSeats = countSeats(s.layout);

    // the density rule is re-evaluated against the new layout
    const wantsSingle = s.subjects.length <= 1;
    s.density = (wantsSingle && s.students.length <= usableSeats(s.layout, "single"))
        ? "single" : "double";

    const benchRoom = isBenchLayout(s.layout);
    s.benchRoom = benchRoom;
    let seatSeq = null, fit;
    if (benchRoom) {
        fit = fitLayoutToStudents(s.layout, Math.ceil(s.students.length / 2), "single");
        seatSeq = benchPlan(s.subjectGroups || [s.students], s.density, usableSeats(s.layout, "single"));
    } else {
        fit = fitLayoutToStudents(s.layout, s.students.length, s.density);
    }
    s.seats = benchRoom ? countSeats(s.layout) : fit.seats;
    s.assigned = assignSeats(s.students, s.layout, state.startDirection, s.density, seatSeq);

    const drop = (list, re) => list.filter((t) => !re.test(t));
    s.errors = drop(s.errors, /could not be seated even|Room capacity exceeded/);
    s.notes = drop(s.notes, /extra row|standard layout|Single seating|Double seating|full occupancy/);

    if (s.students.length > s.savedSeats) {
        s.errors.push(`Room capacity exceeded \u2014 ${s.students.length} students allotted to `
            + `${s.room}, which has ${s.savedSeats} seats.`);
    }
    if (fit.short > 0) {
        s.errors.push(`${fit.short} student(s) could not be seated even after extending the layout.`);
    }
    if (s.density === "single") {
        s.notes.push("Single seating: one subject in this room, so alternate seats are left empty.");
    } else if (wantsSingle) {
        s.notes.push(`Single seating would need ${s.students.length * 2 - 1} seats; `
            + `${s.room} holds ${s.savedSeats}, so the room is filled at full occupancy.`);
    }
    if (fit.added > 0) {
        s.notes.push(`Saved layout holds ${s.savedSeats} seats; ${fit.added} extra row(s) were added `
            + `so every student has a seat.`);
    }
    if (s.layout.isFallback) s.notes.push(`No saved layout for ${s.room} — a standard layout was applied.`);

    state.allRendered = false;
    if (index === state.current) renderReport(s);
}

function renderRowConfigEditor(layout) {
    const container = $("rowConfigsList");
    if (!container) return;
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    const label = { left: "Left", middle: "Middle", right: "Right", mid1: "Mid 1", mid2: "Mid 2", mid3: "Mid 3", mid4: "Mid 4" };

    container.innerHTML = layout.rowConfigs.map((cfg, i) => `
        <div class="row-config-item">
          <div class="row-config-header" data-idx="${i}">
            <span>Row ${i + 1}</span>
            <span class="row-config-sum">${sides.map((s) => `${label[s][0]}:${cfg[s] || 0}`).join(" ")}</span>
          </div>
          <div class="row-config-body" id="rowBody${i}">
            <div class="seats-grid" style="grid-template-columns:repeat(${Math.min(sides.length, 3)},1fr)">
              ${sides.map((s) => `
                <div>
                  <div class="seat-input-label">${label[s]}</div>
                  <input class="seat-input" type="number" min="0" max="12" value="${cfg[s] || 0}" data-row="${i}" data-side="${s}">
                </div>`).join("")}
            </div>
          </div>
        </div>`).join("");

    container.querySelectorAll(".row-config-header").forEach((h) => {
        h.addEventListener("click", () => {
            $("rowBody" + h.getAttribute("data-idx")).classList.toggle("open");
        });
    });

    container.querySelectorAll(".seat-input").forEach((inp) => {
        inp.addEventListener("change", () => {
            const row = parseInt(inp.getAttribute("data-row"), 10);
            const side = inp.getAttribute("data-side");
            const val = Math.max(0, Math.min(12, parseInt(inp.value, 10) || 0));
            inp.value = val;
            const draft = draftLayout();
            draft.rowConfigs[row][side] = val;
            const sum = container.querySelector(`.row-config-header[data-idx="${row}"] .row-config-sum`);
            if (sum) sum.textContent = sides.map((s) => `${label[s][0]}:${draft.rowConfigs[row][s] || 0}`).join(" ");
        });
    });

    const layoutSel = $("layoutType");
    if (layoutSel) layoutSel.value = layout.layoutType;
    const rowsInput = $("totalRows");
    if (rowsInput) rowsInput.value = layout.totalRows;
    const room = $("overrideRoomName");
    const s = state.sessions[state.current];
    if (room && s) {
        room.textContent = s.room + (state.overrides[s.room] ? " (overridden)" : "");
    }
}

/* ─── Print geometry ─────────────────────────────────────────────────
   Seat size is computed per room from its row/column count so that the
   plan always fills — but never overruns — the space on the sheet.
   All values are millimetres; font sizes are points.
   ------------------------------------------------------------------- */
const PRINT_BUDGET = {
    /* planH = millimetres of sheet height the seat rows may occupy
       planW = millimetres of sheet width available to a row of seats  */
    sidebyside: { planH: 117, planW: 180, seatHMax: 22, seatWMax: 28, seatFsMax: 20, tallyFs: 11 },
    stacked:    { planH: 92,  planW: 276, seatHMax: 15, seatWMax: 30, seatFsMax: 16, tallyFs: 7 },
    full:       { planH: 130, planW: 276, seatHMax: 22, seatWMax: 30, seatFsMax: 20, tallyFs: 11.5 }
};
const SCALE_FACTOR = { sm: 0.82, md: 0.91, lg: 1, xl: 1.1 };

function printMetrics(session, mode, scale) {
    const b = PRINT_BUDGET[mode] || PRINT_BUDGET.sidebyside;
    const k = SCALE_FACTOR[scale] || 1;
    const sides = SIDE_ORDER[session.layout.layoutType] || SIDE_ORDER.auditorium;
    const cfgs = session.layout.rowConfigs;

    const rows = Math.max(1, cfgs.length);
    const maxSeats = Math.max(1, ...cfgs.map((c) => sides.reduce((a, x) => a + (Number(c[x]) || 0), 0)));
    const blocks = Math.max(1, sides.filter((x) => cfgs.some((c) => (Number(c[x]) || 0) > 0)).length);

    const clamp = (lo, v, hi) => Math.max(lo, Math.min(v, hi));
    /* an error band printed above the plan takes height away from it */
    const nErr = (session.errors || []).length;
    const planH = b.planH - (nErr === 0 ? 0 : (nErr === 1 ? 9 : 17));
    // vertical: rows share the plan height, allowing 1.9mm between rows
    const ROW_GAP = 1.9;                       // matches .seating-row margin in print
    const h = clamp(4.5, Math.min(planH / rows - ROW_GAP, b.seatHMax * k), b.seatHMax * k);
    // horizontal: seats share the width, minus aisles (6mm) and the row label (12mm)
    const w = clamp(10, Math.min((b.planW - (blocks - 1) * 6 - 12) / maxSeats - 1, b.seatWMax * k), b.seatWMax * k);
    // a 5-character roll number must fit inside the box
    const fs = clamp(6.5, Math.min((w - 2) / 1.06, (h - 1.4) / 0.353, b.seatFsMax * k), 18);

    return {
        seatW: w.toFixed(2) + "mm",
        seatH: h.toFixed(2) + "mm",
        seatFs: fs.toFixed(2) + "pt",
        tallyFs: (b.tallyFs * k).toFixed(2) + "pt"
    };
}

function applyPrintMetrics(el, session) {
    const m = printMetrics(session, state.printMode, state.scale);
    el.style.setProperty("--seat-w-print", m.seatW);
    el.style.setProperty("--seat-h-print", m.seatH);
    el.style.setProperty("--seat-fs-print", m.seatFs);
    el.style.setProperty("--tally-fs-print", m.tallyFs);
}

/* ─── Report rendering ───────────────────────────────────────────── */
function planTitleFor(layoutType) {
    return {
        auditorium: "Auditorium Seating Layout",
        lab: "Computer Lab Seating Layout",
        straight_quad: "Quad-Column Seating Layout",
        straight_penta: "Penta-Column Seating Layout",
        straight_hexa: "Hexa-Column Seating Layout"
    }[layoutType] || "Seating Layout";
}

function renderReport(session) {
    if (!session) return;
    layoutDraft = null;

    const host = $("reportPages");
    host.innerHTML = "";
    host.appendChild(buildSessionNode(session, { interactive: true }));

    // statistics strip (screen only)
    const occ = session.seats ? Math.round((session.students.length / session.seats) * 100) : 0;
    $("statTotal").textContent = session.students.length;
    $("statSeats").textContent = session.seats;
    $("statRows").textContent = session.layout.rowConfigs.length;
    $("statOccupancy").textContent = session.seats ? occ + "%" : "—";

    const warn = $("warningBar");
    const errs = session.errors || [];
    const items = errs.map((e) => `<div class="err-item">${escapeHtml(e)}</div>`)
        .concat(session.warnings.map((w) => `<div class="warn-item">${escapeHtml(w)}</div>`))
        .concat(session.notes.map((n) => `<div class="note-item">${escapeHtml(n)}</div>`));
    warn.className = "warning-bar no-print"
        + (errs.length ? " is-error" : (session.warnings.length ? " is-warning" : " is-note"));
    warn.style.display = items.length ? "block" : "none";
    warn.innerHTML = items.join("");

    renderRowConfigEditor(session.layout);
}

/* One session = two printed pages (plan + attendance tally). */
function buildSessionNode(session, opts = {}) {
    const wrap = document.createElement("div");
    wrap.className = "session-sheet";
    wrap.setAttribute("data-room", session.room);

    /* Exam details as one horizontal band — label and value inline,
       items running left to right so the block costs the least height. */
    const meta = [
        ["Academic Year", state.academicYear || session.academicYear || "—"],
        ["Examination", state.examType || "—"],
        ["Exam Date", session.dateLong],
        ["Session Time", session.time],
        ["Semester", session.sems.join(", ") || "—"],
        ["Students", String(session.students.length)],
        ["Seating", session.density === "single"
            ? "Single \u2014 one student per bench"
            : (session.subjects.length > 1
                ? "Double \u2014 different subjects share a bench"
                : "Double \u2014 full occupancy")],
        ["Programme(s)", session.programmes.join("  •  ") || "—"],
        ["Subject(s)", session.subjects.join("  •  ") || "—"],
        ["Roll No. Range", session.rollRanges.join(",  ") || "—"],
        ["Absent", "strike through the roll number"]
    ];

    wrap.innerHTML = `
      <section class="report-doc doc-plan" aria-label="Seating plan">
        ${headerBand(session, "Supervisor's Report — Seating Plan", "Sheet 1")}
        <div class="meta-band">
          ${meta.map(([k, v]) => `
            <span class="mb-item">
              <span class="mb-label">${escapeHtml(k)}</span>
              <span class="mb-value">${escapeHtml(v)}</span>
            </span>`).join("")}
        </div>

        ${(session.errors && session.errors.length) ? `
        <div class="error-band">
          <span class="error-tag">Error</span>
          <span class="error-list">${session.errors.map(escapeHtml).join(" &nbsp;\u2022&nbsp; ")}</span>
        </div>` : ""}

        <div class="seating-plan-area">
          <div class="auditorium-wrapper">
            <div class="seating-grid ${gridClass(session.layout.layoutType)}"></div>
            <div class="board">Board / Stage</div>
          </div>
        </div>
      </section>

      <section class="report-doc doc-tally" aria-label="Attendance and answer book record">
        ${headerBand(session, "Attendance & Answer Book Record", "Sheet 2")}
        <div class="tally-strip">
          <div><span class="ts-label">Date</span><span class="ts-value">${escapeHtml(session.dateShort)}</span></div>
          <div><span class="ts-label">Time</span><span class="ts-value">${escapeHtml(session.time)}</span></div>
          <div><span class="ts-label">Subject</span><span class="ts-value">${escapeHtml(session.subjects.join(", ") || "—")}</span></div>
          <div><span class="ts-label">Students</span><span class="ts-value">${session.students.length}</span></div>
        </div>

        <div class="tally-section">
          <div class="section-heading">Student Attendance &amp; Answer Book Signature Sheet</div>
          <div class="tally-split">${tallyColumns((session.roster || session.students).length)
            .map(() => `
            <table class="tally-table">
              <thead>
                <tr>
                  <th class="center col-sr">Sr.</th>
                  <th class="col-roll">Roll No.</th>
                  <th class="center col-supp">Supp.</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>`).join("")}</div>
        </div>

      </section>

      <section class="report-doc doc-bottom" aria-label="Answer books and signatures">
          <div class="acc-band">
            ${accGroup("Answer Books", ["Issued", "Used", "Unused"])}
            ${accGroup("Supplements", ["Issued", "Used", "Unused"])}
            ${accGroup("Total", ["Present", "Absent"])}
          </div>
          <div class="sig-grid" style="grid-template-columns:repeat(2,1fr)">
            ${sigItem("Supervisor 1")}
            ${sigItem("Supervisor 2")}
          </div>
      </section>`;

    // seating grid
    const grid = wrap.querySelector(".seating-grid");
    renderSeatingGrid(grid, session);

    // tally rows, distributed down each column in turn
    const bodies = wrap.querySelectorAll(".tally-table tbody");
    const roster = session.roster || session.students;
    const slices = tallyColumns(roster.length);
    const repeats = session.repeatRolls;
    const row = (n, roll, spare) =>
        `<tr${spare ? ' class="spare"' : ""}><td class="center">${n}</td>`
        + `<td class="roll">${escapeHtml(roll)}`
        + `${roll && repeats && repeats.has(roll) ? ` <span class="seat-re">(R)</span>` : ""}`
        + `</td><td class="supp center"></td></tr>`;

    const n = roster.length;
    slices.forEach(([from, to], ci) => {
        let html = "";
        for (let i = from; i < to; i++) {
            html += i < n ? row(i + 1, roster[i], false)
                          : row(i + 1, "", true);        // spare line for late entries
        }
        bodies[ci].innerHTML = html;
    });

    applyPrintMetrics(wrap, session);

    if (opts.interactive) {
        wrap.querySelectorAll(".seat-box:not(.empty)").forEach((box) => {
            box.addEventListener("click", () => box.classList.toggle("absent"));
            box.title = "Click to mark absent";
        });
    }
    return wrap;
}

/* Splits the attendance list into side-by-side columns. The row limit is
   how many rows fit the height left for it on the sheet. On the one-sheet
   layout that band is only ~20% of the page, so it uses more and shorter
   columns. Spare rows count in the split, so columns come out even. */
const TALLY_SPARE_ROWS = 3;

function tallyColumns(count, mode) {
    const n = Math.max(count, 0);
    const total = n + TALLY_SPARE_ROWS;
    const m = mode || state.printMode;
    /* [rows per column, maximum columns] for the space that mode gives
       the attendance sheet */
    const shape = { sidebyside: [18, 3], stacked: [6, 7], full: [10, 4] }[m] || [26, 2];
    const cols = Math.min(shape[1], Math.max(1, Math.ceil(n / shape[0]) || 1));
    const per = Math.ceil(total / cols);

    const out = [];
    for (let c = 0; c < cols; c++) {
        const from = c * per;
        if (from >= total && c > 0) break;
        out.push([from, Math.min(total, from + per)]);
    }
    return out;
}

function gridClass(layoutType) {
    if (layoutType === "straight_quad") return "lab-layout quad-layout";
    if (layoutType === "straight_penta") return "lab-layout penta-layout";
    if (layoutType === "straight_hexa") return "lab-layout hexa-layout";
    if (layoutType === "lab") return "lab-layout";
    return "";
}

function headerBand(session, docType, pageLabel) {
    return `
      <header class="report-header-band">
        <div class="report-header-brand">
          ${INSTITUTE.logo
            ? `<div class="crest has-logo"><img src="${escapeHtml(INSTITUTE.logo)}" alt=""></div>`
            : (INSTITUTE.crest ? `<div class="crest">${escapeHtml(INSTITUTE.crest)}</div>` : "")}
          <div class="brand-lines">
            <div class="inst-name">${escapeHtml(INSTITUTE.name)}</div>
            <div class="inst-tagline">${escapeHtml(INSTITUTE.tagline)}</div>
            <div class="doc-type">${escapeHtml(docType)}</div>
          </div>
        </div>
        <div class="report-header-meta">
          <div class="room-badge-lg">${escapeHtml(session.room)}</div>
          <div class="page-label">${escapeHtml(pageLabel)}</div>
        </div>
      </header>`;
}

function accGroup(title, fields) {
    return `<div class="acc-group">
        <span class="acc-cap">${title}</span>
        ${fields.map((l) => `<span class="acc-f"><span class="acc-f-label">${l}</span><span class="acc-line"></span></span>`).join("")}
      </div>`;
}

function sigItem(label) {
    return `<div class="sig-item sig-inline">
        <span class="sig-label">${label}</span>
        <span class="sig-rule"></span>
      </div>`;
}

function renderSeatingGrid(grid, session) {
    grid.innerHTML = "";
    const layout = session.layout;
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    const rows = [...session.assigned];

    // widest block per column, so short rows stay aligned
    const widest = {};
    sides.forEach((side) => {
        widest[side] = layout.rowConfigs.reduce((m, c) => Math.max(m, Number(c[side]) || 0), 0);
    });

    // R1 sits nearest the board, so render from the back of the room forward
    rows.slice().reverse().forEach((row, rIdx) => {
        const rowNum = rows.length - rIdx;
        const rowEl = document.createElement("div");
        rowEl.className = "seating-row";

        const visible = sides.filter((s) => widest[s] > 0);
        visible.forEach((side, i) => {
            const group = makeSeatGroup(row[side] || [], widest[side], session.repeatRolls);
            if (i === 0) {
                group.classList.add("curve-left-max");
                group.insertAdjacentHTML("afterbegin", `<div class="row-number">R${rowNum}</div>`);
            }
            if (i === visible.length - 1) group.classList.add("curve-right-max");
            rowEl.appendChild(group);
            if (i < visible.length - 1) {
                rowEl.appendChild(createAisle("Path", visible.length === 2 ? "curve-center" : "curve-left-mid"));
            }
        });

        grid.appendChild(rowEl);
    });
}

function makeSeatGroup(seats, pad = 0, repeats) {
    const group = document.createElement("div");
    group.className = "seat-group";
    const list = seats.slice();
    while (list.length < pad) list.push("HIDDEN");
    list.forEach((roll) => {
        const box = document.createElement("div");
        if (roll === "HIDDEN") {
            box.className = "seat-box empty spacer";
        } else {
            box.className = "seat-box" + (roll ? "" : " empty");
            if (roll && repeats && repeats.has(roll)) {
                // re-examination: the roll number carries an (R)
                box.innerHTML = escapeHtml(roll) + `<span class="seat-re">(R)</span>`;
                box.classList.add("is-repeat");
            } else {
                box.textContent = roll || "";
            }
        }
        group.appendChild(box);
    });
    return group;
}

function createAisle(label, curveClass = "") {
    const a = document.createElement("div");
    a.className = "aisle-divider " + curveClass;
    a.innerHTML = `<span class="aisle-label">${label}</span>`;
    return a;
}

/* ─── Printing ───────────────────────────────────────────────────── */
function printReport() {
    document.body.classList.remove("print-all");
    window.print();
}

function printAll() {
    const targets = state.view.map((i) => state.sessions[i]);
    if (!targets.length) return;

    const host = $("printAllHost");
    host.innerHTML = "";
    setStatus(`Preparing ${targets.length} reports for printing…`);

    const frag = document.createDocumentFragment();
    targets.forEach((s) => frag.appendChild(buildSessionNode(s)));
    host.appendChild(frag);

    document.body.classList.add("print-all");
    setStatus(`${targets.length} reports ready. Use the browser print dialog.`);
    setTimeout(() => {
        window.print();
        document.body.classList.remove("print-all");
        host.innerHTML = "";
    }, 150);
}

/* ─── Export: seat allocation as CSV ─────────────────────────────── */
function exportCsv() {
    if (!state.sessions.length) return;
    const head = ["Exam Date", "Time", "Room", "Programme", "Subject", "Semester", "Row", "Column", "Seat", "Roll Number"];
    const lines = [head.join(",")];
    const q = (v) => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;

    for (const s of state.sessions) {
        const sides = SIDE_ORDER[s.layout.layoutType] || SIDE_ORDER.auditorium;
        s.assigned.forEach((row, rIdx) => {
            sides.forEach((side) => {
                (row[side] || []).forEach((roll, cIdx) => {
                    if (!roll) return;
                    lines.push([s.dateShort, s.time, s.room, s.programmes.join(" | "),
                        s.subjects.join(" | "), s.sems.join(" | "),
                        "R" + (rIdx + 1), side, cIdx + 1, roll].map(q).join(","));
                });
            });
        });
    }

    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "NMIMS_seat_allocation.csv";
    a.click();
    URL.revokeObjectURL(a.href);
    setStatus("Seat allocation exported as CSV.");
}
