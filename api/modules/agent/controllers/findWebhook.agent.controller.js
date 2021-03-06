'use strict';
const Boom = require('boom');
const Flat = require('flat');
const Cast = require('../../../helpers/cast');
const Async = require('async');

module.exports = (request, reply) => {

    const agentId = request.params.id;
    const redis = request.server.app.redis;
    const server = request.server;

    Async.waterfall([
        (cb) => {

            server.inject(`/agent/${agentId}`, (res) => {

                if (res.statusCode !== 200){
                    if (res.statusCode === 404){
                        const errorNotFound = Boom.notFound('The specified agent doesn\'t exists');
                        return cb(errorNotFound);
                    }
                    const error = Boom.create(res.statusCode, 'An error occurred getting the data of the agent');
                    return cb(error, null);
                }
                return cb(null, res.result);
            });
        },
        (agent, cb) => {

            redis.hgetall(`agentWebhook:${agentId}`, (err, data) => {

                if (err){
                    const error = Boom.badImplementation('An error occurred retrieving the webhook.');
                    return cb(error);
                }
                if (data){
                    data.agent = agent.agentName;
                    return cb(null, Cast(Flat.unflatten(data), 'webhook'));
                }
                const error = Boom.notFound('The specified webhook doesn\'t exists');
                return cb(error);
            });
        }
    ], (err, result) => {

        if (err){
            return reply(err);
        }
        return reply(result);
    });
};
