# DevSecRelAI

[![Continuous Integration](https://github.com/elixirschool/school_house/actions/workflows/ci.yml/badge.svg)](https://github.com/elixirschool/school_house/actions/workflows/ci.yml) [![Deploy](https://github.com/elixirschool/school_house/actions/workflows/deploy.yml/badge.svg)](https://github.com/elixirschool/school_house/actions/workflows/deploy.yml)

DevSecRelAI is a security-focused adaptation of elixirschool's School House, repurposed to teach secure development, DevSecOps, and AI-assisted security practices.

By leveraging Dashbit's [NimblePublisher](https://github.com/dashbitco/nimble_publisher) and the existing lesson content, DevSecRelAI delivers the same community-curated learning material with added security-oriented modules and examples.

## Development

To get up and running all we need is a single command:

```shell
$ make setup
```

This will fetch dependencies, download lessons and blog posts from the [external repository](https://github.com/elixirschool/elixirschool), and compile the project.

Then start the phoenix server with:

```shell
$ mix phx.server
```
