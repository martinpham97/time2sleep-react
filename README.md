
# time2sleep-react

<h4 align="center">A cross-platform shutdown timer</h4>
<p align="center"><img src="screenshots/app.png"></p>

## Compatibility

| Commands/OS | Windows			       | MacOS			        | Linux			         |
| ----------- | ------------------ | ------------------ | ------------------ |
| Shutdown    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Reboot      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Hibernate	  | :heavy_check_mark: | :x:				        | :x: 				       |
| Log-off 	  | :heavy_check_mark: | :x: 				        | :x: 				       |
| Sleep       | :x:      		       | :heavy_check_mark: | :x: 				       |


## Requirements
* Node.js
* Yarn (optional)

## Releases
Check out the releases [here](https://github.com/martinpham97/time2sleep-react/releases)

## Install
``` bash
# Clone the repository
$ git clone https://github.com/martinpham97/time2sleep-react

# Go into the repository
$ cd time2sleep-react

# Install dependencies
$ npm install
```

## Run
``` bash
$ npm start
```

## Build
``` bash
# Windows
$ npm run dist-win

# MacOS
$ npm run dist-mac

# Linux
$ npm run dist-linux
```

## Changelog
### 1.0.1 (14/07/2018)
* Added lru-cache for better startup time
* Changed OS info events for better component load time
* Changed to solid background instead of transparent
* Added App ID for electron-builder
* Removed Squirrel for Windows builds
