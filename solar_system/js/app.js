//Getting the canvas
var canvas = document.getElementById("renderCanvas");

//Creating the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var camera;

var scene = createScene();
scene.clearColor = new BABYLON.Color3(0.1, 0.007, 0.015);

//Global Variables for the planets
var sun;
var planet_1;

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
  var myLight = new BABYLON.PointLight(
    "dir01",
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  myLight.intensity = 1;

  //Adding the planets (Da Solar System)
  // --- The Sun ---
  sun = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.7 }, scene);
  var gl = new BABYLON.GlowLayer("glow", scene);

  sun.material = new BABYLON.StandardMaterial("red", scene);
  sun.material.emissiveColor = new BABYLON.Color3(0.8, 0.4, 0.4);

  // --- Planet One ---
  planet_1 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.3 },
    scene
  );
  planet_1.position.z = 1.75;

  var planetMaterial = new BABYLON.StandardMaterial("planetSurface", scene);
  planetMaterial.emissiveTexture = new BABYLON.Texture(
    "textures/h-028.jpeg",
    scene
  );
  planet_1.material = planetMaterial;

  planet_1.position.x = 5;
  planet_1.bakeCurrentTransformIntoVertices();
  planet_1.position.x = 0;

  // --- Planet Two ---
  planet_2 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 3 }, scene);
  planet_2.position.x = 5.75;

  var planet2Material = new BABYLON.StandardMaterial("planetSurface", scene);
  planet2Material.emissiveTexture = new BABYLON.Texture(
    "textures/Asiaq.jpeg",
    scene
  );
  planet_2.material = planet2Material;

  planet_2.position.x = 10;
  planet_2.bakeCurrentTransformIntoVertices();
  planet_2.position.x = 0;

  // --- Planet Three ---
  planet_3 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.7 },
    scene
  );
  planet_3.position.y = 5.75;

  var planet3Material = new BABYLON.StandardMaterial("planetSurface", scene);
  planet3Material.emissiveTexture = new BABYLON.Texture(
    "textures/Efaja.jpeg",
    scene
  );
  planet_3.material = planet3Material;

  planet_3.position.x = 5;
  planet_3.bakeCurrentTransformIntoVertices();
  planet_3.position.x = 0;

  // --- Rings ---
  var myPlane = BABYLON.MeshBuilder.CreateCylinder(
    "myPlane",
    { diameter: 5, height: 0.05 },
    scene
  );
  myPlane.position.x = 5.75;
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
    y: "+=.5",
    x: "+=.5"
  });

  TweenLite.to(planet_2.rotation, 1, {
    y: "+=.3",
    x: "+=.01"
  });

  TweenLite.to(planet_3.rotation, 1, {
    y: "+=.75",
    x: "+=3."
  });
}

//events for showing info of the planets
//------------------------------------------------------------------------- the sun
sun.actionManager = new BABYLON.ActionManager(scene);
sun.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML = "The sun";
    infoBox.style.display = "block";
  })
);

//------------------------------------------------------------------------- planet 1
planet_1.actionManager = new BABYLON.ActionManager(scene);
planet_1.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML = "Planet Info";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);

//------------------------------------------------------------------------- planet 2
planet_2.actionManager = new BABYLON.ActionManager(scene);
planet_2.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML = "The other planet";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);
