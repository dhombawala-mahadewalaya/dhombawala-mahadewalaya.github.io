import {
  auth,
  provider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  configured
} from "./firebase.js";


// =====================================
// AUTH NAVIGATION
// =====================================

const initAuthNav = () => {

  const loginBtn = document.getElementById("nav-login");
  const userBox = document.getElementById("nav-user");
  const userName = document.getElementById("nav-user-name");
  const userEmail = document.getElementById("nav-user-email");
  const userPhoto = document.getElementById("nav-user-photo");
  const logoutBtn = document.getElementById("nav-logout");


  // -----------------------------------
  // No auth UI on this page
  // -----------------------------------

  if (!loginBtn && !userBox) return;


  // -----------------------------------
  // Login
  // -----------------------------------

  if (loginBtn) {

    loginBtn.addEventListener("click", async () => {

      if (!configured) {
        alert("Firebase configuration එක සකසා නැත.");
        return;
      }

      try {

        await signInWithPopup(auth, provider);

      } catch (err) {

        console.error("Login error:", err);

        if (
          err.code === "auth/popup-blocked" ||
          err.code === "auth/operation-not-supported-in-this-environment"
        ) {

          try {
            await signInWithRedirect(auth, provider);
          } catch (redirectError) {
            console.error(redirectError);
          }

        } else if (
          err.code !== "auth/popup-closed-by-user" &&
          err.code !== "auth/cancelled-popup-request"
        ) {

          alert(
            "Google login වීමට නොහැකි විය.\n\n" +
            (err.message || err.code || "Unknown error")
          );

        }

      }

    });

  }


  // -----------------------------------
  // Logout
  // -----------------------------------

  if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

      try {

        await signOut(auth);

      } catch (err) {

        console.error("Logout error:", err);

      }

    });

  }


  // -----------------------------------
  // Authentication state
  // -----------------------------------

  onAuthStateChanged(auth, user => {

    if (user) {

      // Logged in

      if (loginBtn) {
        loginBtn.hidden = true;
      }

      if (userBox) {
        userBox.hidden = false;
      }

      if (userName) {
        userName.textContent =
          user.displayName ||
          "Google User";
      }

      if (userEmail) {
        userEmail.textContent =
          user.email || "";
      }

      if (userPhoto) {

        if (user.photoURL) {
          userPhoto.src = user.photoURL;
          userPhoto.hidden = false;
        } else {
          userPhoto.hidden = true;
        }

      }

    } else {

      // Logged out

      if (loginBtn) {
        loginBtn.hidden = false;
      }

      if (userBox) {
        userBox.hidden = true;
      }

      if (userName) {
        userName.textContent = "";
      }

      if (userEmail) {
        userEmail.textContent = "";
      }

      if (userPhoto) {
        userPhoto.hidden = true;
      }

    }

  });

};


// =====================================
// Start
// =====================================

if (configured) {
  initAuthNav();
}