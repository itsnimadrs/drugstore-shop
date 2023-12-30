// const API_URL = "http://localhost:8080/api/auth/";

// class AuthService {
//   login(username, password) {
//     return axios
//       .post(API_URL + "signin", {
//         username,
//         password
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }

//         return response.data;
//       });
//   }

//   logout() {
//     localStorage.removeItem("user");
//   }

//   register(username, email, password) {
//     return axios.post(API_URL + "signup", {
//       username,
//       email,
//       password
//     });
//   }

//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));;
//   }
// }

// export default new AuthService();

export const login = async (credentials) => {
  
  const response = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  
  const { accessToken, refreshToken } = await response.json();
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);

  return {
    accessToken,
    refreshToken,
  };
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  const response = await fetch("/api/refresh", {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });

  const { accessToken } = await response.json();

  localStorage.setItem("accessToken", accessToken);

  return accessToken;
};
