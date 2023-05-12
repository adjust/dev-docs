#!/bin/sh

HOMEBREW_INSTALLED=false
PYTHON_INSTALLED=false
POETRY_INSTALLED=false
VALE_INSTALLED=false
PRECOMMIT_INSTALLED=false
POETRY_IN_PATH=false

ARCH=$(uname -m)
if [ $ARCH="arm64" ]; then
   PYTHON=/opt/homebrew/bin/python3
else
   PYTHON=/usr/local/bin/python3
fi
POETRY=$HOME/.local/bin/poetry

printf "Checking prerequisites...\n"

if ! command -v brew &> /dev/null; then
   printf "Homebrew not installed. "
   while true; do
      read -p "Do you want to install this program? Answer 'y' or 'n': " yn
      case $yn in
         [Yy]* ) printf "\nInstalling now... "; printf "\nYou'll be prompted for your computer's password to install the software"; /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"; HOMEBREW_INSTALLED=true; break;;
         [Nn]* ) break;;
         * ) printf "\nPlease answer 'y' or 'n'.";;
      esac
   done
else
   printf "\nHomebrew installed"
   HOMEBREW_INSTALLED=true
fi

sleep .5;

if ! [ $HOMEBREW_INSTALLED == true ]; then
   printf "\nHomebrew is required to install Python."; exit 1;
elif ! [ -f "$PYTHON" ]; then
   printf "\nHomebrew version of Python not installed. "
   while true; do
      read -p "Do you want to install this program? Answer 'y' or 'n': " yn
      case $yn in
         [Yy]* ) printf "\nInstalling now... "; brew install python; PYTHON_INSTALLED=true; printf "Python successfully installed!"; break;;
         [Nn]* ) break;;
         * ) printf "\nPlease answer 'y' or 'n'.";;
      esac
   done
else
    printf "\nPython installed via Homebrew at $PYTHON."
    PYTHON_INSTALLED=true
fi

sleep .5;

if ! [ $PYTHON_INSTALLED == true ]; then
   printf "\nPython is required to install Poetry."; exit 1;
elif ! [ -f "$POETRY" ]; then
   printf "\nPoetry not installed."
   while true; do
      read -p "Do you want to install this program? Answer 'y' or 'n': " yn
      case $yn in
         [Yy]* ) printf "\nInstalling now... "; curl -sSL https://install.python-poetry.org | python3 -; POETRY_INSTALLED=true; printf "Poetry successfully installed!"; break;;
         [Nn]* ) break;;
         * ) printf "\nPlease answer 'y' or 'n'.";;
      esac
   done
else
    printf "\nPoetry installed at $POETRY."
    POETRY_INSTALLED=true
fi

sleep .5;

if ! [ $POETRY_INSTALLED == true ]; then
   printf "\nA homebrew install of Python is required to set up Poetry."; exit 1;
elif ! [[ ":$PATH:" == *":$HOME/.local/bin:"* ]]; then
  printf "\n.local/bin not found in path. Adding..."
  echo 'export PATH='"$HOME"'/.local/bin:$PATH' >> $HOME/.zshrc
  printf "\nPoetry is available in your path. The version is: $(poetry --version)"; POETRY_IN_PATH=true; break;
else
  printf "\nPoetry is available in your path. The version is: $(poetry --version)"; POETRY_IN_PATH=true; break;
fi

sleep .5;

if ! [ $HOMEBREW_INSTALLED == true ]; then
   printf "\nHomebrew is required to install Vale."; exit 1;
elif ! command -v vale &> /dev/null; then
   printf "\nVale not installed. "
   while true; do
      read -p "Do you want to install this program? Answer 'y' or 'n': " yn
      case $yn in
         [Yy]* ) printf "\nInstalling now... "; brew install vale; VALE_INSTALLED=true; printf "Vale successfully installed!"; break;;
         [Nn]* ) break;;
         * ) printf "\nPlease answer 'y' or 'n'.";;
      esac
   done
else
    printf "\nVale installed via Homebrew."
    VALE_INSTALLED=true
fi

if ! [ $HOMEBREW_INSTALLED == true ]; then
   printf "\nHomebrew is required to install pre-commit."; exit 1;
elif ! command -v pre-commit &> /dev/null; then
   printf "\npre-commit not installed. "
   while true; do
      read -p "Do you want to install this program? Answer 'y' or 'n': " yn
      case $yn in
         [Yy]* ) printf "\nInstalling now... "; brew install pre-commit; PRECOMMIT_INSTALLED=true; printf "pre-commit successfully installed!"; break;;
         [Nn]* ) break;;
         * ) printf "\nPlease answer 'y' or 'n'.";;
      esac
   done
else
    printf "\npre-commit installed via Homebrew."
    PRECOMMIT_INSTALLED=true
fi

if ! [ $PRECOMMIT_INSTALLED == true ]; then
   printf "\npre-commit is required to install pre-commit hooks"; break;
else
   printf "\nInstalling pre-commit hooks... "; pre-commit install --install-hooks; printf "pre-commit hooks successfully installed!"; break;
fi

printf "\n\n"
printf -- '-%.0s' {1..100}; echo ""
printf "\nHomebrew installed? "; sleep .5; printf "$HOMEBREW_INSTALLED"
printf "\nPython installed? "; sleep .5; printf "$PYTHON_INSTALLED"
printf "\nPoetry installed? "; sleep .5; printf "$POETRY_INSTALLED"
printf "\nVale installed? "; sleep .5; printf "$VALE_INSTALLED"
printf "\npre-commit installed? "; sleep .5; printf "$PRECOMMIT_INSTALLED"
printf "\nPoetry available in PATH? "; sleep .5; printf "$POETRY_IN_PATH"

if ! ($HOMEBREW_INSTALLED && $PYTHON_INSTALLED && $POETRY_INSTALLED && $POETRY_IN_PATH); then
   printf "\n\aSome setup steps weren't completed. Run this script again to set everything up.\n"
   exit 1
else
   printf "\n\aSetup complete. Close this terminal and open a new one to run 'make install'\n"
   exit 0
fi
