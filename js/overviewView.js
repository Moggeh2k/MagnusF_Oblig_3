function updateOverview()
{
	document.getElementById('app').innerHTML = `
		<h3>Oversikt</h1>
		<hr/>
		<table>
			<tr>
				<th>Tittel</th>
				<th></th>
			</tr>
			${(model.polls.length != 0) ?drawPolls() : '<td>No Poll Found. <td>'}
		</table>
	`;
}

function drawPolls()
{
	let html = '';
	for (let i = 0; i < model.polls.length; i++)
	{
		html += `		
			<tr>
			<td>${model.polls[i].question}</td>
			<td><button onclick="openPoll(${i})">Open</button></td>
			</tr>
		`;
	}

	return html;
}