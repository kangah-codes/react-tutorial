// import {v4 as uuid} from 'uuid';

export default class User{
	constructor(id){
		this.id = id;
		this.votedPolls = [];
	}

	addPoll = (poll) => {
		// check if poll does not already exist
		if (!this.votedPolls.includes(poll)){
			this.votedPolls.push(poll);
			localStorage.setItem(this.id.toString(), this.getPoll());
		}
		
	}

	getPoll = () => {
		return this.votedPolls;
	}
}

User.prototype.repr = () => {
	return this.id
}