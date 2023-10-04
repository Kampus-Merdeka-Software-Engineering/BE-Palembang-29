import express, { request, response } from "express";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";
import { findDoctorById, findDoctor, addDoctor } from "../services/doctors.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getDoctorbyId = async (request, response) => {
  const { id } = request.params;
  const doctors = await findDoctorById(id);

  response.json({
    data: doctors,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getDoctor = async (request, response) => {
  const doctors = await findDoctor();

  response.json({
    data: doctors,
    message: httpStatusMesage[response.statusCode],
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const postDoctor = async (request, response) => {
  const { idDoctor, namaDoctor, spesialisasi, picture, bio } = request.body;
  const doctors = await addDoctor(
    idDoctor,
    namaDoctor,
    spesialisasi,
    picture,
    bio
  );

  console.log({ body: request.body });
  response.json({
    data: doctors,
    message: httpStatusMesage[response.statusCode],
  });
};
