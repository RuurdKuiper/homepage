#!/usr/bin/env bash
set -euo pipefail

# Run Jekyll locally using the project Ruby managed by rbenv.
cd "$(dirname "$0")"

RUBY_BIN="$HOME/.rbenv/versions/3.2.4/bin"
export PATH="$RUBY_BIN:$PATH"

SITE_HOST="${SITE_HOST:-127.0.0.1}"
SITE_PORT="${SITE_PORT:-4000}"
LIVERELOAD_PORT="${LIVERELOAD_PORT:-35730}"
USE_LIVERELOAD="${USE_LIVERELOAD:-0}"

if ! command -v bundle >/dev/null 2>&1; then
  echo "Bundler not found in $RUBY_BIN."
  echo "Run: $RUBY_BIN/gem install bundler"
  exit 1
fi

if [[ "$USE_LIVERELOAD" == "1" ]]; then
  bundle exec jekyll serve \
    --livereload \
    --livereload-port "$LIVERELOAD_PORT" \
    --host "$SITE_HOST" \
    --port "$SITE_PORT"
else
  bundle exec jekyll serve \
    --host "$SITE_HOST" \
    --port "$SITE_PORT"
fi
