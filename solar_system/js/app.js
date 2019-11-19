//Getting the canvas
var canvas = document.getElementById("renderCanvas");

//Creating the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var camera;

var scene = createScene();

//Setting up the scene
function createScene() {
  var scene = new BABYLON.Scene(engine);

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

  return scene;
}

//Starting the render loop
engine.runRenderLoop(function() {
  scene.render();
});
