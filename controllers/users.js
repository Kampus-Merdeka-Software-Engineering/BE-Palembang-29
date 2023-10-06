import express, { request, response } from "express";
import {
  signUp,
  findUserById,
  signIn,
  destroyUserById,
} from "../services/users.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getUserById = async (request, response) => {
  const { id } = request.params;
  const user = await findUserById(id);

  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const createAccount = async (request, response) => {
  const { username, email, password } = request.body;
  const user = await signUp(username, email, password);

  console.log({ body: request.body });
  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const signInAccount = async (request, response) => {
  const { email, password } = request.body;
  const user = await signIn(email, password);

  console.log({ body: request.body });
  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const deleteUserById = async (request, response) => {
  const { id } = request.params;
  const user = await destroyUserById(id);

  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};
