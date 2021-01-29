// // import * as path from "path";
// import { spawn } from "child_process";
// import * as chalk from "chalk";
// import * as ora from "ora";

// // import fs from "fs-extra";
// // import { Project } from "miniprogram-ci";

// const build = () => {
//   const cmd = "taro build --type weapp";
//   const spinner = ora(`正在构建项目...`);
//   const proc = spawn("npx", cmd.split(" "), {});
//   proc.on("close", (code) => {
//     if (code !== 0) {
//       spinner.color = "red";
//       chalk.red(`构建失败${code}`);
//     } else {
//       spinner.color = "green";
//       chalk.green(`构建成功`);
//     }
//   });
// };

// build();
