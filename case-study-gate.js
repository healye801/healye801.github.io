(function () {
	var PASSWORD_HASH = "e4cb3b7ff5a4b3885230474eeeef7d8ac009169af23faa0f7b373933cb664f46";
	var STORAGE_KEY = "caseStudyUnlocked";
	var MAX_ATTEMPTS = 3;

	function sha256Hex(text) {
		var data = new TextEncoder().encode(text);
		return crypto.subtle.digest("SHA-256", data).then(function (buf) {
			return Array.prototype.map
				.call(new Uint8Array(buf), function (b) {
					return b.toString(16).padStart(2, "0");
				})
				.join("");
		});
	}

	function showDenied() {
		document.body.innerHTML =
			'<div class="gate-denied">' +
			'<div><h1>Access Denied</h1>' +
			"<p>Too many incorrect attempts. If you believe this is a mistake, please contact me at emmahealy2021@u.northwestern.edu<br>" +
			'<a href="index.html">Back to the homepage</a></p></div></div>';
	}

	function buildGate() {
		var overlay = document.createElement("div");
		overlay.className = "gate-overlay";
		overlay.setAttribute("role", "dialog");
		overlay.setAttribute("aria-modal", "true");
		overlay.setAttribute("aria-labelledby", "gate-title");
		overlay.innerHTML =
			'<div class="gate-panel">' +
			'<h2 class="gate-title" id="gate-title">Password Protected</h2>' +
			'<p class="gate-subtext">This case study is password protected. Enter the password to continue.</p>' +
			'<form class="gate-form" autocomplete="off">' +
			'<input type="password" class="gate-input" autocomplete="new-password" placeholder="Password" aria-label="Password">' +
			'<div class="gate-error" role="alert" hidden>Incorrect password. Please try again.</div>' +
			'<div class="gate-actions">' +
			'<a href="index.html" class="gate-cancel">Back to homepage</a>' +
			'<button type="submit" class="gate-submit">Unlock</button>' +
			"</div>" +
			"</form>" +
			"</div>";
		document.body.appendChild(overlay);
		Array.prototype.forEach.call(document.body.children, function (el) {
			if (el !== overlay) {
				el.setAttribute("inert", "");
			}
		});
		return overlay;
	}

	function init() {
		if (sessionStorage.getItem(STORAGE_KEY) === "true") {
			return;
		}
		if (!window.crypto || !window.crypto.subtle) {
			return;
		}

		var overlay = buildGate();
		var form = overlay.querySelector(".gate-form");
		var input = overlay.querySelector(".gate-input");
		var errorEl = overlay.querySelector(".gate-error");
		var attempts = 0;

		input.focus();

		form.addEventListener("submit", function (e) {
			e.preventDefault();
			sha256Hex(input.value).then(function (hash) {
				if (hash === PASSWORD_HASH) {
					Array.prototype.forEach.call(document.body.children, function (el) {
						el.removeAttribute("inert");
					});
					overlay.remove();
					sessionStorage.setItem(STORAGE_KEY, "true");
					return;
				}
				attempts++;
				if (attempts >= MAX_ATTEMPTS) {
					showDenied();
					return;
				}
				errorEl.hidden = false;
				input.value = "";
				input.focus();
			});
		});
	}

	document.addEventListener("DOMContentLoaded", init);
})();
