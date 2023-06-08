window.addEventListener('DOMContentLoaded', function () {
  const LAYERS_ITEMS = this.document.querySelectorAll('.layers__item');

  document.addEventListener('mousemove', function (e) {
    const x = (e.clientX - window.innerWidth / 2) * -0.005; // 0.005 - коэфицент скорости вращения
    const y = (e.clientY - window.innerHeight / 2) * 0.01; // 0.01 - коэфицент скорости вращения

    LAYERS_ITEMS.forEach((item) => {
      const z = item.dataset.prlxZ ? item.dataset.prlxZ : 0;
      const scale = item.dataset.prlxScale ? item.dataset.prlxScale : 1;

      item.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(${z}px) scale(${scale})`;
    });
  });
});
