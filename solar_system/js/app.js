//Getting the canvas
var canvas = document.getElementById("renderCanvas");

//Creating the BABYLON 3D engine
var engine = new BABYLON.Engine(canvas, true);
var camera;

var scene = createScene();
scene.clearColor = new BABYLON.Color3(0.1, 0.007, 0.015);

//Global Variables for the planets
var sun;
var H_028;

//Setting up the scene
function createScene() {
  var scene = new BABYLON.Scene(engine);

  //Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.UniversalCamera(
    "UC",
    new BABYLON.Vector3(0, 0, -25),
    scene
  );

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
  H_028 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.3 }, scene);
  H_028.position.z = 1.75;

  var H_028Material = new BABYLON.StandardMaterial("planetSurface", scene);
  H_028Material.emissiveTexture = new BABYLON.Texture(
    "textures/h-028.jpeg",
    scene
  );
  H_028.material = H_028Material;

  H_028.position.x = 5;
  H_028.bakeCurrentTransformIntoVertices();
  H_028.position.x = 0;

  // --- Planet Two ---
  Asiaq = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 3 }, scene);
  Asiaq.position.x = 5.75;

  var AsiaqMaterial = new BABYLON.StandardMaterial("planetSurface", scene);
  AsiaqMaterial.emissiveTexture = new BABYLON.Texture(
    "textures/Asiaq.jpeg",
    scene
  );
  Asiaq.material = AsiaqMaterial;

  Asiaq.position.x = 10;
  Asiaq.bakeCurrentTransformIntoVertices();
  Asiaq.position.x = 0;

  // --- Planet Three ---
  Efaja = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.7 }, scene);
  Efaja.position.y = 5.75;

  var EfajaMaterial = new BABYLON.StandardMaterial("planetSurface", scene);
  EfajaMaterial.emissiveTexture = new BABYLON.Texture(
    "textures/Efaja.jpeg",
    scene
  );
  Efaja.material = EfajaMaterial;

  Efaja.position.x = 5;
  Efaja.bakeCurrentTransformIntoVertices();
  Efaja.position.x = 0;

  // --- Planet Four ---
  Grill = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 1.5 }, scene);
  Grill.position.y = 10;

  var GrillMaterial = new BABYLON.StandardMaterial("planetSurface", scene);
  GrillMaterial.emissiveTexture = new BABYLON.Texture(
    "textures/Grill.jpeg",
    scene
  );
  Grill.material = GrillMaterial;

  Grill.position.x = 5.7;
  Grill.bakeCurrentTransformIntoVertices();
  Grill.position.x = 0;

  // --- Planet Five ---
  Habitat_7 = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.65 },
    scene
  );
  Habitat_7.position.z = 7.3;

  var Habitat7Material = new BABYLON.StandardMaterial("planetSurface", scene);
  Habitat7Material.emissiveTexture = new BABYLON.Texture(
    "textures/Habitat_7.jpeg",
    scene
  );
  Habitat_7.material = Habitat7Material;

  Habitat_7.position.x = 7.3;
  Habitat_7.bakeCurrentTransformIntoVertices();
  Habitat_7.position.x = 0;

  // --- Planet Six ---
  Yhraen = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.88 },
    scene
  );
  Yhraen.position.x = 9.65;

  var YhraenMaterial = new BABYLON.StandardMaterial("planetSurface", scene);
  YhraenMaterial.emissiveTexture = new BABYLON.Texture(
    "textures/Yhraen.jpeg",
    scene
  );
  Yhraen.material = YhraenMaterial;

  Yhraen.position.x = 9.65;
  Yhraen.bakeCurrentTransformIntoVertices();
  Yhraen.position.x = 0;

  // --- Rings ---
  var myPlane = BABYLON.MeshBuilder.CreateCylinder(
    "myPlane",
    { diameter: 5, height: 0.05 },
    scene
  );
  myPlane.position.x = 10;
  Asiaq.addChild(myPlane);

  var myRing = BABYLON.MeshBuilder.CreateCylinder(
    "myPlane",
    { diameter: 5, height: 0.05 },
    scene
  );
  myRing.position.y = 10;
  myRing.position.x = 5.7;
  Grill.addChild(myRing);

  var myCircle = BABYLON.MeshBuilder.CreateCylinder(
    "myPlane",
    { diameter: 5, height: 0.05 },
    scene
  );
  myCircle.position.x = 7.3;
  myCircle.position.z = 7.3;
  Habitat_7.addChild(myCircle);

  return scene;
}

//Starting the render loop
engine.runRenderLoop(function() {
  orbit();
  scene.render();
});

//Orbit function for da planets
function orbit() {
  TweenLite.to(H_028.rotation, 1, {
    y: "+=.5",
    x: "+=.5"
  });

  TweenLite.to(Asiaq.rotation, 1, {
    y: "+=.3",
    x: "+=.31"
  });

  TweenLite.to(Efaja.rotation, 1, {
    y: "+=.75",
    x: "+=.75"
  });

  TweenLite.to(Grill.rotation, 1, {
    y: "+=.706",
    x: "+=.709"
  });

  TweenLite.to(Habitat_7.rotation, 1, {
    y: "+=.251",
    x: "+=.286"
  });

  TweenLite.to(Yhraen.rotation, 1, {
    y: "+=.195",
    x: "+=.155"
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
H_028.actionManager = new BABYLON.ActionManager(scene);
H_028.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML = "Planet Info";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);

//------------------------------------------------------------------------- planet 2
Asiaq.actionManager = new BABYLON.ActionManager(scene);
Asiaq.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML = "The other planet";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);
