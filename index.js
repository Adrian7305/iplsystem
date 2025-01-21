    import express from 'express'
    import mysql from 'mysql'
    import cors from 'cors'

    const app = express()
    app.use(express.json())
    app.use(cors())

    const db = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"adrian123",
        database:"ipl"
    })

    // code for returning records to froontend
    app.get('/players',(req,res)=>{
            const sql ="SELECT * FROM players";
            db.query(sql,(err,data)=>{
                    if(err){
                        return response.json({Error:"Error"})
                    }
                    return res.json(data)
            })
    })
    // code for sending records to backend
    app.post('/create_players',(req,res)=>{
        const sql ="INSERT INTO players( player_id , player_name , nationality , role , playing_style , team_id) VALUES(?)";
        const values=[
            req.body.player_id,
            req.body.player_name,
            req.body.nationality,
            req.body.role,
            req.body.playing_style,
            req.body.team_id,
        ]
        db.query(sql,[values],(err,data)=>{
                if(err){
                    return response.json({Error:"Error"})
                }
                return res.json(data)
        })
    })
    // code for updating records
    app.put('/update_players/:id',(req,res)=>{
        const sql ="UPDATE players SET player_id=? , player_name=? , nationality=? , role=? , playing_style=? , team_id=? WHERE id=?";
        const values=[
            req.body.player_id,
            req.body.player_name,
            req.body.nationality,
            req.body.role,
            req.body.playing_style,
            req.body.team_id,
        ]
        const id= req.params.id;
        db.query(sql,[...values,id],(err,data)=>{
                if(err){
                    return response.json({Error:"Error"})
                }
                return res.json(data)
        })
    })

    // code for deleting records
    app.delete('/delete_players/:id',(req,res)=>{
        const sql ="DELETE FROM players WHERE id=?";
        const id= req.params.id;
        db.query(sql,[id],(err,data)=>{
                if(err){
                    return response.json({Error:"Error"})
                }
                return res.json(data)
        })
    })

    app.listen(3030,()=>{
        console.log("Running")
    })