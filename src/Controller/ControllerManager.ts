import { CommonEvent } from '../Common/Events/CommonEvent';
import { ModelManager } from './../Model/ModelManager';
export class ControllerManager
{
    constructor()
    {
        const handler = () =>
        {
            console.log("ControllerManager handler");
        }
        let modelManager:ModelManager = ModelManager.getInstance();
        modelManager.addEventListener(CommonEvent.MODEL_START_COMPLETE , handler);
        modelManager.start();
    }
}