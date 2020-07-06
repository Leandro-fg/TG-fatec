const connection = require('../database/connection');
const moment = require('moment')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const [count] = await connection('incidents')
            .count()

        res.header('x-total-Count', count['count(*)']);

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        return res.json(incidents);
    },

    async create(req, res) {
        const { title, description, value, created_at, date } = req.body;
        const ong_id = req.headers.authorization;

        const creationDate = moment().locale('pt').format('L');
        const endDate = moment(date).locale('pt').format('L');

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            created_at: creationDate,
            date:endDate,
            ong_id
        });

        return res.json({ id });
    },
    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) {
            return res.status(401).json({ error: 'Operation not permitted' });
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }
};