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

/* ─── Init ───────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
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
        parseXml(sstXml).querySelectorAll("sst > si").forEach((si) => {
            const t = si.querySelector(":scope > t");
            if (t) { shared.push(t.textContent); return; }
            let out = "";
            si.querySelectorAll("r > t").forEach((x) => { out += x.textContent; });
            shared.push(out);
        });
    }

    const dateFmt = dateStyles(await zipText(files, "xl/styles.xml"));

    // cells -> a grid
    const grid = [];
    parseXml(sheetXml).querySelectorAll("sheetData > row").forEach((row) => {
        const rowIdx = parseInt(row.getAttribute("r"), 10) - 1;
        const cells = [];
        let auto = 0;
        row.querySelectorAll("c").forEach((c) => {
            const ref = c.getAttribute("r");
            const ci = ref ? colOf(ref) : auto;
            auto = ci + 1;

            const type = c.getAttribute("t");
            let value = "";
            if (type === "inlineStr") {
                const t = c.querySelector("is t");
                value = t ? t.textContent : "";
            } else {
                const v = c.querySelector("v");
                const raw = v ? v.textContent : "";
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
        });
        grid[isNaN(rowIdx) ? grid.length : rowIdx] = cells;
    });

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
        const seg = part.split(/\s*[-–to]+\s*/i).filter(Boolean);
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

/* Students for one allocation row: match on range, then narrow by
   subject and programme when the roll list carries those columns. */
function studentsForAllocation(metaRow, ranges) {
    const wantSubject = normalizeStr(pick(metaRow, ["Subject", "Subjects"]));
    const wantProg = normalizeStr(pick(metaRow, ["Prog. Name & Stream", "Programme", "Prog Name", "Program"]));

    const inRange = (state.rollData || []).filter((st) =>
        rollInRanges(pick(st, ["Roll Number", "Roll No.", "Roll No", "RollNumber"]), ranges));

    const narrow = (rows, key, want) => {
        if (!want) return rows;
        const hit = rows.filter((st) => normalizeStr(pick(st, key)) === want);
        return hit.length ? hit : rows;      // ignore the filter if the column is absent/different
    };

    let rows = narrow(inRange, ["SUBJECT", "Subject", "Subjects"], wantSubject);
    rows = narrow(rows, ["Prog. Name & Stream", "Programme", "Prog Name", "Program"], wantProg);

    const out = [];
    const seen = new Set();
    for (const st of rows) {
        const roll = String(pick(st, ["Roll Number", "Roll No.", "Roll No", "RollNumber"])).trim();
        if (roll && !seen.has(roll)) { seen.add(roll); out.push(roll); }
    }
    out.sort((a, b) => {
        const pa = (a.match(/[A-Za-z]+/) || [""])[0], pb = (b.match(/[A-Za-z]+/) || [""])[0];
        return pa === pb ? extractNum(a) - extractNum(b) : pa.localeCompare(pb);
    });
    return out;
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

function getRoomLayout(room, count) {
    const override = state.overrides[room];
    if (override) return JSON.parse(JSON.stringify(override));

    const d = ROOM_DEFAULTS[room];
    if (!d) return autoFitLayout(count);

    const layoutType = d.layoutType || "auditorium";
    const totalRows = d.totalRows || 6;
    return {
        layoutType,
        totalRows,
        rowConfigs: cloneRowConfigs(d.rowConfigs, layoutType, totalRows),
        alternateSeating: !!d.alternateSeating,
        isFallback: false
    };
}

function countSeats(layout) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    return layout.rowConfigs.reduce((sum, cfg) =>
        sum + sides.reduce((a, s) => a + (Number(cfg[s]) || 0), 0), 0);
}

/* A supervisor report must never drop a student. If the saved layout for
   the room holds fewer seats than the students allotted to it, extend it
   with extra rows (shaped like the widest existing row) and report it. */
function fitLayoutToStudents(layout, count) {
    const sides = SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium;
    const rowSeats = (cfg) => sides.reduce((a, s) => a + (Number(cfg[s]) || 0), 0);

    let seats = countSeats(layout);
    if (count <= seats) return { added: 0, short: 0, seats };

    // widest row is the best template for an extra row
    const template = layout.rowConfigs.reduce(
        (best, cfg) => (rowSeats(cfg) > rowSeats(best) ? cfg : best),
        layout.rowConfigs[0] || {});
    const perRow = rowSeats(template);
    if (!perRow) return { added: 0, short: count - seats, seats };

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

/* Seat filling: row by row (R1 nearest the board), column by column. */
function assignSeats(students, layout, startDirection) {
    const sides = (SIDE_ORDER[layout.layoutType] || SIDE_ORDER.auditorium).slice();
    if (startDirection === "right") sides.reverse();

    let i = 0;
    return layout.rowConfigs.map((cfg) => {
        const row = {};
        sides.forEach((side) => { row[side] = []; });
        for (const side of sides) {
            const n = Number(cfg[side]) || 0;
            for (let s = 0; s < n; s++) row[side].push(i < students.length ? students[i++] : "");
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

        for (const row of g.rows) {
            const prog = String(pick(row, ["Prog. Name & Stream", "Programme", "Prog Name", "Program"])).trim();
            const subj = titleCaseSubject(pick(row, ["Subject", "Subjects"]));
            const rangeStr = String(pick(row, ["Roll No. Range", "Roll No.Range", "Roll Range", "Roll No."])).trim();
            const sem = formatSemester(pick(row, ["Semester", "Sem"]));
            const cnt = parseInt(pick(row, ["Total Students Count", "Total Students", "Count"], 0), 10);

            if (prog && !programmes.includes(prog)) programmes.push(prog);
            if (subj && !subjects.includes(subj)) subjects.push(subj);
            if (rangeStr && !ranges.includes(rangeStr)) ranges.push(rangeStr);
            if (sem && sem !== "—" && !sems.includes(sem)) sems.push(sem);
            if (!isNaN(cnt)) stated += cnt;

            const parsed = parseRollRange(rangeStr);
            cohorts.push(parsed.length ? studentsForAllocation(row, parsed) : []);
        }

        // de-duplicate across cohorts while keeping cohort structure
        const seen = new Set();
        const cleanCohorts = cohorts.map((c) => c.filter((r) => !seen.has(r) && seen.add(r)));
        const students = state.interleaveBatches
            ? interleaveCohorts(cleanCohorts)
            : cleanCohorts.flat();

        const layout = getRoomLayout(g.room, students.length);
        const savedSeats = countSeats(layout);
        const fit = fitLayoutToStudents(layout, students.length);
        const seats = fit.seats;

        const warnings = [], notes = [];
        if (students.length === 0) {
            warnings.push("No students matched the roll list for this allocation — check the roll number range.");
        }
        if (fit.short > 0) {
            warnings.push(`${fit.short} student(s) could not be seated — this room needs a larger layout.`);
        }
        if (fit.added > 0) {
            notes.push(`Saved layout holds ${savedSeats} seats for ${students.length} students; `
                + `${fit.added} extra row(s) added so everyone is seated.`);
        }
        if (stated && stated !== students.length) {
            notes.push(`Seating plan states ${stated} students; the roll list gives ${students.length}. `
                + `The roll list has been used.`);
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
            assigned: assignSeats(students, layout, state.startDirection),
            warnings, notes
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

    const flagged = sessions.filter((s) => s.warnings.length).length;
    const noted = sessions.filter((s) => !s.warnings.length && s.notes.length).length;
    setStatus(`${sessions.length} reports generated across `
        + `${new Set(sessions.map((s) => s.dateKey)).size} exam dates.`
        + (flagged ? ` ${flagged} need attention.` : "")
        + (noted ? ` ${noted} carry a note.` : "")
        + (skipped ? ` ${skipped} row(s) had no room number.` : ""));
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
        const flag = s.warnings.length ? " *" : "";
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
        rebuildSession(state.current);
        renderRowConfigEditor(state.sessions[state.current].layout);
        setStatus(`Layout for ${s.room} reset to the saved default.`);
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
    // every session in this room follows the override
    state.sessions.forEach((sess, i) => { if (sess.room === s.room) rebuildSession(i); });
    setStatus(`Layout override applied to every report for ${s.room}.`);
}

function rebuildSession(index) {
    const s = state.sessions[index];
    if (!s) return;
    s.layout = getRoomLayout(s.room, s.students.length);
    const savedSeats = countSeats(s.layout);
    const fit = fitLayoutToStudents(s.layout, s.students.length);
    s.seats = fit.seats;
    s.assigned = assignSeats(s.students, s.layout, state.startDirection);
    s.warnings = s.warnings.filter((w) => !/could not be seated/.test(w));
    s.notes = s.notes.filter((n) => !/extra row|standard layout/.test(n));
    if (fit.short > 0) {
        s.warnings.push(`${fit.short} student(s) could not be seated — this room needs a larger layout.`);
    }
    if (fit.added > 0) {
        s.notes.push(`Saved layout holds ${savedSeats} seats for ${s.students.length} students; `
            + `${fit.added} extra row(s) added so everyone is seated.`);
    }
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
    stacked:    { planH: 97,  planW: 276, seatHMax: 15, seatWMax: 30, seatFsMax: 16, tallyFs: 7 },
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
    // vertical: rows share the plan height, allowing 1.3mm between rows
    const ROW_GAP = 1.9;                       // matches .seating-row margin in print
    const h = clamp(4.5, Math.min(b.planH / rows - ROW_GAP, b.seatHMax * k), b.seatHMax * k);
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
    const items = session.warnings.map((w) => `<div class="warn-item">${escapeHtml(w)}</div>`)
        .concat(session.notes.map((n) => `<div class="note-item">${escapeHtml(n)}</div>`));
    warn.className = "warning-bar no-print" + (session.warnings.length ? " is-warning" : " is-note");
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

        <div class="seating-plan-area">
          <div class="seating-plan-head">
            <span class="seating-plan-title">${planTitleFor(session.layout.layoutType)}</span>
          </div>
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
          <div class="tally-split">${tallyColumns(session.students.length)
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
          <div class="sig-grid">
            ${sigItem("Supervisor 1")}
            ${sigItem("Supervisor 2")}
            ${sigItem("Exam Incharge")}
          </div>
      </section>`;

    // seating grid
    const grid = wrap.querySelector(".seating-grid");
    renderSeatingGrid(grid, session);

    // tally rows, distributed down each column in turn
    const bodies = wrap.querySelectorAll(".tally-table tbody");
    const slices = tallyColumns(session.students.length);
    const row = (n, roll, spare) =>
        `<tr${spare ? ' class="spare"' : ""}><td class="center">${n}</td>`
        + `<td class="roll">${escapeHtml(roll)}</td><td class="supp center"></td></tr>`;

    const n = session.students.length;
    slices.forEach(([from, to], ci) => {
        let html = "";
        for (let i = from; i < to; i++) {
            html += i < n ? row(i + 1, session.students[i], false)
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
          <div class="crest">MPSTME</div>
          <div>
            <div class="inst-name">SVKM's NMIMS</div>
            <div class="inst-tagline">Narsee Monjee Institute of Management Studies &middot; Deemed to be University</div>
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
    return `<div class="sig-item">
        <div class="sig-label">${label}</div>
        <div class="sig-name-line"></div>
        <div class="sig-meta"><span>Name</span><span>Signature</span></div>
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
            const group = makeSeatGroup(row[side] || [], widest[side]);
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

function makeSeatGroup(seats, pad = 0) {
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
            box.textContent = roll || "";
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
