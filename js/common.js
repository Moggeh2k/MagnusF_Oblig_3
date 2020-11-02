function getCurrentPoll() {
    const pollId = model.app.currentPoll;
    // return model.polls.filter(p => p.id === pollId)[0];

    for (let poll of model.polls) {
        if (poll.id === pollId) return poll;
    }
    return null;
}

function loadPoll(pollID)
{
    let inputObject = model.inputs.createPoll;
    let pollObject = model.polls[pollID];

    inputObject.pollId = pollID;
    inputObject.newAlternative = '';
    inputObject.question = pollObject.question;
    inputObject.options = pollObject.options;
    inputObject.usersCanAddAlternatives = pollObject.usersCanAddAlternatives;
}