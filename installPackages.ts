import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function installPackages(packages: string[]) {
  console.log(
    Colors.green("Installing packages:"),
    Colors.yellow(packages.join(", "))
  );

  const installPackages = Deno.run({
    cmd: ["sudo", "apt", "install", "-y", ...packages],
    stdout: "null",
  });

  await installPackages.status();
}

export default installPackages;
