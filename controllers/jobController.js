import { StatusCodes } from "http-status-codes";
import Job from "../models/JobModel.js";

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();

  res.status(StatusCodes.OK).json({ jobs });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findOne({ _id: id });

  res.status(StatusCodes.OK).json({ job });
};

// CREATE JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;

  const job = await Job.create({ company, position });

  res.status(StatusCodes.CREATED).json({ msg: "job created", job });
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};

// UPDATE JOB
export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "job modified", job: updatedJob });
};

// *** ALL ERRORS ARE HANDLED IN THE VALIDATION MIDDLEWARE ***
