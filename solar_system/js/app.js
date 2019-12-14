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
    "textures/H-028.png",
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
    "textures/Asiaq.png",
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
    "textures/Efaja.png",
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
    "textures/Lorek.jpg",
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
    "textures/Habitat_7.png",
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
    "textures/Yhraen.png",
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
    infoBox.innerHTML =
      "Faross <br><br> Faross is located in a region of the Heleus Cluster that is lighted differently from the rest of it. Dr. Suvi Anwar theorizes that maybe the Scourge is absorbing certain wavelengths.";
    infoBox.style.display = "block";
  })
);


//------------------------------------------------------------------------- planet 1
H_028.actionManager = new BABYLON.ActionManager(scene);
H_028.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML =
      "H-028 <br><br> Orbital Distance: 0.2 AU <br> Orbital Period: 0.2 years <br> Radius: 7918km <br> Atmospheric Pressure: 0.07 atm <br> Surface Temperature: 33 C <br><br> Information: <br> A near-constant bombardment of meteorites from the nearby asteroid belt pelts the surface of H-028. It's only real weather is the resulting dust clouds";
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
    infoBox.innerHTML =
      "Asiaq <br><br> Orbital Distance: 1.5 AU <br> Orbital Period: 3.4 years <br> Radius: 9148km <br> Atmospheric Pressure: 29.36 atm <br> Surface Temperature: -51 C <br><br> Information: <br> Asiaq's thick carbon dioxide and argon atmosphere shows symptoms of Scourge distortion, though no Scourge tendrils are detectable in the planet's current orbital path.";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);

//------------------------------------------------------------------------- planet 3
Efaja.actionManager = new BABYLON.ActionManager(scene);
Efaja.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML =
      "Efaja <br><br> Orbital Distance: 0.3 AU <br> Orbital Period: 0.4 years <br> Radius: 4138km <br> Atmospheric Pressure: 7.04 atm <br> Surface Temperature: -1 C <br><br> Information: <br> Thanks to its unusual orbit and axial tilt, Efaja is pounded by snow and howling winds for all but a few hours of each fifty-six hour day.";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);

//------------------------------------------------------------------------- planet 4
Grill.actionManager = new BABYLON.ActionManager(scene);
Grill.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML =
      "Grill <br><br> Orbital Distance: 0.7 AU <br> Orbital Period: 1.1 years <br> Radius: 4138km <br> Atmospheric Pressure: 89.22 atm <br> Surface Temperature: 101 C <br><br> Information: <br> First discovered by an Outcast with an unusual sense of humor, Grill was named for its extremely hot metallic surface and earmarked for future mining operation.";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);

//------------------------------------------------------------------------- planet 5
Habitat_7.actionManager = new BABYLON.ActionManager(scene);
Habitat_7.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML =
      "Habitat_7 <br><br> Orbital Distance: 2.3 AU <br> Orbital Period: 3.1 years <br> Radius: 4912km <br> Atmospheric Pressure: 2.3 atm <br> Surface Temperature: 17 C <br><br> Information: <br> Even visual scans show that Habitat 7 is no longer a promising settlement world. The planet's atmosphere is largely argon-nitrogen, and little of the projected plant life has survived.";
    infoBox.style.display = "block";
    console.log("gg baby");
  })
);

//------------------------------------------------------------------------- planet 6
Yhraen.actionManager = new BABYLON.ActionManager(scene);
Yhraen.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(
    event
  ) {
    infoBox.innerHTML =
      "Yhraen <br><br> Orbital Distance: 5.7 AU <br> Orbital Period: 10.4 years <br> Radius: 5301km <br> Atmospheric Pressure: 2.9 atm <br> Surface Temperature: 111 C <br><br> Information: <br> Sulfur, iron, and plutonium compose the bulk of Yhraen's surface. It's powerful storms shift in magnitude as it orbits around the gas giant Yednoath";
    infoBox.style.display = "block";
  })
);
