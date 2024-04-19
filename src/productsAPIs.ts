import fs from "fs";
import Papa from'papaparse';
import xml2js from "xml2js";

async function getProductsFromKidsWorldAPI() {
  const xmlData = fs.readFileSync("data/kidsworld.xml");

  const result = await xml2js.parseStringPromise(xmlData);

  return result.products.product
}

async function getProductsFromToyUniverseAPI() {
  const jsonData: Buffer = fs.readFileSync("data/toyuniverse.json");

	const jsonObject = JSON.parse(jsonData.toString());

  return jsonObject;
}

async function getProductsFromToyShopAPI() {
  const csvData: string = fs.readFileSync("data/toyshop.csv", "utf8").toString();

	const lines = csvData.split('\n');
	lines[0] = 'name,price';
	const modifiedCsvData = lines.join('\n');

  const { data } = await Papa.parse(modifiedCsvData, { header: true });

  return data
}

export default {
  kidsWorld: getProductsFromKidsWorldAPI,
  toyUniverse: getProductsFromToyUniverseAPI,
  toyShop: getProductsFromToyShopAPI,
} as any;
