import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://facoavelino9:v4Va7PlMkzRDip1V@cluster0.fkfkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

//conectando ao banco de dados
export const db = client.db('spotifyAula');
// const songColletion = await db.collection('songs').find({}).toArray();
// console.log(songColletion);