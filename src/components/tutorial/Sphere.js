import * as THREE from "three";
import * as dat from "dat.gui";

function Sphere() {
  function renderContent() {
    const gui = new dat.GUI();
    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(0.5, 64, 64)
    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    material.color = new THREE.Color(0x292929);

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

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

    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.y += 0.01;
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
