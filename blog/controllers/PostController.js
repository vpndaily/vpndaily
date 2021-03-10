const Post = require('../modules/Post');
const User = require('../modules/User');

module.exports = {
  // Get all posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).send(posts);
    } catch (err) {
      res.send({ message: 'The are no posts!' });
    }
  },

  // Get a post
  getPostById: async (req, res) => {
    const postID = req.params.postID;

    try {
      await Post.findOne({ _id: postID });
      res
        .status(200)
        .send({ message: ' The post has been created successfully!' });
    } catch (err) {
      res.send({ message: `Post with id = ${postID} does not exists !` });
    }
  },

  // Delete a post
  deleteAPost: async (req, res) => {
    const postID = req.params.postID;
    try {
      await Post.findByIdAndDelete({ _id: postID });
      res
        .status(200)
        .send(`Post with id = ${postID} has been deleted successfully!`);
    } catch (err) {
      res.send(`Post with id = ${postID} does not exists!`);
    }
  },

  // Get all the posts of a user
  getPostsOfUser: async (req, res) => {
    const userID = req.params.userID;

    try {
      const user = await User.findById({ _id: userID }).populate('posts');
      user.posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return Math.abs(dateB) - Math.abs(dateA);
      });

      res.status(200).send(user);
    } catch (err) {
      res.send('error');
    }
  },

  // Create a post for user
  userCreatesPost: async (req, res) => {
    try {
      const userID = req.params.userID;
      const user = await User.findById({ _id: userID });

      const post = new Post({
        title: req.body.title,
        description: req.body.description,
        user: user,
      });

      user.posts.push(post);
      await user.save();
      await post.save();
      res.status(200).send('Success');
    } catch (err) {
      res.send({ message: 'Error on post creation!' });
    }
  },

  // User updates a post
  userUpdatesPost: async (req, res) => {
    const postID = req.params.postID;
    try {
      await Post.findOneAndUpdate(
        {
          _id: postID,
        },
        {
          title: req.body.title,
          description: req.body.description,
        },
      );
      res
        .status(200)
        .send(`Post with id = ${postID} has been updated successfully!`);
    } catch (err) {
      res.send(`Failed to update the post with id = ${postID}.`);
    }
  },
};
