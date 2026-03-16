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
      { left: 3, middle: 0, right: 3 }, // R1
      { left: 4, middle: 0, right: 4 }, // R2
      { left: 3, middle: 0, right: 3 }, // R3
      { left: 3, middle: 0, right: 3 }, // R4
      { left: 1, middle: 0, right: 3 }  // R5
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
      { left: 4, middle: 0, right: 4 }, // R3
      { left: 3, middle: 0, right: 3 }, // R4
      { left: 4, middle: 0, right: 4 }  // R5
    ],
  },
  "E. CR 206": {
    layoutType: "auditorium",
    totalRows: 6,
    rowConfigs: [
      { left: 2, middle: 0, right: 2 }, // R1
      { left: 4, middle: 0, right: 4 }, // R2
      { left: 3, middle: 0, right: 3 }, // R3
      { left: 3, middle: 0, right: 3 }, // R4
      { left: 3, middle: 0, right: 3 },  // R5
      { left: 3, middle: 0, right: 3 }, // R6
    ],
  },
  "E. CR 207": {
    layoutType: "auditorium",
    totalRows: 6,
    rowConfigs: [
      { left: 2, middle: 0, right: 2 }, // R1
      { left: 4, middle: 0, right: 4 }, // R2
      { left: 4, middle: 0, right: 4 }, // R3
      { left: 4, middle: 0, right: 4 }, // R4
      { left: 4, middle: 0, right: 4 },  // R5
      { left: 3, middle: 0, right: 3 }, // R6
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
      { left: 2, middle: 0, right: 2 }, // R1: no middle bench
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
      { left: 0, mid1: 2, mid2: 2, right: 2 }, // R7
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
      { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 0 },
      { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
      { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
      { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
      { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 },
      { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 }
    ],
    alternateSeating: true
  },
  "E. CR G5 lab": {
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
    rowConfigs: { left: 2, middle: 2, right: 2 },
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
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R1
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R2
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R3
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R4
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R5
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R6
      { left: 2, mid1: 2, mid2: 2, right: 2 }, // R7
      { left: 2, mid1: 0, mid2: 0, right: 2 }  // R8: Inner columns empty/skipped
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
      { left: 4, middle: 0, right: 2 }, // R5
    ]
  },
  "E. CR 502": {
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

// State
const state = {
  rollFile: null,
  metaFile: null,
  rollData: null,
  metaData: null,
  rooms: [...DEFAULT_ROOMS],
  selectedRoom: DEFAULT_ROOMS[0],
  rowConfigs: [],
  academicYear: "2025-26",
  examType: "Final Exam",
  layoutType: "auditorium",
  alternateSeating: false,
  interleaveBatches: false,
  startDirection: "left"
};

// ─── DOM refs ────────────────────────────────────────────────────────
const uploadView = () => document.getElementById("uploadView");
const reportView = () => document.getElementById("reportView");

// ─── Init ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildRowConfigs(6);
  bindUploadCards();
  bindSidebarControls();
  bindGenerateBtn();

  // Initial room population
  const sel = document.getElementById("roomSelect");
  if (sel) {
    sel.innerHTML = DEFAULT_ROOMS.map((r) => `<option value="${r}">${r}</option>`).join("");
    sel.disabled = false;
    applyRoomDefaults(state.selectedRoom);
  }

  // Load SheetJS from CDN dynamically
  if (!window.XLSX) {
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
    s.onload = () => console.log("SheetJS ready");
    document.head.appendChild(s);
  }
});

// ─── Sidebar Controls ────────────────────────────────────────────────
function bindSidebarControls() {
  const ayInput = document.getElementById("academicYear");
  const exSelect = document.getElementById("examType");
  const rowCountInput = document.getElementById("totalRows");
  const layoutSelect = document.getElementById("layoutType");

  ayInput.addEventListener("input", () => {
    state.academicYear = ayInput.value.trim() || "2025-26";
  });
  exSelect.addEventListener("change", () => {
    state.examType = exSelect.value;
  });
  rowCountInput.addEventListener("change", () => {
    const n = Math.max(1, Math.min(25, parseInt(rowCountInput.value) || 6));
    rowCountInput.value = n;
    buildRowConfigs(n);
  });
  layoutSelect.addEventListener("change", () => {
    state.layoutType = layoutSelect.value;
    const n = Math.max(1, Math.min(25, parseInt(rowCountInput.value) || 6));
    buildRowConfigs(n);
  });

  const interleaveChk = document.getElementById("interleaveBatches");
  if (interleaveChk) {
    interleaveChk.addEventListener("change", () => {
      state.interleaveBatches = interleaveChk.checked;
    });
  }

  const startDirSelect = document.getElementById("startDirection");
  if (startDirSelect) {
    startDirSelect.addEventListener("change", () => {
      state.startDirection = startDirSelect.value;
    });
  }

  document.getElementById("updateLayoutBtn").addEventListener("click", () => {
    if (state.selectedRoom) generateReport();
    else alert("Please select a room first.");
  });

  // Room Select change listener
  const sel = document.getElementById("roomSelect");
  if (sel) {
    sel.addEventListener("change", () => handleRoomChange(sel.value));
  }
}

// Helper to keep both room dropdowns in sync and apply logic
function handleRoomChange(val) {
  state.selectedRoom = val;

  // Sync sidebar dropdown
  const s1 = document.getElementById("roomSelect");
  if (s1 && s1.value !== val) s1.value = val;

  // Sync toolbar dropdown (if it exists)
  const s2 = document.getElementById("toolbarRoomSelect");
  if (s2 && s2.value !== val) s2.value = val;

  applyRoomDefaults(val);
  generateReport();
}

// ─── Row Config Builder ───────────────────────────────────────────────
function buildRowConfigs(n) {
  const container = document.getElementById("rowConfigsList");
  container.innerHTML = "";
  state.rowConfigs = [];

  for (let i = 1; i <= n; i++) {
    let cfg;
    if (state.layoutType === "straight_quad") {
      cfg = { left: 2, mid1: 2, mid2: 2, right: 2 };
    } else if (state.layoutType === "straight_penta") {
      cfg = { left: 2, mid1: 2, mid2: 2, mid3: 2, right: 2 };
    } else if (state.layoutType === "straight_hexa") {
      cfg = { left: 2, mid1: 2, mid2: 2, mid3: 2, mid4: 2, right: 2 };
    } else {
      cfg = { left: 2, middle: (state.layoutType === "auditorium" ? 0 : 2), right: 2 };
    }
    state.rowConfigs.push(cfg);

    const item = document.createElement("div");
    item.className = "row-config-item";

    let gridHTML = "";
    if (state.layoutType === "straight_quad") {
      gridHTML = `
          <div>
            <div class="seat-input-label">Left</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.left}" data-row="${i - 1}" data-side="left">
          </div>
          <div>
            <div class="seat-input-label">Mid 1</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid1}" data-row="${i - 1}" data-side="mid1">
          </div>
          <div>
            <div class="seat-input-label">Mid 2</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid2}" data-row="${i - 1}" data-side="mid2">
          </div>
          <div>
            <div class="seat-input-label">Right</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.right}" data-row="${i - 1}" data-side="right">
          </div>`;
    } else if (state.layoutType === "straight_hexa") {
      gridHTML = `
          <div>
            <div class="seat-input-label">Left</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.left}" data-row="${i - 1}" data-side="left">
          </div>
          <div>
            <div class="seat-input-label">Mid 1</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid1}" data-row="${i - 1}" data-side="mid1">
          </div>
          <div>
            <div class="seat-input-label">Mid 2</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid2}" data-row="${i - 1}" data-side="mid2">
          </div>
          <div>
            <div class="seat-input-label">Mid 3</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid3}" data-row="${i - 1}" data-side="mid3">
          </div>
          <div>
            <div class="seat-input-label">Mid 4</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid4}" data-row="${i - 1}" data-side="mid4">
          </div>
          <div>
            <div class="seat-input-label">Right</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.right}" data-row="${i - 1}" data-side="right">
          </div>`;
    } else if (state.layoutType === "straight_penta") {
      gridHTML = `
          <div>
            <div class="seat-input-label">Left</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.left}" data-row="${i - 1}" data-side="left">
          </div>
          <div>
            <div class="seat-input-label">Mid 1</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid1}" data-row="${i - 1}" data-side="mid1">
          </div>
          <div>
            <div class="seat-input-label">Mid 2</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid2}" data-row="${i - 1}" data-side="mid2">
          </div>
          <div>
            <div class="seat-input-label">Mid 3</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.mid3}" data-row="${i - 1}" data-side="mid3">
          </div>
          <div>
            <div class="seat-input-label">Right</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.right}" data-row="${i - 1}" data-side="right">
          </div>`;
    } else {
      gridHTML = `
          <div>
            <div class="seat-input-label">Left</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.left}" data-row="${i - 1}" data-side="left">
          </div>
          <div>
            <div class="seat-input-label">Middle</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.middle}" data-row="${i - 1}" data-side="middle">
          </div>
          <div>
            <div class="seat-input-label">Right</div>
            <input class="seat-input" type="number" min="0" max="12" value="${cfg.right}" data-row="${i - 1}" data-side="right">
          </div>`;
    }

    item.innerHTML = `
      <div class="row-config-header" data-idx="${i - 1}">
        <span>Row ${i}</span>
        <span style="font-size:11px;color:var(--gray-400)">${state.layoutType === 'straight_quad' ? `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} R:${cfg.right}` : (state.layoutType === 'straight_penta' ? `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} M3:${cfg.mid3} R:${cfg.right}` : (state.layoutType === 'straight_hexa' ? `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} M3:${cfg.mid3} M4:${cfg.mid4} R:${cfg.right}` : `L:${cfg.left} M:${cfg.middle} R:${cfg.right}`))} ▸</span>
      </div>
      <div class="row-config-body" id="rowBody${i}">
        <div class="seats-grid">
          ${gridHTML}
        </div>
      </div>`;
    container.appendChild(item);
  }

  // Toggle expand
  container.querySelectorAll(".row-config-header").forEach((h) => {
    h.addEventListener("click", () => {
      const idx = h.getAttribute("data-idx");
      const body = document.getElementById("rowBody" + (parseInt(idx) + 1));
      body.classList.toggle("open");
    });
  });

  // Seat count inputs
  container.querySelectorAll(".seat-input").forEach((inp) => {
    inp.addEventListener("change", () => {
      const row = parseInt(inp.getAttribute("data-row"));
      const side = inp.getAttribute("data-side");
      const val = Math.max(0, Math.min(12, parseInt(inp.value) || 0));
      inp.value = val;
      state.rowConfigs[row][side] = val;
      // Update header summary
      const cfg = state.rowConfigs[row];
      const header = container.querySelector(`.row-config-header[data-idx="${row}"] span:last-child`);
      if (header) {
        if (state.layoutType === 'straight_quad') {
          header.textContent = `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} R:${cfg.right} ▸`;
        } else if (state.layoutType === 'straight_penta') {
          header.textContent = `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} M3:${cfg.mid3} R:${cfg.right} ▸`;
        } else if (state.layoutType === 'straight_hexa') {
          header.textContent = `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} M3:${cfg.mid3} M4:${cfg.mid4} R:${cfg.right} ▸`;
        } else {
          header.textContent = `L:${cfg.left} M:${cfg.middle} R:${cfg.right} ▸`;
        }
      }
    });
  });
}

/**
 * Updates the existing Row Config UI elements without rebuilding the entire list.
 * This ensures state.rowConfigs values are synced to the inputs and headers.
 */
function updateRowConfigUI() {
  const container = document.getElementById("rowConfigsList");
  if (!container) return;

  state.rowConfigs.forEach((cfg, i) => {
    // Update header summary
    const header = container.querySelector(`.row-config-header[data-idx="${i}"] span:last-child`);
    if (header) {
      if (state.layoutType === 'straight_quad') {
        header.textContent = `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} R:${cfg.right} ▸`;
      } else if (state.layoutType === 'straight_penta') {
        header.textContent = `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} M3:${cfg.mid3} R:${cfg.right} ▸`;
      } else if (state.layoutType === 'straight_hexa') {
        header.textContent = `L:${cfg.left} M1:${cfg.mid1} M2:${cfg.mid2} M3:${cfg.mid3} M4:${cfg.mid4} R:${cfg.right} ▸`;
      } else {
        header.textContent = `L:${cfg.left} M:${cfg.middle} R:${cfg.right} ▸`;
      }
    }

    // Update inputs
    const inputs = container.querySelectorAll(`.seat-input[data-row="${i}"]`);
    inputs.forEach(inp => {
      const side = inp.getAttribute("data-side");
      if (cfg[side] !== undefined) {
        inp.value = cfg[side];
      }
    });
  });
}

// ─── Upload Cards ─────────────────────────────────────────────────────
function bindUploadCards() {
  bindOneUpload("rollUpload", "rollCard", "rollFilename", (file) => {
    state.rollFile = file;
    parseExcel(file, (data) => { state.rollData = data; });
  });
  bindOneUpload("metaUpload", "metaCard", "metaFilename", (file) => {
    state.metaFile = file;
    parseExcel(file, (data) => {
      state.metaData = data;
      populateRooms(data);
    });
  });
}

function bindOneUpload(inputId, cardId, filenameId, callback) {
  const input = document.getElementById(inputId);
  const card = document.getElementById(cardId);
  const filenameEl = document.getElementById(filenameId);

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    card.classList.add("uploaded");
    filenameEl.textContent = file.name;
    card.querySelector(".upload-icon").textContent = "✅";
    callback(file);
  });

  card.addEventListener("dragover", (e) => { e.preventDefault(); card.classList.add("drag-over"); });
  card.addEventListener("dragleave", () => card.classList.remove("drag-over"));
  card.addEventListener("drop", (e) => {
    e.preventDefault();
    card.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    if (!file) return;
    card.classList.add("uploaded");
    filenameEl.textContent = file.name;
    card.querySelector(".upload-icon").textContent = "✅";
    callback(file);
  });
}

// ─── Parse Excel ──────────────────────────────────────────────────────
function parseExcel(file, callback) {
  if (!window.XLSX) {
    alert("SheetJS is still loading. Please try again in a moment.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const wb = XLSX.read(e.target.result, { type: "binary", cellDates: true });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(ws, { defval: "" });
      callback(data);
    } catch (err) {
      alert("Error reading Excel file: " + err.message);
    }
  };
  reader.readAsBinaryString(file);
}

// ─── Populate Room selector ───────────────────────────────────────────
function populateRooms(data) {
  const metaRooms = [...new Set(data.map((r) => r["Room No."]).filter(Boolean))];
  const combinedRooms = [...new Set([...DEFAULT_ROOMS, ...metaRooms])].sort();
  state.rooms = combinedRooms;

  const sel = document.getElementById("roomSelect");
  sel.innerHTML = combinedRooms.map((r) => `<option value="${r}" ${r === state.selectedRoom ? "selected" : ""}>${r}</option>`).join("");
  sel.disabled = false;
}

function applyRoomDefaults(roomName) {
  const defaults = ROOM_DEFAULTS[roomName];
  if (defaults) {
    state.layoutType = defaults.layoutType || "auditorium";
    state.alternateSeating = !!defaults.alternateSeating;

    // Update Sidebar UI
    const layoutSelect = document.getElementById("layoutType");
    const rowCountInput = document.getElementById("totalRows");
    if (layoutSelect) layoutSelect.value = state.layoutType;
    if (rowCountInput) rowCountInput.value = defaults.totalRows || 6;

    // Rebuild configurations with new row count
    // NOTE: This call populates state.rowConfigs with basic values based on layoutType
    buildRowConfigs(defaults.totalRows || 6);

    // Apply specific seat counts if provided
    if (defaults.rowConfigs) {
      if (Array.isArray(defaults.rowConfigs)) {
        // Apply per-row config
        defaults.rowConfigs.forEach((cfg, i) => {
          if (state.rowConfigs[i]) {
            state.rowConfigs[i].left = cfg.left;
            if (state.layoutType === "straight_quad") {
              state.rowConfigs[i].mid1 = cfg.mid1;
              state.rowConfigs[i].mid2 = cfg.mid2;
            } else if (state.layoutType === "straight_penta") {
              state.rowConfigs[i].mid1 = cfg.mid1;
              state.rowConfigs[i].mid2 = cfg.mid2;
              state.rowConfigs[i].mid3 = cfg.mid3;
            } else if (state.layoutType === "straight_hexa") {
              state.rowConfigs[i].mid1 = cfg.mid1;
              state.rowConfigs[i].mid2 = cfg.mid2;
              state.rowConfigs[i].mid3 = cfg.mid3;
              state.rowConfigs[i].mid4 = cfg.mid4;
            } else {
              state.rowConfigs[i].middle = cfg.middle;
            }
            state.rowConfigs[i].right = cfg.right;
          }
        });
      } else {
        // Apply uniform config to all rows
        state.rowConfigs.forEach((cfg) => {
          cfg.left = defaults.rowConfigs.left;
          if (state.layoutType === "straight_quad") {
            cfg.mid1 = defaults.rowConfigs.mid1;
            cfg.mid2 = defaults.rowConfigs.mid2;
          } else if (state.layoutType === "straight_penta") {
            cfg.mid1 = defaults.rowConfigs.mid1;
            cfg.mid2 = defaults.rowConfigs.mid2;
            cfg.mid3 = defaults.rowConfigs.mid3;
          } else if (state.layoutType === "straight_hexa") {
            cfg.mid1 = defaults.rowConfigs.mid1;
            cfg.mid2 = defaults.rowConfigs.mid2;
            cfg.mid3 = defaults.rowConfigs.mid3;
            cfg.mid4 = defaults.rowConfigs.mid4;
          } else {
            cfg.middle = defaults.rowConfigs.middle;
          }
          cfg.right = defaults.rowConfigs.right;
        });
      }

      // Update the UI HTML only, without overwriting state.rowConfigs again
      updateRowConfigUI();
    }
  } else {
    // Optional: Reset to standard defaults if room not in ROOM_DEFAULTS
    state.alternateSeating = false;
  }
}

// ─── Generate Button ──────────────────────────────────────────────────
function bindGenerateBtn() {
  document.getElementById("generateBtn").addEventListener("click", () => {
    // We now allow generation even without files for "Layout Preview" mode
    if (!state.selectedRoom) {
      alert("Please select a room.");
      return;
    }
    generateReport();
  });
}

// ─── Utilities ────────────────────────────────────────────────────────
function parseRollRange(rangeStr) {
  const results = [];
  try {
    const str = String(rangeStr);
    const parts = str.split(",").map(p => p.trim()).filter(Boolean);

    for (const part of parts) {
      const segments = part.split("-");
      if (segments.length >= 2) {
        const prefixMatch = segments[0].match(/[A-Za-z]+/);
        const startMatch = segments[0].match(/\d+/);
        const endMatch = segments[1].match(/\d+/);
        if (prefixMatch && startMatch && endMatch) {
          results.push({
            prefix: prefixMatch[0],
            start: parseInt(startMatch[0]),
            end: parseInt(endMatch[0]),
          });
        }
      }
    }
  } catch (e) { /* ignore */ }
  return results.length > 0 ? results : null;
}

function extractNum(val) {
  const m = String(val).match(/\d+/);
  return m ? parseInt(m[0]) : NaN;
}

/**
 * Normalizes a string by:
 * 1. Trimming whitespace
 * 2. Lowercasing
 * 3. Collapsing multiple whitespaces/newlines into a single space
 */
function normalizeStr(s) {
  if (!s) return "";
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function formatDate(val) {
  if (!val) return "—";
  if (val instanceof Date) {
    return val.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }
  const s = String(val).trim();
  // Handle "Monday, 1 December, 2025" or similar long formats
  const cleanDate = s.replace(/^[A-Za-z]+,\s*/, ""); // remove "Monday, "
  return cleanDate || s || "—";
}

// ─── Core: Generate Report ────────────────────────────────────────────
function generateReport() {
  const room = state.selectedRoom;
  const normalizedSelectedRoom = normalizeStr(room);

  // Flexible column mapping for Meta Data
  const metaRows = (state.metaData || []).filter((r) => {
    const rNum = normalizeStr(r["Room No."] || r["Room"] || r["RoomNo"] || "");
    return rNum === normalizedSelectedRoom;
  });

  // Collect students
  const allStudents = [];
  const prgNames = [];
  const batchArrays = []; // For interleave: each batch gets its own array

  if (metaRows.length > 0 && state.rollData) {
    for (const row of metaRows) {
      // Flexible Programme Name extraction
      const prgColVariants = ["Prg. of Study Name", "Programme & Stream", "Programme", "Programme Name", "Stream"];
      let prgName = "";
      for (const variant of prgColVariants) {
        if (row[variant]) {
          prgName = String(row[variant]);
          break;
        }
      }
      if (prgName) prgNames.push(prgName);

      const ranges = parseRollRange(row["Roll No."]);
      if (!ranges) continue;

      // Support multiple programmes in one cell (split by comma or newline)
      const possiblePrgNames = prgName.split(/[,\n]/).map(p => normalizeStr(p)).filter(Boolean);

      const subset = state.rollData.filter((r) => {
        let studentPrg = "";
        for (const variant of prgColVariants) {
          if (r[variant]) {
            studentPrg = String(r[variant]);
            break;
          }
        }
        return possiblePrgNames.includes(normalizeStr(studentPrg));
      });

      for (const range of ranges) {
        const batchStudents = []; // Per-range batch
        const valid = subset
          .filter((r) => {
            // Flexible Roll Number extraction
            const rollStr = String(r["Roll Number"] || r["Roll No."] || r["RollNo"] || "");
            const num = extractNum(rollStr);
            const prefix = (rollStr.match(/[A-Za-z]+/) || [""])[0];
            return !isNaN(num) &&
              num >= range.start &&
              num <= range.end &&
              normalizeStr(prefix) === normalizeStr(range.prefix);
          })
          .sort((a, b) => extractNum(a["Roll Number"] || a["Roll No."] || a["RollNo"]) - extractNum(b["Roll Number"] || b["Roll No."] || b["RollNo"]));

        valid.forEach((r) => {
          const rollVal = String(r["Roll Number"] || r["Roll No."] || r["RollNo"] || "");
          if (rollVal) batchStudents.push(rollVal);
        });

        if (batchStudents.length > 0) batchArrays.push(batchStudents);
      }
    }

    // Interleave or concatenate batches
    if (state.interleaveBatches && batchArrays.length > 1) {
      // Round-robin interleave
      const maxLen = Math.max(...batchArrays.map(a => a.length));
      for (let i = 0; i < maxLen; i++) {
        for (const batch of batchArrays) {
          if (i < batch.length) allStudents.push(batch[i]);
        }
      }
    } else {
      // Sequential (default)
      for (const batch of batchArrays) {
        allStudents.push(...batch);
      }
    }
  }

  // Fallback: If no students found, fill with dummy data (RAN001, RAN002, etc.)
  if (allStudents.length === 0) {
    const totalSeats = state.rowConfigs.reduce((a, c) => {
      if (state.layoutType === "straight_quad") {
        return a + (c.left || 0) + (c.mid1 || 0) + (c.mid2 || 0) + (c.right || 0);
      } else if (state.layoutType === "straight_penta") {
        return a + (c.left || 0) + (c.mid1 || 0) + (c.mid2 || 0) + (c.mid3 || 0) + (c.right || 0);
      } else if (state.layoutType === "straight_hexa") {
        return a + (c.left || 0) + (c.mid1 || 0) + (c.mid2 || 0) + (c.mid3 || 0) + (c.mid4 || 0) + (c.right || 0);
      }
      return a + (c.left || 0) + (c.middle || 0) + (c.right || 0);
    }, 0);
    for (let i = 1; i <= totalSeats; i++) {
      allStudents.push(`RAN${String(i).padStart(3, '0')}`);
    }
    if (prgNames.length === 0) prgNames.push("Dummy Programme");
  }

  // Assign to seats
  let idx = 0;
  const assignedRows = state.rowConfigs.map((cfg) => {
    const rowData = { left: [], mid1: [], mid2: [], mid3: [], mid4: [], middle: [], right: [] };
    let sides;
    if (state.layoutType === "straight_quad") {
      sides = ["left", "mid1", "mid2", "right"];
    } else if (state.layoutType === "straight_penta") {
      sides = ["left", "mid1", "mid2", "mid3", "right"];
    } else if (state.layoutType === "straight_hexa") {
      sides = ["left", "mid1", "mid2", "mid3", "mid4", "right"];
    } else {
      sides = ["left", "middle", "right"];
    }

    // Reverse fill order if starting from right
    if (state.startDirection === "right") sides = [...sides].reverse();

    for (const side of sides) {
      if (cfg[side] === undefined) continue;
      for (let s = 0; s < cfg[side]; s++) {
        // Support alternate seating: only fill even-numbered indices (0, 2, 4...)
        if (state.alternateSeating) {
          if (s % 2 === 0) {
            rowData[side].push(idx < allStudents.length ? allStudents[idx++] : "");
          } else {
            rowData[side].push(""); // Blank seat
          }
        } else {
          rowData[side].push(idx < allStudents.length ? allStudents[idx++] : "");
        }
      }
    }
    return rowData;
  });

  const firstMeta = metaRows[0] || {};
  const info = {
    room,
    academicYear: state.academicYear,
    examType: state.examType,
    date: formatDate(firstMeta["Date"]),
    time: firstMeta["Time"] || "—",
    programmes: [...new Set(prgNames)].join(" / "),
    subjects: metaRows.length ? [...new Set(metaRows.map((r) => r["Subjects"]).filter(Boolean))].join(", ") : "SAMPLE SUBJECT",
    sem: firstMeta["Sem"] || "—",
    total: allStudents.length,
  };

  renderReport(info, assignedRows, allStudents);
}

// ─── Render Report ────────────────────────────────────────────────────
function renderReport(info, assignedRows, allStudents) {
  // Switch views
  uploadView().style.display = "none";
  reportView().style.display = "block";
  reportView().classList.add("fade-up");

  const toolbarRoomSel = document.getElementById("toolbarRoomSelect");
  toolbarRoomSel.innerHTML = state.rooms.map((r) =>
    `<option value="${r}" ${r === info.room ? "selected" : ""}>${r}</option>`
  ).join("");

  // Remove existing listeners before adding new one to prevent multiple triggers
  const newToolbarRoomSel = toolbarRoomSel.cloneNode(true);
  toolbarRoomSel.parentNode.replaceChild(newToolbarRoomSel, toolbarRoomSel);

  newToolbarRoomSel.addEventListener("change", () => {
    handleRoomChange(newToolbarRoomSel.value);
  });

  // Stat bar
  const totalSeats = state.rowConfigs.reduce((a, c) => {
    if (state.layoutType === "straight_quad") {
      return a + (c.left || 0) + (c.mid1 || 0) + (c.mid2 || 0) + (c.right || 0);
    } else if (state.layoutType === "straight_penta") {
      return a + (c.left || 0) + (c.mid1 || 0) + (c.mid2 || 0) + (c.mid3 || 0) + (c.right || 0);
    } else if (state.layoutType === "straight_hexa") {
      return a + (c.left || 0) + (c.mid1 || 0) + (c.mid2 || 0) + (c.mid3 || 0) + (c.mid4 || 0) + (c.right || 0);
    }
    return a + (c.left || 0) + (c.middle || 0) + (c.right || 0);
  }, 0);
  document.getElementById("statTotal").textContent = info.total;
  document.getElementById("statSeats").textContent = totalSeats;
  document.getElementById("statRows").textContent = state.rowConfigs.length;
  document.getElementById("statOccupancy").textContent =
    totalSeats > 0 ? Math.round((info.total / totalSeats) * 100) + "%" : "—";

  // Page 1 header
  document.getElementById("rptInstName").textContent = "SVKM'S NMIMS";
  document.getElementById("rptRoom").textContent = "ROOM: " + info.room;
  document.getElementById("rptAcYear").textContent = info.academicYear;
  document.getElementById("rptExamType").textContent = info.examType;
  document.getElementById("rptDate").textContent = info.date;
  document.getElementById("rptTime").textContent = info.time;
  document.getElementById("rptPrg").textContent = info.programmes;
  document.getElementById("rptSubject").textContent = info.subjects;
  document.getElementById("rptSem").textContent = info.sem;
  document.getElementById("rptTotal").textContent = info.total;

  // Seating grid (rows reversed: row 1 at bottom near supervisor desk)
  const seatingGrid = document.getElementById("seatingGrid");
  seatingGrid.innerHTML = "";

  if (state.layoutType === "straight_quad") {
    seatingGrid.classList.add("lab-layout", "quad-layout");
    seatingGrid.classList.remove("hexa-layout", "penta-layout");
  } else if (state.layoutType === "straight_penta") {
    seatingGrid.classList.add("lab-layout", "penta-layout");
    seatingGrid.classList.remove("quad-layout", "hexa-layout");
  } else if (state.layoutType === "straight_hexa") {
    seatingGrid.classList.add("lab-layout", "hexa-layout");
    seatingGrid.classList.remove("quad-layout", "penta-layout");
  } else if (state.layoutType === "lab" || state.layoutType === "straight_2_2_2") {
    seatingGrid.classList.add("lab-layout");
    seatingGrid.classList.remove("quad-layout", "hexa-layout", "penta-layout");
  } else {
    seatingGrid.classList.remove("lab-layout", "quad-layout", "hexa-layout", "penta-layout");
  }

  // Seating plan title adjustment
  const planTitle = document.querySelector(".seating-plan-title");
  if (planTitle) {
    if (state.layoutType === "straight_hexa") planTitle.textContent = "Hexa-Column Seating Layout";
    else if (state.layoutType === "straight_penta") planTitle.textContent = "Penta-Column Seating Layout";
    else if (state.layoutType === "straight_quad") planTitle.textContent = "Quad-Column Seating Layout";
    else if (state.layoutType === "lab") planTitle.textContent = "Computer Lab Seating Layout";
    else planTitle.textContent = "Auditorium Seating Layout";
  }

  const reversed = [...assignedRows].reverse();
  reversed.forEach((row, rIdx) => {
    const rowEl = document.createElement("div");
    rowEl.className = "seating-row";

    const rowNum = reversed.length - rIdx;

    if (state.layoutType === "straight_quad") {
      // 4 Blocks, 3 Aisles (always render blocks to preserve grid alignment)

      const makeQuadBlock = (seats, side, labelText = null) => {
        const group = makeSeatGroup(seats);
        if (labelText) {
          group.classList.add("curve-left-max");
          group.insertAdjacentHTML('afterbegin', `<div class="row-number">${labelText}</div>`);
        }
        // If empty, fill with invisible spacers to match max width of this column
        if (seats.length === 0) {
          const maxWidth = state.rowConfigs.reduce((max, c) => Math.max(max, c[side] || 0), 0);
          for (let i = 0; i < maxWidth; i++) {
            const spacer = document.createElement("div");
            spacer.className = "seat-box empty";
            spacer.style.visibility = "hidden";
            group.appendChild(spacer);
          }
        }
        return group;
      };

      rowEl.appendChild(makeQuadBlock(row.left || [], "left", `R${rowNum}`));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeQuadBlock(row.mid1 || [], "mid1"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeQuadBlock(row.mid2 || [], "mid2"));
      rowEl.appendChild(createAisle("Path"));

      rowEl.appendChild(makeQuadBlock(row.right || [], "right"));
    } else if (state.layoutType === "straight_hexa") {
      // 6 Blocks, 5 Aisles

      const makeHexaBlock = (seats, side, labelText = null) => {
        const group = makeSeatGroup(seats);
        if (labelText) {
          group.classList.add("curve-left-max");
          group.insertAdjacentHTML('afterbegin', `<div class="row-number">${labelText}</div>`);
        }
        // If empty, fill with invisible spacers to match max width of this column
        if (seats.length === 0) {
          const maxWidth = state.rowConfigs.reduce((max, c) => Math.max(max, c[side] || 0), 0);
          for (let i = 0; i < maxWidth; i++) {
            const spacer = document.createElement("div");
            spacer.className = "seat-box empty";
            spacer.style.visibility = "hidden";
            group.appendChild(spacer);
          }
        }
        return group;
      };

      rowEl.appendChild(makeHexaBlock(row.left || [], "left", `R${rowNum}`));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeHexaBlock(row.mid1 || [], "mid1"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeHexaBlock(row.mid2 || [], "mid2"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeHexaBlock(row.mid3 || [], "mid3"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeHexaBlock(row.mid4 || [], "mid4"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makeHexaBlock(row.right || [], "right"));
    } else if (state.layoutType === "straight_penta") {
      // 5 Blocks, 4 Aisles

      const makePentaBlock = (seats, side, labelText = null) => {
        const group = makeSeatGroup(seats);
        if (labelText) {
          group.classList.add("curve-left-max");
          group.insertAdjacentHTML('afterbegin', `<div class="row-number">${labelText}</div>`);
        }
        // If empty, fill with invisible spacers to match max width of this column
        if (seats.length === 0) {
          const maxWidth = state.rowConfigs.reduce((max, c) => Math.max(max, c[side] || 0), 0);
          for (let i = 0; i < maxWidth; i++) {
            const spacer = document.createElement("div");
            spacer.className = "seat-box empty";
            spacer.style.visibility = "hidden";
            group.appendChild(spacer);
          }
        }
        return group;
      };

      rowEl.appendChild(makePentaBlock(row.left || [], "left", `R${rowNum}`));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makePentaBlock(row.mid1 || [], "mid1"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makePentaBlock(row.mid2 || [], "mid2"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makePentaBlock(row.mid3 || [], "mid3"));
      rowEl.appendChild(createAisle("Path"));
      rowEl.appendChild(makePentaBlock(row.right || [], "right"));
    } else if (state.layoutType === "lab" || state.layoutType === "straight_2_2_2" || (row.middle && row.middle.length > 0)) {
      // 3 Blocks, 2 Aisles

      const makeLabBlock = (seats, side, labelText = null) => {
        const group = makeSeatGroup(seats);
        if (labelText) {
          group.classList.add("curve-left-max");
          group.insertAdjacentHTML('afterbegin', `<div class="row-number">${labelText}</div>`);
        }
        // If empty, fill with invisible spacers to match max width of this column
        if (seats.length === 0) {
          const maxWidth = state.rowConfigs.reduce((max, c) => Math.max(max, c[side] || 0), 0);
          for (let i = 0; i < maxWidth; i++) {
            const spacer = document.createElement("div");
            spacer.className = "seat-box empty";
            spacer.style.visibility = "hidden";
            group.appendChild(spacer);
          }
        }
        return group;
      };

      rowEl.appendChild(makeLabBlock(row.left || [], "left", `R${rowNum}`));
      rowEl.appendChild(createAisle("Path", "curve-left-mid"));
      rowEl.appendChild(makeLabBlock(row.middle || [], "middle"));
      rowEl.appendChild(createAisle("Path", "curve-right-mid"));
      rowEl.appendChild(makeLabBlock(row.right || [], "right"));
    } else {
      // 2 Blocks, 1 Aisle
      const leftGroup = makeSeatGroup(row.left);
      leftGroup.classList.add("curve-left-max");
      leftGroup.insertAdjacentHTML('afterbegin', `<div class="row-number">R${rowNum}</div>`);
      rowEl.appendChild(leftGroup);

      rowEl.appendChild(createAisle("Path", "curve-center"));

      const rightGroup = makeSeatGroup(row.right);
      rightGroup.classList.add("curve-right-max");
      rowEl.appendChild(rightGroup);
    }

    seatingGrid.appendChild(rowEl);
  });

  // Page 2: tally
  document.getElementById("p2Room").textContent = "ROOM: " + info.room;
  const tbody = document.getElementById("tallyBody");
  tbody.innerHTML = "";
  const half = Math.ceil(allStudents.length / 2);
  for (let i = 0; i < half; i++) {
    const i2 = i + half;
    const r1 = allStudents[i] || "";
    const r2 = i2 < allStudents.length ? allStudents[i2] : "";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="center">${i + 1}</td>
      <td class="roll">${r1}</td>
      <td class="supp center"></td>
      <td class="center col-divider">${r2 ? i2 + 1 : ""}</td>
      <td class="roll">${r2}</td>
      <td class="supp center"></td>`;
    tbody.appendChild(tr);
  }
}

function makeSeatGroup(seats) {
  const group = document.createElement("div");
  group.className = "seat-group";
  seats.forEach((roll) => {
    const box = document.createElement("div");
    box.className = "seat-box" + (roll ? "" : " empty");
    box.textContent = roll || "";
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

function createNumberedBlock(seats, rowNum) {
  const group = makeSeatGroup(seats);
  group.classList.add("curve-left-max");
  group.insertAdjacentHTML('afterbegin', `<div class="row-number">R${rowNum}</div>`);
  return group;
}

// ─── Print button ─────────────────────────────────────────────────────
function printReport() {
  window.print();
}

// ─── Back button ─────────────────────────────────────────────────────
function goBack() {
  uploadView().style.display = "block";
  reportView().style.display = "none";
}
