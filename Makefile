# this tells Make to run 'make help' if the user runs 'make'
# without this, Make would use the first target as the default
.DEFAULT_GOAL := help
# here we have a simple way of outputting documentation
# the @-sign tells Make to not output the command before running it
help:
	@echo "Available commands:"
	@echo "install: install all project dependencies"
	@echo "preview: run the development environment"
	@echo "build: build for production"
	@echo "clean: remove the build directory"

install:
	npm install && npx playwright install --with-deps chromium

preview:
	npm run dev

build:
	npm run build

clean:
	npm run clean
