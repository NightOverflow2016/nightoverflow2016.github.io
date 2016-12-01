function earthBackground() {

  if (!Detector.webgl) Detector.addGetWebGLMessage();

  var container, stats;
  var camera, scene, renderer;
  var mesh, light;

  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;

  init();
  animate();

  function createEarth() {
    var geometry = new THREE.SphereGeometry(250, 32, 32);
    var textureLoader = new THREE.TextureLoader();
    var material = new THREE.MeshBasicMaterial({color: 0xffffff, map: textureLoader.load('assets/earth.gif')});
    return new THREE.Mesh(geometry, material);
  }

  function update() {
    var time = +Date.now();
    mesh.rotation.y -= Math.PI / 2000;
  }

  function init() {
    container = document.getElementById('threejs-canvas');
    camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1800;
    scene = new THREE.Scene();
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 1);
    scene.add(light);

    mesh = createEarth();
    mesh.rotation.x = Math.PI / 12;
    mesh.rotation.y = Math.PI * 1.6;
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    stats = new Stats();
    // container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize, false);
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
  }

  function render() {
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    update();
  }

}