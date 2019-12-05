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
    20,
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
  planetMaterial.emissiveTexture = new BABYLON.Texture("textures/h-028.jpeg", scene);
  planet_1.material = planetMaterial;
  
  planet_1.position.x = 5;
	planet_1.bakeCurrentTransformIntoVertices();
  planet_1.position.x = 0;
  
  // --- Planet Two ---
  planet_2 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 3 },
    scene
  );
  planet_2.position.x = 5.75;

  var planet2Material = new BABYLON.StandardMaterial("planetSurface", scene);
  planet2Material.emissiveTexture = new BABYLON.Texture("textures/Asiaq.jpeg", scene);
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
  planet3Material.emissiveTexture = new BABYLON.Texture("textures/Efaja.jpeg", scene);
  planet_3.material = planet3Material;

  planet_3.position.x = 5;
	planet_3.bakeCurrentTransformIntoVertices();
  planet_3.position.x = 0;
  
  // --- Planet Four ---
  planet_4 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 1.5 },
    scene
  );
  planet_4.position.y = 10;

  var planet4Material = new BABYLON.StandardMaterial("planetSurface", scene);
  planet4Material.emissiveTexture = new BABYLON.Texture("textures/Efaja.jpeg", scene);
  planet_4.material = planet4Material;

  planet_4.position.x = 5.7;
  planet_4.bakeCurrentTransformIntoVertices();
  planet_4.position.x = 0;
      
  // --- Planet Five ---
  planet_5 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.65 },
    scene
  );
  planet_5.position.z = 7.3;

  var planet5Material = new BABYLON.StandardMaterial("planetSurface", scene);
  planet5Material.emissiveTexture = new BABYLON.Texture("textures/Efaja.jpeg", scene);
  planet_5.material = planet5Material;

  planet_5.position.x = 7.3;
  planet_5.bakeCurrentTransformIntoVertices();
  planet_5.position.x = 0;

  // --- Planet Six ---
  planet_6 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.88 },
    scene
  );
  planet_6.position.x = 9.65;

  var planet6Material = new BABYLON.StandardMaterial("planetSurface", scene);
  planet6Material.emissiveTexture = new BABYLON.Texture("textures/Efaja.jpeg", scene);
  planet_6.material = planet6Material;

  planet_6.position.x = 9.65;
  planet_6.bakeCurrentTransformIntoVertices();
  planet_6.position.x = 0;
  
  // --- Rings ---
  var myPlane = BABYLON.MeshBuilder.CreateCylinder("myPlane", {diameter:5 , height: .050}, scene);
  myPlane.position.x = 10;
  planet_2.addChild(myPlane);

  var myRing = BABYLON.MeshBuilder.CreateCylinder("myPlane", {diameter:5 , height: .050}, scene);
  myRing.position.y = 10;
  myRing.position.x = 5.7;
  planet_4.addChild(myRing);

  var myCircle = BABYLON.MeshBuilder.CreateCylinder("myPlane", {diameter:5 , height: .050}, scene);
  myCircle.position.x = 7.3;
  myCircle.position.z = 7.3;
  planet_5.addChild(myCircle);

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
    x: "+=.5"
  });

  TweenLite.to(planet_4.rotation, 1, {
    y: "+=.406",
    x: "+=.709"
  });

  TweenLite.to(planet_5.rotation, 1, {
    y: "+=.251",
    x: "+=.586"
  });

  TweenLite.to(planet_6.rotation, 1, {
    y: "+=.195",
    x: "+=.055"
  });
  //console.log(planet_1.rotation.x);
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
