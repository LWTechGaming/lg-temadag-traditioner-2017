# lg-temadag-traditioner-2017

**Note:** If you wish to read this document in Swedish, click [here](README_SV.md).

## Background

The project "Bastuns Dag" (Swedish: "Day of the Sauna") is a concept for a local or national event, designed at Lovisa Gymnasium during the 100 years of Finland event at the school. In a project tasking spanning over two days, a group consisting of roughly 20 students spent time on planning an event that would strengthen the national spirit in our country. The idea was to gather our otherwise quite shattered population around a common tradition.

The project involved a lot of cooperation in the shape of brainstorming, gathering of ideas, organisation and putting the entire thing together into a coherent, presentable piece of work. The entire group has contributed to the planning and design phase, while the technical work (Code, portable webserver etc.) and final shaping of the presentation has been done by Linus Willner ([@linuswillner](https://github.com/linuswillner)).

On 8th December 2017, a three-man jury reviewed this project along with approximately ten other projects, and in the end this project emerged victorious. Some of the reasons for the choice were that the plan was of production quality and could be accomplished in real life, that the presentation format was innovative and that the concept of working and being together was present throughout the plan, all the way down to the basic idea.

## Usage of this project

The ideas depicted on the website are ficticious, for now. They have, however, been planned with realistic expectations in mind. It shouldn't be absolutely impossible to accomplish at least parts of this plan on a local level.

All material on this site (Plans, text, images, source code) is licensed under the [Creative Commons Attribution 3.0 license](LICENSE.md), which means that it is fully possible to use these ideas and concepts for your own purposes.

## Instructions

### Running the server

If you want to look at the website yourself, or make changes to it, do the following.

Please note that the program requires certain runtimes and tools to run. These are:

- [Git](https://git-scm.com/download) (Version control; can be omitted if you just want to look at the site)
- [Node.js](https://nodejs.org/en) version 6.x.x upwards (For running of the webserver) and NPM (Bundled with Node.js)

To start the website on your own computer, do the following:

1. Clone this repository: `git clone https://github.com/LWTechGaming/lg-temadag-traditioner-2017.git` (Or download the [ZIP package](https://github.com/LWTechGaming/lg-temadag-traditioner-2017/archive/master.zip))
2. Browse to the repository folder, and run `npm install` in your command prompt.
3. If you wish, change the settings in the development (`config.dev.json`) or production (`config.prod.json`) configurations - for information about the values, see [Configuration](#configuration).
4. Run `npm start` (Development mode) or `npm run start:prod` (Production mode) in the repository folder with the command prompt.
5. If not already opened, open `localhost:8000` (Default setting) in your web browser of choice, and surf to your heart's content!

### Configuration

The middle part of the configuration file's name decides which mode it is for, development (dev) or production (prod). Development mode has some differences from the production mode, namely:

- It reloads the browser faster on change (500 ms per default).
- It opens the browser window on server start.
- It outputs more verbose logging information to the console.

As such, it's recommended to use the production config when presenting the concept. **Note:** Don't use the server to display the website online, use a proper webserver like Apache or Nginx for that!

The configuration files contain the following values:

| Value | Description | Type | Default |
| ----- | ----------- | ---- | ------- |
| port | Port to run the webserver on. | Number | 8000 |
| host | Host URL to run the webserver on. | String | localhost |
| docRoot | Directory from which to serve the website. | String | ./public |
| openBrowser | Open a browser window when the webserver launches. | Boolean | true |
| notFoundFile | File to display when the user attempts to access a resource that doesn't exist on the server[*](https://github.com/tapio/live-server/issues/225). | String | 404.html |
| waitBeforeReload | Amount of time in milliseconds before reloading the browser window. | Number (ms) | 500/1000 |
| logLevel | The level of logging output to display in console. 0 = errors only, 1 = only important, 2 = everything. | Number | 2/1 |

## Thank you from the contributors

We hope that you've been able to gain good ideas or other kinds of benefit from our little project. Thank you!

Regards,

Emil, Matilda, Oskar, Fredrik, Morris, Eero, Casper, Jesper, Mikael, Hanna-Maria, Niklas, Linus, Alex, Timothy, Lasse, Lina, Algot
**Project team of lg-temadag-traditioner-2017**
