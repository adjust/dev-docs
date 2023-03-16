# Adjust SDK documentation

This is the repository for Adjust's SDK documentation. Written with [Sphinx](https://www.sphinx-doc.org) and [MyST](https://myst-parser.readthedocs.io).

![](screenshot.jpg)

## Live preview

This project can be run in a Docker container to enable live editing. To do this:

1. Download [Docker desktop](https://www.docker.com/products/docker-desktop/) and open it
2. Open this repository in a terminal and run the following command to build the container:

   ```console
   $ cd docs
   $ make build
   ```

3. Once the container is built, run the following command to start the container:

   ```console
   $ make preview
   ```

4. Open http://localhost:8000 to see your the local preview

The preview updates as you save your changes.
