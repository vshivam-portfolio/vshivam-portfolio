 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index 3ecd2f1c99c61d731e5f71559821677b91decbf2..40c8b0c483a4eb438c902525afd9f03d0b60962a 100644
--- a/script.js
+++ b/script.js
@@ -1,62 +1,72 @@
 const hamburger = document.getElementById("hamburger");
 const nav = document.querySelector("nav");
 const body = document.body;
 const header = document.querySelector("header");
 
-/* MOBILE MENU */
-hamburger.addEventListener("click",()=>{
-    nav.classList.toggle("nav-active");
-    body.classList.toggle("menu-open");
+if (hamburger) {
+    hamburger.addEventListener("click", () => {
+        nav.classList.toggle("nav-active");
+        body.classList.toggle("menu-open");
 
-    const icon = hamburger.querySelector("i");
-    icon.classList.toggle("fa-bars");
-    icon.classList.toggle("fa-times");
-});
-
-/* ACTIVE LINK */
-document.querySelectorAll(".nav-links a").forEach(link=>{
-    link.addEventListener("click",()=>{
-        document.querySelectorAll(".nav-links a")
-            .forEach(l=>l.classList.remove("active"));
-        link.classList.add("active");
+        const icon = hamburger.querySelector("i");
+        if (icon) {
+            icon.classList.toggle("fa-bars");
+            icon.classList.toggle("fa-times");
+        }
+    });
+}
 
+// Smooth scroll
+const navLinks = document.querySelectorAll('a[href^="#"]');
+navLinks.forEach((link) => {
+    link.addEventListener("click", (event) => {
+        event.preventDefault();
+        const target = document.querySelector(link.getAttribute("href"));
+        if (target) {
+            target.scrollIntoView({ behavior: "smooth" });
+        }
         nav.classList.remove("nav-active");
         body.classList.remove("menu-open");
     });
 });
 
-/* SMOOTH SCROLL */
-document.querySelectorAll('a[href^="#"]').forEach(a=>{
-    a.addEventListener("click",e=>{
-        e.preventDefault();
-        document.querySelector(a.getAttribute("href"))
-            .scrollIntoView({behavior:"smooth"});
-    });
+// Sticky header
+window.addEventListener("scroll", () => {
+    header.style.background = window.scrollY > 50 ? "rgba(5, 5, 5, 0.95)" : "rgba(5, 5, 5, 0.9)";
+    header.style.boxShadow = window.scrollY > 50 ? "0 5px 20px rgba(0,0,0,0.5)" : "none";
 });
 
-/* HEADER SHRINK */
-window.addEventListener("scroll",()=>{
-    header.classList.toggle("shrink",window.scrollY>50);
+// Portfolio filter (visual only)
+const filters = document.querySelectorAll(".portfolio-filter");
+filters.forEach((btn) => {
+    btn.addEventListener("click", () => {
+        filters.forEach((item) => item.classList.remove("active"));
+        btn.classList.add("active");
+    });
 });
 
-/* PAGE LOADER */
-window.addEventListener("load",()=>{
-    document.getElementById("page-loader").style.display="none";
+// Image uploads
+const imageInputs = document.querySelectorAll("[data-image-target]");
+imageInputs.forEach((input) => {
+    input.addEventListener("change", (event) => {
+        const file = event.target.files[0];
+        if (!file) {
+            return;
+        }
+        const targetId = input.dataset.imageTarget;
+        const target = document.getElementById(targetId);
+        if (target) {
+            const imageUrl = URL.createObjectURL(file);
+            target.src = imageUrl;
+        }
+    });
 });
 
-/* PORTFOLIO FILTER */
-document.querySelectorAll(".portfolio-filter").forEach(btn=>{
-    btn.addEventListener("click",()=>{
-        document.querySelectorAll(".portfolio-filter")
-            .forEach(b=>b.classList.remove("active"));
-        btn.classList.add("active");
-
-        const text = btn.innerText.toLowerCase();
-        document.querySelectorAll(".portfolio-item").forEach(item=>{
-            item.classList.toggle(
-                "hide",
-                !(text==="all works" || item.innerText.toLowerCase().includes(text))
-            );
-        });
+// Character counter for contact textarea
+const projectDetails = document.getElementById("project-details");
+const characterCount = document.querySelector(".character-count");
+if (projectDetails && characterCount) {
+    projectDetails.addEventListener("input", () => {
+        characterCount.textContent = `${projectDetails.value.length}/500 characters`;
     });
-});
+}
 
EOF
)
