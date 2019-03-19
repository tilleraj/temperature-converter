# Temperature Converter
Converts temperatures from F to C and from C to F.  
* User can initiate a conversion with a mouse click or the enter/return key. 
* The converted temperature is color-coded by hot (red), cold (blue), and comfortable (green).  
* The clear button clears out any entered and/or converted temperature.

## Screenshots
![Image of a comfortable temperature](https://raw.githubusercontent.com/tilleraj/temperature-converter/master/screenshots/screenshot0.PNG)
![Image of a cold temperature](https://raw.githubusercontent.com/tilleraj/temperature-converter/master/screenshots/screenshot1.PNG)
![Image of a hot temperature](https://raw.githubusercontent.com/tilleraj/temperature-converter/master/screenshots/screenshot2.PNG)

## Getting Started
```
$ git clone https://github.com/tilleraj/temperature-converter.git
```
OR
```
$ git@github.com:tilleraj/temperature-converter.git
```

### Prerequisites  
This project assumes you have already setup a terminal environment like Git Bash (Windows) or Xcode + Homebrew (macOS). You will also need Node and HTTP-Server.

#### Installing Node
On macOS  
```
$ brew install node
```
On Windows  
Visit the node [website](https://nodejs.org/) and click on the green button with the version that says LTS next to it.

#### Installing HTTP-Server
```
$ npm install -g http-server
```

## Running
1. Navigate to the project folder in command line interface and type:
```
$ hs -p 8000  
```
2. In your web browser, navigate to: [http://localhost:8000](http://localhost:8000)