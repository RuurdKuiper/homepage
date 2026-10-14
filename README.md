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

## Layout previews

Three alternative layouts reuse the existing Jekyll page content and assets:

- [Cinematic portfolio](http://127.0.0.1:4000/preview/cinematic/)
- [Personal dashboard](http://127.0.0.1:4000/preview/dashboard/)
- [Editorial portfolio](http://127.0.0.1:4000/preview/editorial/)

Use the top switcher to compare layouts. Navigation stays within the selected
preview, and switching layouts preserves the section you are viewing. The previews
are marked `noindex`; the current homepage keeps its existing design. No new
dependencies are required.

All four versions read the same content in `_includes/content/`. Edit those files
to update the homepage, publications, presentations, teaching, or academic
background everywhere. The `_pages/` files retain the existing URLs and metadata.
Projects live in `_data/projects.yml`; add or edit a project there, including its
image and links, and both the current site's project list and all previews update
on the next Jekyll build. Set `featured: true` to show a project in the previews'
selected-work section. Keep the newest project first for the dashboard shortcut.
Portrait, bio, and profile links come from `author` in `_config.yml`. Assets remain
in their existing locations; replacing an asset updates every version using it.

These are local design alternatives, with no change to the primary navigation or
homepage layout. Do not place unreleased manuscripts in the source tree: Jekyll
copies static files into its output.

Optional (enable LiveReload):

```bash
USE_LIVERELOAD=1 LIVERELOAD_PORT=35740 ./run-local.sh
```
