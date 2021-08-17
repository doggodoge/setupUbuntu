import installPackages from "./installPackages.ts";
import { clone } from "./gitTools.ts";
import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function setupGithubCli() {
  await installPackages(["golang"]);
  await clone("https://github.com/cli/cli.git");

  const build = Deno.run({
    cwd: "./cli",
    cmd: ["sudo", "make", "install"],
  });

  const status = await build.status();
  status.success
    ? console.log(Colors.green("Successfully built and installed GitHub CLI."))
    : console.log(
        Colors.red("Failed to install GitHub CLI. Something went wrong.")
      );

  cleanup();
}

function cleanup() {
  Deno.removeSync("./cli", { recursive: true });
}

await setupGithubCli();
