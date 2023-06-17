# stream-deck-distribution-tool

![Continuous Integration](https://github.com/TheAppleFreak/stream-deck-distribution-tool/actions/workflows/tests.yml/badge.svg) [![npm version](https://badge.fury.io/js/stream-deck-distribution-tool.svg)](https://www.npmjs.com/package/stream-deck-distribution-tool)

Binary wrapper that makes the Elgato Stream Deck Distribution Tool seamlessly available as a local dependency.

## Install 

```
npm install -D stream-deck-distribution-tool
```

Upon installation, this package will download the latest version of the distribution tool from [the Elgato Stream Deck API documentation page.](https://developer.elgato.com/documentation/stream-deck/sdk/packaging/) Because Elgato does not offer any sort of versioning, there is no way to download previous versions of the tool, and as such there are no options available for this package.

## Usage

On both Windows and macOS, the following commands (when run in the project root directory) will take the plugin assets located in `com.elgato.counter.sdPlugin` and output them to a directory called `Release`. 

**NOTE:** The plugin assets must be located in a directory named in the format of `<TLD>.<DEVELOPER>.<PLUGINNAME>.sdPlugin`. The distribution tool will not accept a plugin directory not named in this format.

**NOTE:** The `Release` directory must exist. The distribution tool executable will not create one if it does not.

### Node scripts

```json
{
    "scripts": {
        "build": "sd-distribution-tool -b -i com.elgato.counter.sdPlugin -o Release"
    }
}
```

### CLI

On Windows:

```
.\node_modules\sd-distribution-tool -b -i com.elgato.counter.sdPlugin -o Release
```

On macOS:

```
./node_modules/sd-distribution-tool -b -i com.elgato.counter.sdPlugin -o Release
```

### API 

```js
const { execFile } = require("child_process");
const DistributionTool = require("stream-deck-distribution-tool");

execFile(DistributionTool, ["-b", "-i" "com.elgato.counter.sdPlugin", "-o", "Release"], (err, stdout) => {
    if (err) 
        throw err;
    
    console.log(stdout);
})
```

## Inspiration

* [fenneclab/hugo-bin](https://github.com/fenneclab/hugo-bin)

## License

MIT © TheAppleFreak
