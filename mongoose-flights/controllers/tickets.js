const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
};

function newTicket(req, res) {
    console.log('Inside newTicket')
    Ticket.find({}, function(err, tickets) {
        res.render(`tickets/new`,  {
            title: 'Add Ticket',
            flight: req.params.id,
            tickets, 
        });
    })
}

function create(req,res) {
    console.log('INSIDE CREATE TICKETS')
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body);
    ticket.save(function(err) {
        if (err) return res.redirect('/tickets/new');
        res.redirect(`/flights/${req.params.id}`);
    });
}
