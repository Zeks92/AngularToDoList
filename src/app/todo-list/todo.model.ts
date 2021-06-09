export class Todo {
    
    constructor(public id: number, public name: string){
    }
}

export type Todos = Array<Todo>;