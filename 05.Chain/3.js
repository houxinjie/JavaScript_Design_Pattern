getJSON('/post/1.json')
    .then(function(post) {
        return getJSON(post.commentURL);
    })
    .then(function(comments) {
        console.log('Resolved: ', comments);
    }, function(error) {
        console.log('Rejected: ', error);
    })
