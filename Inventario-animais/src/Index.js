import { Mamifero } from "./Classes/Mamifero.js";
import { Ave } from "./Classes/Ave.js";
import { Reptil } from "./Classes/Reptil.js";
import { Inventario } from "./Managers/Inventario.js";
const inventario = new Inventario();
const leão = new Mamifero("Leão", 5);
const arara = new Ave("Arara Azul", 2);
const cobra = new Reptil("Cobra Coral", 4);
inventario.adicionar(leão);
inventario.adicionar(arara);
inventario.adicionar(cobra);
inventario.listar();
inventario.interagirTodos();
//# sourceMappingURL=Index.js.map