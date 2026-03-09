import { categorias } from "../config/categorias.js";

export function nombreCategoria(cat) {
  if (!cat) return "";

  const clave = cat.trim().toLowerCase();

  return categorias[clave] || cat;
}

export function claseCategoria(cat) {
  if (!cat) return "";

  return cat.trim().toLowerCase();
}