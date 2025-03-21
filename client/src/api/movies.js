import { axiosInstance } from "./index";

export const getAllMovies = async () => {
    try {
        const response = await axiosInstance.get('api/movies/get-all-movies')          // '/' probable error 
        return response.data;
    } catch (error) {
        console.log("Error in getAllMovies api ❌")
        console.log(error)
    }
}

export const addMovie = async (values) => {
    try {
        const response = await axiosInstance.post('api/movies/add-movie', values);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getMovieById = async (id) => {
    try{
        const response = await axiosInstance.get(`/api/movies/movie/${id}`)
        return response.data;
    }catch(err){
        return err.response
    }
}