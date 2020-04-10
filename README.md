# hyper-set-vibrancy

A simple plugin for enabling/customising [Vibrancy](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/translucency/) in [Hyper](https://hyper.is/) for macOS.

## Configuration

Set vibrancy type in ~/.hyper.js using 

`config: {
    setVibrancy: "dark",
} `

Supported options are dark | light | medium-light | ultra-dark.
Effects will not be visible if your backgroundColor does not have an alpha less than one. 

**Changes will take effect when opening a new window.**
