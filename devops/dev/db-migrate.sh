#!/bin/bash
set -e

echo
echo "✈️  === [DEV] Migration ==="

echo
echo "🌡  Running migration for development database:"
export NODE_ENV=development
source .env.development
ts-node ./database/migrate.ts

echo
echo "✈️  === [TEST] Migration ==="

echo
echo "🧪 Running migration for test database:"
export NODE_ENV=test
source .env.test
(export DB_DATABASE="test1"
export DB_PORT=5433
ts-node ./database/migrate.ts) &
(export DB_DATABASE="test2"
export DB_PORT=5434
ts-node ./database/migrate.ts) &
(export DB_DATABASE="test3"
export DB_PORT=5435
ts-node ./database/migrate.ts) &
(export DB_DATABASE="test4"
export DB_PORT=5436
ts-node ./database/migrate.ts) &
(export DB_DATABASE="test5"
export DB_PORT=5437
ts-node ./database/migrate.ts) &
wait

echo
echo "🏁 Database migration completed."
