export function checkoutBtn() {
  const buyBtn = document.getElementById("buyBtn") as HTMLButtonElement;

  if (!buyBtn) return;

  buyBtn.addEventListener("click", () => {
    window.location.href = "/checkout.html";
  });
}
