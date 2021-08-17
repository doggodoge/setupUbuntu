import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function setupDevelopmentTools() {
  const devTools = ["git", "clang", "cmake"];

  console.log(
    Colors.green("Installing dev tools:"),
    Colors.yellow(devTools.join(", "))
  );

  const update = Deno.run({
    cmd: ["sudo", "apt", "update"],
    stdout: "null",
  });
  const upgrade = Deno.run({
    cmd: ["sudo", "apt", "install", "-y", ...devTools],
    stdout: "null",
  });

  await update.status();
  update.close();
  await upgrade.status();
  upgrade.close();
}

await setupDevelopmentTools();
