import Doctor from "../models/doctors.js";

export const findDoctorById = async (id) => {
  return await Doctor.findOne({ where: { id } });
};

export const findDoctor = async () => {
  return await Doctor.findAll();
};

export const addDoctor = async (
  idDoctor,
  namaDoctor,
  spesialisasi,
  picture,
  bio
) => {
  return await Doctor.create({
    idDoctor,
    namaDoctor,
    spesialisasi,
    picture,
    bio,
  });
};
