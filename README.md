# Homepage
Academic homepage of dr. ir. Ruurd Kuiper

## Run locally

Install dependencies once after checkout or after Gemfile changes:

```bash
export PATH="$HOME/.rbenv/versions/3.2.4/bin:$PATH"
bundle config set --local path 'vendor/bundle'
bundle install
```

```bash
./run-local.sh
```

Then open `http://127.0.0.1:4000/`.

Optional (enable LiveReload):

```bash
USE_LIVERELOAD=1 LIVERELOAD_PORT=35740 ./run-local.sh
```
