#!/usr/bin/env python3
from subprocess import call

# initial make
call(["python3", "-m", "sphinx", ".", "/tmp/_build"])
from livereload import Server, shell  # noqa: E402

server = Server()
server.watch(".", shell("python3 -m sphinx . /tmp/_build"))
server.serve(root="/tmp/_build/", liveport=35730, port=8001, host="0.0.0.0")
