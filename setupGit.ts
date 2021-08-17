import * as Colors from "https://deno.land/std@0.104.0/fmt/colors.ts";

async function setupGit(
  fullName: string,
  email: string,
  preferredEditor: string
) {
  console.log(
    Colors.green(`Setting up git config with\n`),
    `  Username: ${Colors.yellow(fullName)}, Email: ${Colors.yellow(
      email
    )}, Editor: ${Colors.yellow(preferredEditor)}`
  );

  const command = ["git", "config", "--global"];

  const p1 = Deno.run({
    cmd: [...command, "user.name", fullName],
  });
  const p2 = Deno.run({
    cmd: [...command, "user.email", email],
  });
  const p3 = Deno.run({
    cmd: [...command, "core.editor", preferredEditor],
  });

  await p1.status();
  p1.close();
  await p2.status();
  p2.close();
  await p3.status();
  p3.close();
}

await setupGit("Gary Moore", "madmangaz@gmail.com", "nvim");
