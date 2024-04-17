const menuBar = document.querySelector('.menu-bar');

menuBar.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  document.querySelector('.menu-items').classList.toggle('active');
})

const slider = tns({
  container: ".my-slider",
  "items": "4",
  "slideBy": "1",
  "speed": "400",
  autoplay: true,
  controls: false,
  "nav": false,
  autoplayButtonOutput: false,
  // responsive: {
  //   100: {
  //     items: 4,
  //   },
  // },
});
document.addEventListener("DOMContentLoaded", function() {
  var addToCartButtons = document.querySelectorAll(".product-item .cart");
  addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          var productItem = this.closest(".product-item");
          var productName = productItem.querySelector(".title").textContent;
          addToCart(productName);

          // Hiển thị cửa sổ cảnh báo thông báo thành công
          alert("Sản phẩm đã được thêm vào giỏ hàng!");

          // Chuyển hướng sau khi người dùng đã nhận được thông báo
          
      });
  });

  function addToCart(productName) {
      var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(productName);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});


function registerNewUser() {
	console.log('test....')
	var fname = document.getElementById('fname').value
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value
	var confirmPwd = document.getElementById('password-confirmation').value
	var birthday = document.getElementById('birthday').value

	if(password != confirmPwd) {
		alert('Mat khau nhap khong khop!!! Vui long kiem tra lai!!!')
		
	}

	localStorage.setItem('fullname', fname)
	localStorage.setItem('email', email)
	localStorage.setItem('password', password)
	localStorage.setItem('birthday', birthday)
	window.location.href = "giohang.html";
	
}



