import React from 'react'
import axios from 'axios'
const instance = axios.create({
    baseURL: "https://api.themoviebd.org/3"
})
export default instance;