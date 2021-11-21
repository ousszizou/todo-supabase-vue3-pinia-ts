<template>
  <div class="login-container">
    <div class="login-card">
      <form>
        <h2 class="login-card__title">LOGIN</h2>

        <div class="login-card__social-login">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
            <p>Login with Github</p>
          </button>
        </div>

        <p class="login-card__seperator"><span>or</span></p>

        <div class="login-card__email-login">
          <input type="text" placeholder="Enter Email" name="email" required autocomplete="off" />
        </div>
        <button>SEND MAGIC LINK</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 300px;
  border-radius: 10px;
  background-color: #ffff;
  padding: 1.8rem;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
}

.login-card__title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
.login-card__social-login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card__social-login > button {
  background: #fff;
  border: solid 2px rgba(0, 0, 0, 1);
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  flex: auto;
  align-items: center;
  gap: 5px;
  justify-content: center;
  cursor: pointer;
}

.login-card__seperator {
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid #e3e3e3;
  line-height: 0.1em;
  margin: 25px 0;
}
.login-card__seperator span {
  background: #fff;
  padding: 0 10px;
}

.login-card__email-login{
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 15px 20px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: 2px solid rgb(212, 212, 212);
  border-radius: 8px;
  box-sizing: border-box;
}

.login-card > form > button {
  background-color: rgb(69, 69, 185);
  color: white;
  padding: 18px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>
