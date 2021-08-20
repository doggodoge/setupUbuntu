import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

/**
 * Installs a list of ubuntu packages.
 * @param packages List of ubuntu package names.
 */
async function installPackages(packages: string[]) {
  console.log(
    Colors.green("Installing packages:"),
    Colors.yellow(packages.join(", "))
  );

  const installPackages = Deno.run({
    cmd: ["sudo", "apt", "install", "-y", ...packages],
    stderr: 'null'
  });

  await installPackages.status();
}

export default installPackages;
