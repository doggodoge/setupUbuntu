import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function clone(repo: string) {
  console.log(
    Colors.green("Cloning repo"),
    Colors.yellow(repo),
    Colors.green("into current directory.")
  );

  const clone = Deno.run({
    cmd: ["git", "clone", repo],
    stdout: 'null'
  });

  const status = await clone.status();
  status.success
    ? console.log(Colors.green("Clone succeeded."))
    : console.log(Colors.red("Clone failed."));
}

export { clone };
