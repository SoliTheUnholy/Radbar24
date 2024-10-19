import Cookies from "js-cookie";
const Auth = async () => {
  let Auth = false;
  try {
    if (Cookies.get("Token")) {
      await fetch("https://api.radbar24.ir/api/Sign/GetCurrentUserInfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("Token"),
        },
      }).then((response) =>
        response.json().then((res) => {
          if (res.Success === true) {
            Auth = true;
          }
        }),
      );
    }
    return Auth;
  } catch (error) {
    console.error("Error submitting data:", error);
    return Auth;
  }
};

export default Auth;
