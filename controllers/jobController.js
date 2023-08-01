import { jobs } from "../server.js";

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ job });
};

export const createJob = async (req, res) => {
  res.json("create job");
};

export const updateJob = async (req, res) => {
  res.json("update job");
};

export const deleteJob = async (req, res) => {
  res.json("delete job");
};
