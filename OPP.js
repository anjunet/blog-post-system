// Class representing a blog user
class BlogUser {
    /**
     * 
     * @param {string} username -The username of the user
     * @param {string} fullName -The full name of the user
     */

    constructor(username, fullName) {
        this.username = username;
        this.fullName = fullName;
        this.posts = [];  // Array to store user's blog posts
    }

    // Method to create a new blog post
    /**
     * 
     * @param {string} title -The title of the new blog post
     * @param {string} content -The content of the new blog post
     */

    createPost(title, content) {
        const newPost = new BlogPost(title, content, this.username);
        this.posts.push(newPost);
        console.log(`New post created by ${this.username}.`);
    }

    // Method to edit an existing blog post (by index)
    /**
     * 
     * @param {number} index -The index number of the post
     * @param {string} newTitle -The new title of the edited post
     * @param {string} newContent -The new content of the edited post
     * @returns 
     */
    editPost(index, newTitle, newContent) {
        if (index < 0 || index >= this.posts.length) {
            console.log("Invalid post index.");
            return;
        }
        this.posts[index].title = newTitle;
        this.posts[index].content = newContent;
        console.log(`Post at index ${index} edited successfully.`);
    }

    // Method to delete the last blog post
    /**
     * Delete the last post
     */
    deleteLastPost() {
        if (this.posts.length > 0) {
            const deletedPost = this.posts.pop();
            console.log(`Deleted the last post: "${deletedPost.title}" by ${this.username}`);
        } else {
            console.log("No posts to delete.");
        }
    }

    // Method to display all posts by the user
    /**
     * Display all posts by the user
     */
    displayAllPosts() {
        if (this.posts.length === 0) {
            console.log(`${this.fullName} has no posts.`);
        } else {
            console.log(`Posts by ${this.fullName}:`);
            this.posts.forEach((post, index) => {
                console.log(`\nPost ${index + 1}:\n${post.displayPost()}`);
            });
        }
    }
}

// Class representing a blog post
class BlogPost {
    /**
     * 
     * @param {string} title -The title of the blog post
     * @param {string} content -The content of the blog post
     * @param {string} author -The author of the blog post
     */
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();  // The at which the post was created
    }

    // Method to display blog post details
    /**
     * Display the post content in a formatted manner 
     */

    displayPost() {
        return `Title: ${this.title}\nContent: ${this.content}\nAuthor: ${this.author}\nDate: ${this.createdAt.toLocaleString()}\n`;
    }
}



// Creating two BlogUser instances
const user1 = new BlogUser("johnDoe", "John Doe");
const user2 = new BlogUser("janeSmith", "Jane Smith");

// User 1 creates blog posts
user1.createPost("My First Blog", "This is my first blog post!");
user1.createPost("Learning OOP", "Object-oriented programming is a bit challenging.");
user1.displayAllPosts();

// User 2 creates blog posts
user2.createPost("Welcome to My Blog", "Hello, everyone! Welcome to my blog.");
user2.createPost("Shopping is fun", "If you want to get nice clothes, go with a friend to help you choose");
user2.displayAllPosts();

// Editing a post by User 1
user1.editPost(0, "My First Blog (Edited)", "I've edited the content of my first blog post.");
user1.displayAllPosts();

// Deleting the last post by User 2
user2.deleteLastPost();
user2.displayAllPosts();