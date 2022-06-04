## Ring Issue Repro

This repository replicates a build environment that generates a release build in which the TailwindCSS ring utility does not work as expected. See https://github.com/tailwindlabs/tailwindcss/issues/6328.

## Build details

This is a Phoenix Liveview umbrella project. To build the release version, run bin/build from the root directory. The build process uses Ansible to build the production version in a Docker container that matches the server environment.
