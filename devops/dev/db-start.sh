#!/bin/bash
set -e

echo
echo "🏠 Setting up API databases:"

docker-compose \
  --project-name bedrock-ts-db \
  --file ./devops/dev/docker-compose.yml \
  --project-directory . \
  up \
  --detach \
  --build \
  --remove-orphans
