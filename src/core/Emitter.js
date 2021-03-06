export class Emitter{
    constructor(){
        this.listeners={};
    }

    // уведомление слушателей
    emit(event, ...args){
        if (!Array.isArray(this.listeners[event]))
            return false;
        this.listeners[event].forEach(listener=>{
            listener(...args);
        });
        return true;
    }


    // подписка на уведомление
    subscribe(event,func){
        this.listeners[event]=this.listeners[event] || [];
        this.listeners[event].push(func);

        return ()=>{
            this.listeners[event]=this.listeners[event].filter(listener=>listener!==func);
        }
    }
}