//Getting the canvas
var canvas = document.getElementById("renderCanvas");

//Creating the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var camera;

var scene = createScene();

//Global Variables for the planets
var sun;
var planet_1;

//Setting up the scene
function createScene() {
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.1, 0.007, 0.015);

  //Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  //Add lights to the scene
  var myLight = new BABYLON.DirectionalLight(
    "dir01",
    new BABYLON.Vector3(0, -0.5, 1.0),
    scene
  );

  //Adding the planets (Da Solar System)
  // --- The Sun ---
  sun = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.7 }, scene);

  // --- Planet One ---
  planet_1 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.1 },
    scene
  );
  planet_1.position.z = 0.75;

  // --- Planet Two ---
  return scene;
}

//Starting the render loop
engine.runRenderLoop(function() {
  orbit();
  scene.render();
});

//Orbit function for da planets
function orbit() {
  TweenLite.to(planet_1.rotation, 1, {
    x: "+=.5"
  });
  console.log(planet_1.rotation.x);
}
