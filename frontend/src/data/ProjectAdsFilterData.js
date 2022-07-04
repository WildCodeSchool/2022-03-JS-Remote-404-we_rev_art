const ProjectAdsFilterData = [
  {
    id: 0,
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
    id: 1,
    filter: "select by type of contract",
    type: "contract",
    option: ["paid services", "free collaboration"],
  },
  {
    id: 2,
    filter: " select by service provider",
    type: "provider",
    option: ["solo artist ", "multiple artists ", "studio "],
  },
  {
    id: 3,
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
    id: 4,
    filter: "select by timeframe",
    type: "timeframe",
    option: ["Urgent", "One month", "Long term", "Recrutement"],
  },
];

export default ProjectAdsFilterData;
