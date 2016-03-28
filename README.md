# Pokemon Master Trainer

> A re-creation of the Pokemon Master Trainer Board game
> Status: in development

## Team

  - __Product Owner__: Alex Chou (Choumander)
  - __Scrum Master__: Hitesh Lala (Hiteshmonlee)
  - __Development Team Members__: Arthi Palaniappan (Arthicuno), Linda Zou (Zoubat)

## Table of Contents

1. [Game Play](#game-play)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)


## Game Play

1. Roll the dice
1. Check the number of positions in both direction and offer player options:
  1. If other players on spot, can battle or trade - not implemented yet
  1. If spot is city, can exchange pokemon in box, battle gym leader or heal - not implemented yet
  1. If spot is event pick an event card and do what it says - not impelemented yet
  1. If spot has a pokemon then try to catch pokemon


## Requirements

### Server Side
  - Body-parser  1.15.0
  - Chai  3.5.0
  - Chai-http  2.0.1
  - Express  4.13.4
  - Express-routes  0.0.2
  - Express-session  1.13.0
  - Mocha  2.4.5
  - Mongoose  4.4.6
  - Morgan  1.7.0
  - Passport  0.3.2
  - Passport-facebook  2.1.0
  - Q  1.4.1
  - Socket.io  1.4.5
  - Sinon  1.17.3
  - Sinon-chai  2.8.0

### Client Side
  - bootstrap  3.3.6
  - jquery  2.2.2
  - angular-bootstrap  1.2.4
  - angular  1.5.1
  - angular-cookies  1.5.2
  - angular-animate  1.5.1
  - angular-route  1.5.1
  - angular-socket-io  0.7.0
  - socket.io  1.4.5
  - socket.io-client  1.4.5
  - angular-audio  1.7.1

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](https://github.com/luminescent-recliners/pokemon-board-game/issues)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
