export const config = {
  user: "",
  pwd: "",
  host: "",
  dbname: ""
}

export const authkey = {
  key: "modernapidevelopment",
  header: {
    alg: "HS256",
    typ: "JWT"
  },
  payload: {
    iss: "ted",
    exp: setExpiration(new Date().getTime() + 60000)
  }
}