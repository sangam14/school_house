.PHONY: $(MAKECMDGOALS) content

setup: content
	mix do setup, compile, assets.deploy

content:
	git submodule update --init --depth 1
	rm -rf assets/static/images
	cp -r content/images assets/static/images
	cp assets/brand/elixir-school-icon.png assets/static/images/
	cp assets/brand/elixir-school-logo.png assets/static/images/
	cp assets/brand/favicons/* assets/static/images/favicons/

build:
	docker build .
