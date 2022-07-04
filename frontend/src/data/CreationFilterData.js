const CreationFilterData = [
  {
    id: 0,
    filter: "select by physical artwork",
    type: "artwork",
    option: ["Paiting", "Drawing", "Print", "Photo"],
  },
  {
    id: 1,
    filter: "select by technique",
    type: "technique",
    option: [
      "3D",
      "2D",
      "Harmony",
      "Tvpaint",
      "After",
      "Effect",
      "Maya",
      "Blender",
      "Animate",
    ],
  },
  {
    id: 2,
    filter: "select by type of clients",
    type: "clients",
    option: [
      "Traditionnal artist",
      "Illustrator",
      "Museum",
      "Gallery",
      "Collector",
      "Art lover",
    ],
  },
  {
    id: 3,
    filter: " select by service provider",
    type: "provider",
    option: ["solo artist ", "multiple artists ", "studio "],
  },
  {
    id: 4,
    filter: "sort by likes",
    type: "like",
    option: ["Most liked"],
  },
];

export default CreationFilterData;
