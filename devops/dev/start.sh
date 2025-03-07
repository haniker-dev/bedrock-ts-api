#!/bin/bash
set -e

# shellcheck disable=SC1091
source .env.development

concurrently \
  --names tsc,eslint,nodemon \
  'tsc --watch --preserveWatchOutput' \
  'esw --watch --ext .ts' \
  'nodemon src/index.ts'
