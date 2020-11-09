import { CommonEvent } from './../Common/Events/CommonEvent';
import { EventDispatcher } from './../Common/Events/EventDispatcher';
export class ModelManager extends EventDispatcher
{
    private static _instance:ModelManager;
    public static getInstance():ModelManager
    {
        if(this._instance == null)
        {
            this._instance = new ModelManager(new SingletonBlock());
        }
        return this._instance;
    }
    constructor(block:SingletonBlock)
    {
        super();
    }
    public start()
    {
        const handler = () =>
        {
            this.startComplete();
        }
        setTimeout(handler, 1000);
    }
    private startComplete()
    {
        let event:CommonEvent = new CommonEvent(CommonEvent.MODEL_START_COMPLETE);
        this.dispatchEvent(event);

    }
}
class SingletonBlock
{

}