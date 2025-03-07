#!/bin/bash
set -e

echo
echo "🌱 === [DEV] Seeding ==="
export NODE_ENV=development
source .env.development
ts-node ./database/seed.ts

echo
echo "🏁 Database seeding completed."
