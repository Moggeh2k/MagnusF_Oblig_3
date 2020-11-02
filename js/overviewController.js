function openPoll(pollID)
{
	model.app.currentPoll = pollID;
	model.app.currentPage = 'createPoll';
	loadPoll(pollID);
	updateView();
}