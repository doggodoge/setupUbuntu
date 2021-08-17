#!/usr/bin/env bash

function setupRust {
    curl https://sh.rustup.rs -sSf | sh -s -- -y
    source $HOME/.cargo/env
}

function setupDeno {
    sudo apt install build-essential libssl-dev pkg-config -y
    cargo install deno --locked
}

setupRust
setupDeno

deno run --allow-run setupDevelopmentTools.ts
deno run --allow-run setupGit.ts
