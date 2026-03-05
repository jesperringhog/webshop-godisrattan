export function goToCheckoutBtn() {
  const goToCheckoutBtn = document.getElementById(
    "goToCheckoutBtn",
  ) as HTMLButtonElement;

  if (!goToCheckoutBtn) return;

  goToCheckoutBtn.addEventListener("click", () => {
    window.location.href = "/checkout.html";
  });
}
