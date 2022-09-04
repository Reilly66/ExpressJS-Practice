const members = [
    {
        id: 0,
        name: "bob",
        age: 27
    },
    {
        id:1,
        name: "jim",
        age: 16
    }
]

function getMembers(req, res) {
    return res.json(members)
}

function getSingleMember(req, res) {
    res.send(members.filter(member => member.id == req.params.id)[0])
}

module.exports.getMembers = getMembers;
module.exports.getSingleMember = getSingleMember;
