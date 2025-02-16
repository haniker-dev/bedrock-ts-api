#!/bin/bash
set -e

source .env.test
./node_modules/.bin/tsc

# "$@" will expands to all arguments passed to this script
jest "$@"
