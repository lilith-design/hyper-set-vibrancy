# hyper-set-vibrancy

A simple plugin for enabling/customising [Vibrancy](https://www.electronjs.org/docs/api/browser-window#winsetvibrancytype-macos) in [Hyper](https://hyper.is/) for macOS.

## Installation

Add `hyper-set-vibrancy` to `plugins` in `~/.hyper.js` or install with the Hyper CLI using `hyper i hyper-set-vibrancy`.

## Configuration

Set vibrancy type in `~/.hyper.js` using

```js
config: {
    // EXISTING CONFIG
    setVibrancy: "dark",
}
```

Supported options are `dark` `light` `medium-light` `ultra-dark`.

The window can be tinted by setting the `backgroundColor` config option using rgba (eg `rgba(0,0,0,0.5)`). Vibrancy effects will not be visible if your backgroundColor has an alpha of 1.

**Changes will take effect when opening a new window.**
