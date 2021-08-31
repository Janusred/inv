import { Request, Response } from "express";
import pool from "../database";

class GamesController {

    public async list(req: Request, res: Response) {
        //res.json({ text: 'Lista de juegos' });
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM piz');
        
        
        res.json(games);// consulta de datos en vista json

    }
    public  async getOne(req: Request, res: Response) {
         //res.json({ text: 'un solo juego ' + req.params.id });
          const {id} = req.params;
         const games = await pool.query('SELECT * FROM piz WHERE id = ?', [id]);
        
         if (games.lenth > 0){
             return res.json(games[0]);
         }
         res.status(404).json({text:'no existe'});

    }
    public async create(req: Request, res: Response) : Promise<any>{
         await pool.query('INSERT INTO piz set ?', [req.body]);
        console.log(req.body);
        res.json({ message: 'Guardado ' });
        
    }
    public async update(req: Request, res: Response) {
       // res.json({ text: 'Actualizando ' + req.params.id });
       const { id } = req.params;
       const oldGame = req.body;
       await pool.query('UPDATE piz set ? WHERE id = ?', [req.body, id]);
       res.json({ message: "Actualizado" });
       
   }
       
       public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM piz WHERE id = ?', [id]);
        res.json({ message: "Eliminado" });
    }
    
}
const gamesController = new GamesController();
export default gamesController; 