/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Interaction Intelligence
  February  9, 2023
  Marcelo Coelho

  If you come from Processing, there is a Processing version here. 
  Keep in mind that there are some differences between both versions:
  https://github.com/marcelocoelho/Interface1D

*/ /////////////////////////////////////


let displaySize = 32;   // how many pixels are visible in the game
let pixelSize = 30;     // how big should they look on screen

let display;      // Aggregates our final visual output before showing it on the screen

let controller;   // This is where the state machine and game logic lives

let mixer;

let collisionAnimation;   // Where we store and manage the collision animation

let infoPanel;



function setup() {

  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        // Initializing the display

  infoPanel = new InfoPanel();              // Initializing info panel

  collisionAnimation = new Animation();     // Initializing animation

  controller = new Controller();            // Initializing controller

  mixer = new Mixer();                      // Initializing mixer

  console.log('Setup complete');
}

function draw() {

  // start with a blank screen
  background(0, 0, 0);

  // Runs mixer
  mixer.run();

  // Runs state machine at determined framerate
  controller.update();

  // After we've updated our states, we show the current one 
  display.show();

  // Show info panel
  infoPanel.show();

}


function whenAvailable(name, callback) {
  var interval = 50; // ms
  window.setTimeout(function() {
      if (window[name]) {
          callback(window[name]);
      } else {
          whenAvailable(name, callback);
      }
  }, interval);
}
