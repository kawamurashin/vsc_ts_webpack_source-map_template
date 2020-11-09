import { Event } from './EventDispatcher';
export class CommonEvent extends Event{
    public static MODEL_START_COMPLETE:string = "model_start_complete";
    constructor(type: string = null, value: any = null) {
        super(type, value);
    }
}



