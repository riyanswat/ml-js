const featureFunctions = {};

featureFunctions.getPathCount = (paths) => {
  return paths.length;
};

featureFunctions.getPointCount = (paths) => {
  const points = paths.flat();
  return points.length;
};

if (typeof module !== "undefined") {
  module.exports = featureFunctions;
}
