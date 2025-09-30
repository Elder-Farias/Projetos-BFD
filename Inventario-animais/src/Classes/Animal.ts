import type {IAnimal} from '../Interfaces/IAnimal.js';

export abstract class Animal implements IAnimal {
    constructor(public nome: string, public idade: number) {}

    abstract emitirSom(): void;
    abstract mover(): void;
}