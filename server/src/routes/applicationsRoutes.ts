import { Router } from 'express';

class ApplicationsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{

        this.router.get('/',(req,res)=>res.send('Games'))

    }

}

const applicationsRoutes = new ApplicationsRoutes();
export default applicationsRoutes.router;