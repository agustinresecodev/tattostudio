
export abstract class Factory <T>{
    protected abstract generate():T;

    createMany(count:number): T[] {
        return  Array.from({ length: 10 }, this.generate);
    };
}