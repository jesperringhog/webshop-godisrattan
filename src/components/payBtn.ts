import { clearCart } from "../services/cartStorage";

export function payBtn() {
  const payBtn = document.getElementById("payBtn") as HTMLButtonElement;
  const popup = document.getElementById("popup") as HTMLDivElement;
  const closeBtn = document.getElementById("closePopup") as HTMLButtonElement;
  const errorPopup = document.getElementById("errorPopup") as HTMLDivElement;
  const closeErrorBtn = document.getElementById(
    "closeErrorPopup",
  ) as HTMLButtonElement;

  const form = document.querySelector(".checkout-container") as HTMLElement;
  const textInputs = form?.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='tel']",
  ) as NodeListOf<HTMLInputElement>;

  if (!payBtn || !popup || !closeBtn) return;

  payBtn.addEventListener("click", () => {
    let allFilled = true;

    textInputs?.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "";
      }
    });

    const shippingSelected = form?.querySelector(
      'input[name="shipping"]:checked',
    );
    const paymentSelected = form?.querySelector(
      'input[name="payment"]:checked',
    );

    const shippingSection = form
      ?.querySelector('input[name="shipping"]')
      ?.closest(".checkout-section");
    const paymentSection = form
      ?.querySelector('input[name="payment"]')
      ?.closest(".checkout-section");

    if (!shippingSelected) {
      allFilled = false;
      if (shippingSection) {
        (shippingSection as HTMLElement).style.border = "2px solid red";
      }
    } else {
      if (shippingSection) {
        (shippingSection as HTMLElement).style.border = "";
      }
    }

    if (!paymentSelected) {
      allFilled = false;
      if (paymentSection) {
        (paymentSection as HTMLElement).style.border = "2px solid red";
      }
    } else {
      if (paymentSection) {
        (paymentSection as HTMLElement).style.border = "";
      }
    }

    if (allFilled) {
      popup.classList.remove("hidden");
    } else {
      errorPopup?.classList.remove("hidden");
    }
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    clearCart();
    window.location.href = "/index.html";
  });

  closeErrorBtn?.addEventListener("click", () => {
    errorPopup?.classList.add("hidden");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });

  errorPopup?.addEventListener("click", (e) => {
    if (e.target === errorPopup) {
      errorPopup?.classList.add("hidden");
    }
  });
}
