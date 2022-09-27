import axios from "axios";
import { IBook } from "../types/IBook";
import { IBooksPagination } from "../types/IBooksPagination";
import { ICreateBookReq } from "../types/ICreateBookReq";
import { IPutBookReq } from "../types/IPutBookReq";

const axiosInstace = axios.create({
  baseURL: "http://localhost:5004",
});

export const getBooks = async () => {
  const { data } = await axiosInstace.get<IBooksPagination>("/books");

  return data.items;
};

export const getBook = async (uuid: string) => {
  const { data } = await axiosInstace.get<IBook>(`/books/${uuid}`);
  return data;
};

export const postBook = async (req: ICreateBookReq) => {
  const { data } = await axiosInstace.post<{ items: IBook[] }>("/books", [req]);
  return data;
};

export const putBook = async (req: IPutBookReq) => {
  const { _uuid, ...rest } = req;
  const { data } = await axiosInstace.put<IBook>(`/books/${req._uuid}`, rest);
  return data;
};
export const deleteBook = async (uuid: string) => {
  const { data } = await axiosInstace.delete<IBook>(`/books/${uuid}`);
  return data;
};
