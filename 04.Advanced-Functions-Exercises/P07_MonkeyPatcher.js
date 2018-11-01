function solution(command){
    /*if a post has more than 50 total votes, the numbers must be obfuscated – 
    the stored values remains the same, but the reported amounts of upvotes and downvotes have a number added to them. 
    This number is 25% of the greater number of votes (positive or negative), rounded up */

    if(command === 'upvote') {return this.upvotes++;}
    else if(command === 'downvote') {return this.downvotes++;}
    else if(command === 'score'){
        let numberToAdd = 0;
        let balance = this.upvotes - this.downvotes;
        let rating = 'new';
        let totalVotes = this.upvotes + this.downvotes;

        if(totalVotes > 50) {
            numberToAdd = Math.max(this.upvotes, this.downvotes) * 0.25;
            numberToAdd = Math.ceil(numberToAdd);
        }

        if(totalVotes >= 10){
            if((this.upvotes / totalVotes) * 100 > 66){
                rating = 'hot';
            } else if ((balance >= 0) && (this.upvotes > 100 || this.downvotes > 100)) {
                rating = 'controversial';
            } else if (balance < 0){
                rating = 'unpopular';
            } else {
                rating = 'new';
            }
        }     

        return [this.upvotes + numberToAdd, this.downvotes + numberToAdd, balance, rating];
    }
}

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

var answer = solution.call(forumPost, 'score');
console.log(answer);