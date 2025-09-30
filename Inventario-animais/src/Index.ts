import {Mamifero} from "./Classes/Mamifero.js";
import {Ave} from "./Classes/Ave.js";
import {Reptil} from "./Classes/Reptil.js";
import {Inventario} from "./Managers/Inventario.js";
import {Peixe} from "./Classes/Peixe.js";

const inventario = new Inventario();

const leão = new Mamifero("Leão", 5);
const arara = new Ave("Arara Azul", 2);
const cobra = new Reptil("Cobra Coral", 4);
const peixe = new Peixe("Peixe Dourado", 1);

inventario.adicionar(leão);
inventario.adicionar(arara);
inventario.adicionar(cobra);
inventario.adicionar(peixe);

inventario.listar();
inventario.interagirTodos();