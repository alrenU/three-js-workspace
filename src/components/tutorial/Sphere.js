import * as THREE from "three";
import * as dat from "dat.gui";
import "../../css/tutorial.css"

function Sphere() {
  function renderContent() {
    // Creating normal map.
    const texture = new THREE.TextureLoader().load(process.env.PUBLIC_URL + '/textures/normal_map_1.jpg');

    // Creating GUI and scene.
    const gui = new dat.GUI();
    const scene = new THREE.Scene();

    // Creating geometric shapes and materials.
    const geometry = new THREE.SphereGeometry(0.5, 64, 64)
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    material.normalMap = texture;
    material.color = new THREE.Color(0x292929);

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Creating lights.
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff0000, 1);
    pointLight2.position.set(-2, -0.5, 1);
    scene.add(pointLight2);

    // Creatin scene sizing.
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Creating camera.
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Creating renderer.
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    // Adjusting the windows responsiveness.
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Adding GUI.
    const light1 = gui.addFolder('Light 1');
    light1.add(pointLight.position, 'x').min(-10).max(10).step(0.01);
    light1.add(pointLight.position, 'y').min(-10).max(10).step(0.01);
    light1.add(pointLight.position, 'z').min(-10).max(10).step(0.01);
    light1.add(pointLight, 'intensity').min(0).max(10).step(0.01);

    const light2 = gui.addFolder('Light 2');
    light2.add(pointLight2.position, 'x').min(-10).max(10).step(0.01);
    light2.add(pointLight2.position, 'y').min(-10).max(10).step(0.01);
    light2.add(pointLight2.position, 'z').min(-10).max(10).step(0.01);
    light2.add(pointLight2, 'intensity').min(0).max(10).step(0.01);

    const light2Color = {
      color: 0xff000
    };
    light2.addColor(light2Color, 'color').onChange(() => {
      pointLight2.color.set(light2Color.color)
    })

    // Looping the shape.

    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
    }
    animate();
  }

  return (
    <>
      <button onClick={renderContent}>Click to Render Object</button>
    </>
  );
}

export default Sphere;
