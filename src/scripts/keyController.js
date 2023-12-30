class KeyController {
  constructor(keyList) {
    this.keyList = keyList;

    this.createControllerHeader();
    this.createVolumeController();
    this.createSlider();
  }

  createControllerHeader() {
    const headerController = document.createElement("div");
    headerController.classList.add("piano-controller");

    this.keyList.containerElement.insertBefore(
      headerController,
      this.keyList.containerElement.firstChild
    );

    this.headerController = headerController;
  }
  createVolumeController() {
    const volumeContainer = document.createElement("div");

    volumeContainer.classList.add("volume-container");

    const volumeLabel = document.createElement("div");

    volumeLabel.textContent = "Volume";

    const volumeController = document.createElement("input");

    volumeController.classList.add("volume-controller");
    volumeController.setAttribute("type", "range");
    volumeController.setAttribute("value", "1");
    volumeController.setAttribute("step", "any");
    volumeController.setAttribute("min", "0");
    volumeController.setAttribute("max", "1");

    volumeController.addEventListener("input", (e) => {
      this.keyList.handleVolume(e.target.value);
    });

    volumeContainer.appendChild(volumeLabel);
    volumeContainer.appendChild(volumeController);

    this.headerController.appendChild(volumeContainer);
  }

  createSlider() {
    const sliderContainer = document.createElement("div");

    sliderContainer.classList.add("slider-container");

    const sliderLabel = document.createElement("div");

    sliderLabel.textContent = "Teclas";

    const sliderWrapper = document.createElement("div");

    sliderWrapper.classList.add("slider-wrapper");

    const sliderController = document.createElement("div");

    sliderController.classList.add("slider-controller");

    sliderWrapper.addEventListener("click", () => {
      sliderController.classList.toggle("active");

      this.keyList.keys.forEach((key) => {
        key.keyElement.classList.toggle("hide");
      });
    });

    sliderWrapper.appendChild(sliderController);
    sliderContainer.appendChild(sliderLabel);
    sliderContainer.appendChild(sliderWrapper);

    this.headerController.appendChild(sliderContainer);
  }
}
