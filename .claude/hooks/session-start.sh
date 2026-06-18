#!/bin/bash
set -euo pipefail

# Install the oh-my-pi (`omp`) coding agent on Claude Code on the web sessions.
# Only runs in the remote (web) environment; no-op locally.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

REPO="can1357/oh-my-pi"
INSTALL_DIR="${PI_INSTALL_DIR:-$HOME/.local/bin}"
mkdir -p "$INSTALL_DIR"

# Make omp available for the rest of the session.
export PATH="$INSTALL_DIR:$PATH"
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export PATH=\"$INSTALL_DIR:\$PATH\"" >> "$CLAUDE_ENV_FILE"
fi

# Detect platform -> release asset name.
OS="$(uname -s)"; ARCH="$(uname -m)"
case "$OS" in
  Linux)  PLATFORM="linux" ;;
  Darwin) PLATFORM="darwin" ;;
  *) echo "oh-my-pi: unsupported OS '$OS', skipping"; exit 0 ;;
esac
case "$ARCH" in
  x86_64|amd64)  ARCH="x64" ;;
  arm64|aarch64) ARCH="arm64" ;;
  *) echo "oh-my-pi: unsupported arch '$ARCH', skipping"; exit 0 ;;
esac
BINARY="omp-${PLATFORM}-${ARCH}"

# Resolve the latest release tag WITHOUT api.github.com (blocked by some network
# policies). github.com/<repo>/releases/latest 302-redirects to .../releases/tag/<TAG>.
TAG_URL="$(curl -fsSL -o /dev/null -w '%{url_effective}' "https://github.com/${REPO}/releases/latest" || true)"
TAG="${TAG_URL##*/}"
if [ -z "$TAG" ] || [ "$TAG" = "latest" ]; then
  echo "oh-my-pi: could not resolve latest release tag, skipping"
  exit 0
fi

# Idempotent: skip the download if this exact version is already present.
if [ -x "$INSTALL_DIR/omp" ] && "$INSTALL_DIR/omp" --version 2>/dev/null | grep -q "${TAG#v}"; then
  echo "oh-my-pi: omp ${TAG} already installed"
else
  echo "oh-my-pi: installing omp ${TAG} (${BINARY})..."
  curl -fsSL "https://github.com/${REPO}/releases/download/${TAG}/${BINARY}" -o "$INSTALL_DIR/omp"
  chmod +x "$INSTALL_DIR/omp"
  echo "oh-my-pi: installed $("$INSTALL_DIR/omp" --version 2>/dev/null || echo omp)"
fi

# Provider credentials for omp.
# Claude Code reserves ANTHROPIC_API_KEY for its own account auth and won't pass it
# through, so the web environment config supplies omp's key as OMP_ANTHROPIC_API_KEY.
# Map it to the name omp expects (ANTHROPIC_API_KEY) for the rest of the session.
# Never commit the key — it lives only in the environment config.
if [ -n "${OMP_ANTHROPIC_API_KEY:-}" ]; then
  export ANTHROPIC_API_KEY="$OMP_ANTHROPIC_API_KEY"
  if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
    echo "export ANTHROPIC_API_KEY=\"$OMP_ANTHROPIC_API_KEY\"" >> "$CLAUDE_ENV_FILE"
  fi
elif [ -z "${ANTHROPIC_API_KEY:-}" ]; then
  echo "oh-my-pi: no omp key found — set OMP_ANTHROPIC_API_KEY in the environment config to use omp."
fi
