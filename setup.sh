#!/usr/bin/env bash

function checkSudo {
    which sudo || {
        apt update
        apt install sudo
    }
}

function updatePackages {
    sudo apt update
    sudo apt upgrade -y
}

function setupDeno {
    sudo apt install curl unzip -y
    curl -fsSL https://deno.land/x/install/install.sh | sh
}

checkSudo
updatePackages
setupDeno

DENO_APP=$HOME/.deno/bin/deno

$DENO_APP run --allow-run setupDevelopmentTools.ts
$DENO_APP run --allow-run setupGit.ts
$DENO_APP run --allow-run --allow-write setupGithubCli.ts
