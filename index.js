document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(
    '#accordion input[type="checkbox"]'
  );
  const features = document.querySelectorAll(".image-feature .feature");

  // Function to show the correct image based on the checked input
  function updateFeatureImage() {
    // Hide all features
    features.forEach((feature) => {
      feature.style.display = "none";
    });

    // Show the correct feature based on the checked input
    accordionItems.forEach((item) => {
      if (item.checked) {
        if (item.id === "kurikulum") {
          document.querySelector(".feature-1").style.display = "block";
        } else if (item.id === "fleksibility") {
          document.querySelector(".feature-2").style.display = "block";
        } else if (item.id === "code-review") {
          document.querySelector(".feature-3").style.display = "block";
        } else if (item.id === "alumni") {
          document.querySelector(".feature-4").style.display = "block";
        }
      }
    });
  }

  // Attach change event listener to each accordion item
  accordionItems.forEach((item) => {
    item.addEventListener("change", function () {
      if (this.checked) {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== this) {
            otherItem.checked = false;
          }
        });
        updateFeatureImage();
      }
    });
  });

  // Initial call to update the feature image based on the initially checked input
  updateFeatureImage();
});
