import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
	withCredentials: true
});


export const fetch = async (url: string, options?: AxiosRequestConfig) => {
	return instance(url, options);
}