import Appointment from "../models/appointments.js";
import Validator from "fastest-validator";

export const findAppointmentbyId = async (id) => {
  return await Appointment.findOne({ where: { id } });
};

export const findAppointment = async () => {
  return await Appointment.findAll();
};

const schema = {
  nama: { type: "string", optional: false },
  email: { type: "email", optional: false },
  noHP: { type: "string", optional: false },
  namaDoctor: { type: "string", optional: false },
  appointmentDate: { type: "string", optional: false },
  pesan: { type: "string", optional: true },
};

const validator = new Validator();
const newValidator = validator.compile(schema);

export const addAppointment = async (
  nama,
  email,
  noHP,
  namaDoctor,
  appointmentDate,
  pesan
) => {
  const validationResult = newValidator({
    nama,
    email,
    noHP,
    namaDoctor,
    appointmentDate,
    pesan,
  });

  try {
    if (validationResult !== true) {
      return { error: validationResult };
    } else {
      const appointment = await Appointment.create({
        nama,
        email,
        noHP,
        namaDoctor,
        appointmentDate,
        pesan,
      });
    }
  } catch (error) {
    return { error: error.massage };
  }
};
