#!/bin/bash
set -e

echo "🌡  Running rollback for development database:"
export NODE_ENV=development
source .env.dev
ts-node ./database/rollback.ts

echo
echo "🧪 Running rollback for all test databases:"
export NODE_ENV=test
source .env.test
(export DB_DATABASE="test1"
export DB_PORT=5433
ts-node ./database/rollback.ts) &
(export DB_DATABASE="test2"
export DB_PORT=5434
ts-node ./database/rollback.ts) &
(export DB_DATABASE="test3"
export DB_PORT=5435
ts-node ./database/rollback.ts) &
(export DB_DATABASE="test4"
export DB_PORT=5436
ts-node ./database/rollback.ts) &
(export DB_DATABASE="test5"
export DB_PORT=5437
ts-node ./database/rollback.ts) &
wait

echo
echo "🏁 Database rollback completed."
