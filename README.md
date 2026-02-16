# School House

[![Continuous Integration](https://github.com/elixirschool/school_house/actions/workflows/ci.yml/badge.svg)](https://github.com/elixirschool/school_house/actions/workflows/ci.yml) [![Deploy](https://github.com/elixirschool/school_house/actions/workflows/deploy.yml/badge.svg)](https://github.com/elixirschool/school_house/actions/workflows/deploy.yml)

School House powers [elixirschool.com](https://elixirschool.com), built with Elixir, Phoenix, and [NimblePublisher](https://github.com/dashbitco/nimble_publisher).

Lesson and blog content lives in the [elixirschool/elixirschool](https://github.com/elixirschool/elixirschool) repository and is included here as a git submodule.

## Prerequisites

- Elixir ~> 1.13
- Erlang/OTP compatible with your Elixir version
- Node.js (for asset compilation)

## Development

Clone the repo with the content submodule:

```shell
git clone --recursive https://github.com/elixirschool/school_house.git
cd school_house
```

If you've already cloned without `--recursive`, initialize the submodule:

```shell
git submodule update --init --depth 1
```

Then set up dependencies and assets:

```shell
make setup
```

Start the Phoenix server:

```shell
mix phx.server
```

Visit [`localhost:4000`](http://localhost:4000) in your browser.

## Updating Content

To pull the latest lessons and blog posts:

```shell
cd content
git pull origin main
cd ..
make content
```

Commit the updated submodule pointer when you're ready to ship:

```shell
git add content
git commit -m "chore: update content submodule"
```

## Docker

```shell
make build
```
