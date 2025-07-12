
const menuBtn = document.querySelector(".toggle-nav");
const navLinks = document.querySelector(".mobile-nav");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}


document.querySelectorAll(".product-action").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const productInfo = e.target.closest(".product-info");
    const productId = e.target.dataset.productId;
    const productName = productInfo.querySelector("h2").innerText;
    const productPrice = productInfo.querySelector(".price strong").innerText;

    const newProduct = {
      id: productId,
      name: productName,
      price: parseInt(productPrice.replace(/[^\d]/g, ""))
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.some(product => product.id === newProduct.id);
    if (!exists) {
      cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`"${newProduct.name}" added to cart.`);
    } else {
      alert(`"${newProduct.name}" is already in the cart.`);
    }
    window.location.href = "cart.html";

  });
});


const submitContact = document.querySelector(".submit-contact");
if (submitContact) {
  submitContact.addEventListener("click", (e) => {
    e.preventDefault();
    const message = document.querySelector(".contact-message").value.trim();
    if (!message) {
      alert("Please enter a message.");
    } else {
      alert("Message sent successfully!");
    }
  });
}


const learnMoreBtn = document.querySelector(".learn-more");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  });
}

const shopNowBtn = document.querySelector(".shop-now");
if (shopNowBtn) {
  shopNowBtn.addEventListener("click", () => {
    alert("Redirecting to product section...");
  });
}
const scrollToTopBtn = document.querySelector(".scroll-to-top");
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

  const scrollBtn = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hide initially
  scrollBtn.style.display = "none";

