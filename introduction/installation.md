# Installation

## Installation

Currently, Quantumkit is not available in the official Visual Studio Code Marketplace.\
That's because all extensions distributed over this platform are always public.\
At the moment this is still a leisure project which is initially only intended to be used internally.\
The distribution and installation is currently being implemented via MARS app.

### Install the MARS app

1. Open the MARS client in your Cloudflow
2. Search for something like...
   * Description: "Quantumkit"
   * Maintainer: "be-tnt152"
   * App Name: "be-tnt152-quantumkit"
3. Install the MARS app on your Cloudflow

The installation creates a folder `"quantumkit"` in `"PP_FILE_STORE"` with the following content:

```json
.
└── PP_FILE_STORE
    └── quantumkit
        ├── docs
        │   ├── README.md
        │   └── CHANGELOG.md
        ├── icon
        │   └── Quantumkit-Icon-MARS.svg
        └── vsix
            └── quantumkit-0.0.1.vsix        <-------- Installation file!
```

You need the `.vsix` package file that is located in the `vsix` folder.\
There are multiple ways to install the extension. The most common two ones are:
