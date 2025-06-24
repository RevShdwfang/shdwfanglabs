export function setupAccordionAnimation() {
  const detailsEls = document.querySelectorAll(".product-details-section details");

  detailsEls.forEach((detail) => {
    const summary = detail.querySelector("summary");

    const toggleHandler = (e: Event) => {
      e.preventDefault();
      const htmlDetail = detail as HTMLElement;
      const isOpen = detail.hasAttribute("open");

      if (isOpen) {
        htmlDetail.style.maxHeight = htmlDetail.scrollHeight + "px";
        requestAnimationFrame(() => {
          htmlDetail.style.maxHeight = "3rem";
          detail.removeAttribute("open");
        });
      } else {
        detail.setAttribute("open", "");
        htmlDetail.style.maxHeight = htmlDetail.scrollHeight + "px";
      }
    };

    summary?.addEventListener("click", toggleHandler);

    // Optional cleanup
    (detail as any).cleanup = () => {
      summary?.removeEventListener("click", toggleHandler);
    };
  });
}
