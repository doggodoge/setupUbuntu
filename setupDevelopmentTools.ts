import installPackages from "./installPackages.ts";
import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function installRust() {
  const install = Deno.run({
    cmd: ["curl https://sh.rustup.rs -sSf | sh -s -- -y"],
  });

  const result = await install.status();
  result.success
    ? console.log(Colors.green("Installed rust successfully."))
    : console.log(Colors.red("Failed to install rust."));
}

async function setupDevelopmentTools() {
  const devTools = [
    "build-essential",
    "fish",
    "neovim",
    "git",
    "clang",
    "cmake",
  ];
  console.log(Colors.blue("Dev Tools"));

  await installPackages(devTools);
  await installRust();
}

await setupDevelopmentTools();
