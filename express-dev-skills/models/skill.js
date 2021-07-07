const skills = [
    {skill: 'HTML', confident: true},
    {skill: 'CSS', confident: true},
    {skill: 'Javascript', confident: true},
    {skill: 'Node', confident: false},
    {skill: 'Express', confident: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function update(id, skill) {
    skills.splice(id, 1, skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}