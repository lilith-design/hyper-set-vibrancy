# hyper-set-vibrancy

A simple plugin for enabling/customising [Vibrancy](https://www.electronjs.org/docs/api/browser-window#winsetvibrancytype-macos) in [Hyper](https://hyper.is/) for macOS.

## Configuration

Set vibrancy type in ~/.hyper.js using 

```js
config: {
    // REST OF CONFIG
    setVibrancy: "dark",
}
```

Supported options are dark | light | medium-light | ultra-dark.

Further customisation is achievable by setting the backgroundColor option using rgba (eg `rgba(255,255,255,0.5)`). Effects will not be visible if your backgroundColor does not have an alpha less than one. 

**Changes will take effect when opening a new window.**
