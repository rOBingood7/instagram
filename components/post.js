function createPost() {
  const post = document.createElement('div')
  post.classList.add('post')

  const postHeader = document.createElement('div')
  postHeader.classList.add('post-header')

  const userInfo = document.createElement('div')
  userInfo.classList.add('user-info')

  const userAvatar = document.createElement('div')
  userAvatar.classList.add('user-avatar')

  const userDetails = document.createElement('div')
  userDetails.classList.add('user-details')

  const nickname = document.createElement('span')
  nickname.classList.add('nickname')
  nickname.innerHTML = 'nickname'

  const location = document.createElement('span')
  location.classList.add('location')
  location.innerHTML = 'City, Country'

  userDetails.append(nickname, location)
  userInfo.append(userAvatar, userDetails)




  const postOptions = document.createElement('div')
  postOptions.classList.add('post-options')

  postHeader.append(userInfo, postOptions)

  const postImage = document.createElement('div')
  postImage.classList.add('post-image')

  const postActions = document.createElement('div')
  postActions.classList.add('post-actions')

  const postActionsDiv = document.createElement('div')

  const like = document.createElement('a')
  like.classList.add('like')

  const comment = document.createElement('a')
  comment.classList.add('comment')

  const share = document.createElement('a')
  share.classList.add('share')

  postActionsDiv.append(like, comment, share)

  const save = document.createElement('a')
  save.classList.add('save')

  postActions.append(postActionsDiv, save)

  const postLikes = document.createElement('div')
  postLikes.classList.add('post-likes')

  const postLikesSpan = document.createElement('span')
  postLikesSpan.innerHTML = '8,888 likes'

  postLikes.appendChild(postLikesSpan)

  const postCaption = document.createElement('div')
  postCaption.classList.add('post-caption')

  const postCaptionNickname = document.createElement('span')
  postCaptionNickname.classList.add('nickname')
  postCaptionNickname.innerHTML = 'nickname'

  const postCaptionText = document.createElement('p')
  postCaptionText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'

  postCaption.append(postCaptionNickname, postCaptionText)

  const postComments = document.createElement('div')
  postComments.classList.add('post-comments')

  const viewComments = document.createElement('a')
  viewComments.innerHTML = 'View all 33 comments'

  const commentDiv = document.createElement('div')
  commentDiv.classList.add('comment')

  const commentNickname = document.createElement('span')
  commentNickname.classList.add('nickname')
  commentNickname.innerHTML = 'nickname'

  const commentText = document.createElement('span')
  commentText.innerHTML = ' Lorem ipsum dolor sit amet'

  commentDiv.append(commentNickname, commentText)
  postComments.append(viewComments, commentDiv)

  const postTime = document.createElement('div')
  postTime.classList.add('post-time')

  const postTimeSpan = document.createElement('span')
  postTimeSpan.innerHTML = '1 hour ago'

  postTime.appendChild(postTimeSpan)

  const addComment = document.createElement('div')
  addComment.classList.add('add-comment')

  const commentInp = document.createElement('input')
  commentInp.placeholder = 'Add a comment...'

  const commentBtn = document.createElement('button')
  commentBtn.innerHTML = 'Post'

  addComment.append(commentInp, commentBtn)

  post.append(postHeader, postImage, postActions, postLikes, postCaption, postComments, postTime, addComment)


  document.querySelector('.post_container').appendChild(post);
}


createPost();
