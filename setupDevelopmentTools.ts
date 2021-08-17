import installPackages from "./installPackages.ts";
import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function setupDevelopmentTools() {
  const devTools = ["git", "clang", "cmake"];
  console.log(Colors.green("Installing dev tools"));

  await installPackages(devTools);
}

await setupDevelopmentTools();
