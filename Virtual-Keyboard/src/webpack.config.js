const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.export = {
  entry: "./src/js/index.js", // 자바스크립트의 진입점
  output: {
    filename: "bundle.js", // 번들될 파일 이름
    path: path.resolve(__dirname, "./dist"), // 번들 될 파일의 생성 경로
    clean: true, // 번들 될 파일의 경로에 다른 파일이 있을 경우, 삭제하고 진행
  },
  devtool: "source-map", // 빌드한 파일과 원본 파일을 연결
  mode: "development",
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
};
