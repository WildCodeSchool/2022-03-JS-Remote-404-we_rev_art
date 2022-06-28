const ArtistFilterData = [
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
    filter: " select by service provider",
    type: "provider",
    option: ["solo artist ", "multiple artists ", "studio "],
  },
  {
    id: 2,
    filter: " select by type of contract",
    type: "contract",
    option: ["paid service ", "free collaboration ", "studio "],
  },
  {
    id: 3,
    filter: "sort by likes",
    type: "likes",
    option: ["Most rated", "Most followed", "Most creations"],
  },
];

export default ArtistFilterData;
