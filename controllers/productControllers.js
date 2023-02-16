const express = require("express");
const products = require("../models/productsModel");

const getProducts = async (req, res) => {
  const result = await products.find({});
  return res.status(200).json(result);
};

const addProduct = async (req, res) => {
  await products.create({
    name: req.body.name,
    price: req.body.price,
    company: req.body.company,
  });
  return res.status(201).json({ msg: "New product added" });
};
const removeProduct = async (req, res) => {
  await products.findByIdAndDelete(req.params.id);
  return res.status(201).json({ msg: `${req.params.id} is removed` });
};

const getTestProducts = async (req, res) => {
  return res.status(200).json({ msg: "all test products" });
};

module.exports = { getProducts, getTestProducts, addProduct, removeProduct };
