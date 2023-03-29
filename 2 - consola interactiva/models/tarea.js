import { v4 as uuidv4 } from 'uuid';
class Tarea {

        id = '';
        desc = '';
        completadoEn = null;

        constructor( desc ) {
            this.desc = desc;
            this.completadoEn = null;
            //this.id = `${ new Date().getTime() }`;
            this.id = uuidv4();
        }
}

export default Tarea;