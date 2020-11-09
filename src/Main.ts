import { ControllerManager } from './Controller/ControllerManager';



export class Main
{
    constructor()
    {
        let controllerManager = new ControllerManager();
    }
}
window.addEventListener("load" , () =>
{
    new Main();
})