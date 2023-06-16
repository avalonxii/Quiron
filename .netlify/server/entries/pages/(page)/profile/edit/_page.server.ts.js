import { r as redirect } from "../../../../../chunks/index.js";
const actions = {
  uploadUser: async ({ request, fetch, cookies }) => {
    const data = await request.formData();
    const _id = data.get("_id");
    const name = data.get("name");
    const userName = data.get("userName");
    const email = data.get("email");
    const aboutme = data.get("aboutme");
    const passw = data.get("password");
    const passw2 = data.get("password2");
    const { changeIt, itsOk } = validateForm(name, userName, email, passw, passw2, aboutme);
    if (!itsOk)
      return changeIt;
    else {
      const findUserbyName = await fetch(`/api/users?name=${name}`, { method: "GET" }).then((result) => result.json());
      const findUserbyEmail = await fetch(`/api/users?email=${email}`, { method: "GET" }).then((result) => result.json());
      const findUserbyUserName = await fetch(`/api/users?userName=${userName}`, { method: "GET" }).then((result) => result.json());
      const { changeThat, exist } = userExists(findUserbyName, findUserbyEmail, findUserbyUserName, changeIt, _id);
      if (exist)
        return changeThat;
      else {
        fetch(`/api/users/${_id}`, {
          method: "PUT",
          body: data
        }).catch((error) => console.log(error));
        cookies.set("auth", "", { path: "/", expires: /* @__PURE__ */ new Date(0) });
        throw redirect(302, "/login");
      }
    }
  }
};
function userExists(findUserbyName, findUserbyEmail, findUserbyUserName, changeIt, _id) {
  let exist = false;
  if (findUserbyName != null && findUserbyName._id != _id) {
    exist = true;
    changeIt.name.error = "this 'name' it's already taken srry";
  }
  if (findUserbyEmail != null && findUserbyName._id != _id) {
    exist = true;
    changeIt.email.error = "this 'email' it's being used by other user srry";
  }
  if (findUserbyUserName != null && findUserbyName._id != _id) {
    exist = true;
    changeIt.userName.error = "It's a cool 'userName' but it's already taken srry";
  }
  const changeThat = changeIt;
  return { changeThat, exist };
}
function validateForm(name, userName, email, passw, passw2, aboutme) {
  let itsOk = true;
  let changeIt = {
    name: { name, error: "" },
    userName: { userName, error: "" },
    email: { email, error: "" },
    aboutme: { aboutme, error: "" },
    passw: { passw, error: "" },
    passw2: { passw2, error: "" }
  };
  let redExp = /^[a-zA-Z][\w\d]*$/;
  if (name?.length < 4 || name?.length > 15 || !redExp.test(name)) {
    itsOk = false;
    changeIt = {
      ...changeIt,
      name: { name, error: "Your 'name' must have 4 to 15 characters and starts whit a letter" }
    };
  }
  if (userName?.length < 4 || userName?.length > 15 || !redExp.test(userName)) {
    itsOk = false;
    changeIt = {
      ...changeIt,
      userName: { userName, error: "Your 'userName' must have 4 to 15 characters and starts whit a letter" }
    };
  }
  redExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!redExp.test(email)) {
    itsOk = false;
    changeIt = {
      ...changeIt,
      email: { email, error: "Check if email constains '@' and '.'" }
    };
  }
  redExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z].+$/;
  if (!redExp.test(passw)) {
    itsOk = false;
    changeIt = {
      ...changeIt,
      passw: { passw, error: "password must starts whit a letter and contain at least one uppercase, lowercase, and number" }
    };
  } else if (!(passw === passw2)) {
    itsOk = false;
    changeIt = {
      ...changeIt,
      passw: { passw, error: "these fields do not match" },
      passw2: { passw2, error: "these fields do not match" }
    };
  }
  return { changeIt, itsOk };
}
const load = async () => {
  return {};
};
export {
  actions,
  load
};
