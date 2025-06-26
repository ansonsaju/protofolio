// Blog Posts Data (In a real application, this would come from a backend)
const blogPosts = [
    {
        id: 1,
        title: "10 UI Design Principles for Creating Beautiful Interfaces",
        excerpt: "Learn the fundamental principles that guide effective UI design and how to apply them to your projects.",
        content: `
            <p>Good user interface design is crucial for creating digital products that are both aesthetically pleasing and functional. In this article, we'll explore ten essential UI design principles that can guide you in creating more beautiful and effective interfaces.</p>
            
            <h3>1. Clarity</h3>
            <p>Your interface should be clear and obvious. Users should be able to recognize what they can do and understand how to do it without requiring explanations. Use familiar patterns, clear typography, and visual hierarchy to achieve clarity.</p>
            
            <h3>2. Feedback</h3>
            <p>Always provide users with feedback about their actions. This could be as simple as a button changing color when clicked or more complex like displaying a confirmation message after form submission.</p>
            
            <h3>3. Consistency</h3>
            <p>Maintain consistency in your design elements, layouts, and behaviors throughout your interface. This helps users form a mental model of how your product works and reduces the learning curve.</p>
            
            <h3>4. Visual Hierarchy</h3>
            <p>Use size, color, contrast, and spacing to create a clear hierarchy of elements. This guides users' attention to the most important information or actions first.</p>
            
            <h3>5. Accessibility</h3>
            <p>Design for all users, including those with disabilities. Ensure your interface is navigable by keyboard, has sufficient color contrast, includes alternative text for images, and works with screen readers.</p>
            
            <h3>6. Simplicity</h3>
            <p>Remove unnecessary elements and complexity. Focus on the core functionality and content. As Antoine de Saint-Exupéry said, "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."</p>
            
            <h3>7. Error Prevention</h3>
            <p>Design interfaces that help users avoid making mistakes. Provide clear labels, helpful constraints, and confirmation steps for important actions.</p>
            
            <h3>8. Flexibility and Efficiency</h3>
            <p>Accommodate both novice and expert users. Provide shortcuts, customization options, and advanced features for experienced users while maintaining a simple interface for beginners.</p>
            
            <h3>9. Aesthetic Integrity</h3>
            <p>Create visually appealing designs that reflect your brand identity. Good aesthetics build trust and credibility while enhancing the overall user experience.</p>
            
            <h3>10. User Control</h3>
            <p>Give users a sense of control over the interface. Allow them to undo actions, customize settings, and navigate freely without feeling trapped or constrained.</p>
            
            <h3>Conclusion</h3>
            <p>By applying these principles in your design process, you'll create interfaces that are not only beautiful but also intuitive and efficient to use. Remember that good UI design isn't just about making things look pretty—it's about creating experiences that help users achieve their goals with ease and satisfaction.</p>
        `,
        image: "10ui.jpg",
        category: "design",
        date: "May 15, 2025",
        author: "Alen",
        comments: 12
    },
    {
        id: 2,
        title: "Building Responsive Websites: A Comprehensive Guide",
        excerpt: "A step-by-step approach to creating websites that work beautifully across all devices and screen sizes.",
        content: `
            <p>In today's multi-device world, building responsive websites isn't just a nice-to-have—it's essential. This guide will walk you through the process of creating websites that adapt seamlessly to different screen sizes and devices.</p>
            
            <h3>Understanding Responsive Web Design</h3>
            <p>Responsive web design (RWD) is an approach that makes web pages render well on a variety of devices and window or screen sizes. It consists of a mix of flexible grids and layouts, images, and intelligent use of CSS media queries.</p>
            
            <h3>Mobile-First Approach</h3>
            <p>Starting your design process with the mobile version forces you to focus on the essential content and functionality. Once you have the mobile design working well, you can progressively enhance the experience for larger screens.</p>
            
            <pre><code>
/* Mobile first media query example */
/* Base styles for mobile */
.container {
    padding: 1rem;
}

/* Styles for larger screens */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 750px;
        margin: 0 auto;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}
            </code></pre>
            
            <h3>Flexible Grids</h3>
            <p>Using relative units like percentages instead of fixed units enables your layout to adapt to different screen sizes. CSS Grid and Flexbox make creating flexible layouts much easier than in the past.</p>
            
            <h3>Responsive Images</h3>
            <p>Images should adapt to fit their containers and, ideally, load different sizes based on the device's screen size and resolution. The srcset attribute and picture element help with this:</p>
            
            <pre><code>
<img src="small.jpg"
     srcset="small.jpg 500w,
             medium.jpg 1000w,
             large.jpg 1500w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
     alt="Responsive image example">
            </code></pre>
            
            <h3>Testing Across Devices</h3>
            <p>Always test your responsive designs on actual devices when possible. Browser developer tools offer device emulation, but they don't fully replicate the experience of using your site on a real device.</p>
            
            <h3>Performance Considerations</h3>
            <p>Mobile users often have slower connections and limited data plans. Optimize images, minimize CSS and JavaScript, and consider implementing lazy loading for images and other non-critical content.</p>
            
            <h3>Conclusion</h3>
            <p>Responsive web design is about creating flexible, adaptable websites that provide an optimal viewing experience across a wide range of devices. By following the principles and techniques outlined in this guide, you'll be well on your way to creating websites that look and function beautifully regardless of how they're accessed.</p>
        `,
        image: "compiteguid.jpg",
        category: "development",
        date: "May 5, 2025",
        author: "Alen",
        comments: 8
    },
    {
        id: 3,
        title: "How to Conduct Effective User Research for UX Design",
        excerpt: "Discover methods and best practices for gathering valuable user insights to inform your design decisions.",
        content: `
            <p>User research is the foundation of effective UX design. Without understanding your users, their needs, behaviors, and pain points, it's impossible to create truly user-centered products. This article explores methods and best practices for conducting user research that yields actionable insights.</p>
            
            <h3>Why User Research Matters</h3>
            <p>User research helps you move beyond assumptions and design based on evidence. It reduces the risk of building features nobody wants and helps prioritize development efforts based on actual user needs.</p>
            
            <h3>Research Methods</h3>
            
            <h4>1. User Interviews</h4>
            <p>One-on-one conversations with users or potential users can provide deep insights into their goals, motivations, and challenges. Prepare open-ended questions that encourage detailed responses rather than yes/no answers.</p>
            
            <h4>2. Surveys</h4>
            <p>Collect data from a larger sample of users through structured questionnaires. Surveys are great for quantitative data but may miss the nuances that interviews can capture.</p>
            
            <h4>3. Usability Testing</h4>
            <p>Observe users as they interact with your product or prototype to identify usability issues and areas for improvement. This can be done in person or remotely using screen-sharing tools.</p>
            
            <h4>4. Contextual Inquiry</h4>
            <p>Observe users in their natural environment as they use your product or perform tasks related to your product domain. This provides insights into the context in which your product will be used.</p>
            
            <h4>5. Card Sorting</h4>
            <p>Ask users to organize content into categories that make sense to them. This helps inform information architecture and navigation design.</p>
            
            <h3>Planning Your Research</h3>
            
            <h4>Define Your Objectives</h4>
            <p>Begin with clear research questions. What do you want to learn? How will this information inform your design decisions?</p>
            
            <h4>Identify Your Participants</h4>
            <p>Recruit participants who represent your target users. For most studies, 5-8 participants per user segment is enough to identify significant patterns.</p>
            
            <h4>Choose Your Methods</h4>
            <p>Select research methods based on your objectives, resources, and timeline. Often, a combination of methods yields the most comprehensive insights.</p>
            
            <h3>Analyzing and Applying Research Findings</h3>
            
            <p>After collecting data, look for patterns and themes across participants. Create user personas, journey maps, or empathy maps to synthesize your findings and make them accessible to the entire team.</p>
            
            <p>Share research insights broadly and refer to them throughout the design process. Use them to guide feature prioritization, workflow design, and content strategy.</p>
            
            <h3>Conclusion</h3>
            <p>Effective user research isn't a one-time activity but an ongoing process. By regularly checking in with users and validating design decisions with real data, you can create products that truly meet user needs and stand out in the market.</p>
        `,
        image: "uireserch.jpg",
        category: "design",
        date: "April 25, 2025",
        author: "Alen",
        comments: 15
    },
    {
        id: 4,
        title: "5 Business Strategies for Freelance Designers",
        excerpt: "Learn how to position yourself in the market, build a client base, and grow your freelance design business.",
        content: `
            <p>Transitioning from a designer to a successful freelance business owner requires more than just design skills. This article outlines five essential business strategies that can help you establish and grow your freelance design practice.</p>
            
            <h3>1. Define Your Specialization</h3>
            <p>While being versatile is valuable, positioning yourself as a specialist in a particular niche can make you the go-to designer for specific projects. Consider specializing in:</p>
            <ul>
                <li>An industry (healthcare, education, fintech)</li>
                <li>A design discipline (UX research, UI design, brand identity)</li>
                <li>A project type (e-commerce websites, mobile apps, design systems)</li>
            </ul>
            <p>Specialization allows you to develop deep expertise, command higher rates, and target your marketing efforts more effectively.</p>
            
            <h3>2. Create a Strong Portfolio</h3>
            <p>Your portfolio is your most powerful marketing tool. Focus on quality over quantity and include:</p>
            <ul>
                <li>Case studies that showcase your process, not just final designs</li>
                <li>Results and business impact of your work</li>
                <li>Testimonials from satisfied clients</li>
                <li>A clear description of your role in each project</li>
            </ul>
            <p>Regularly update your portfolio with your best work and make sure it reflects the type of projects you want to attract.</p>
            
            <h3>3. Develop a Pricing Strategy</h3>
            <p>Pricing your services effectively is crucial for sustainability. Consider these approaches:</p>
            <ul>
                <li>Value-based pricing: Charging based on the value your work delivers to clients</li>
                <li>Project-based pricing: Setting fixed fees for defined deliverables</li>
                <li>Retainer arrangements: Securing ongoing work with regular monthly payments</li>
            </ul>
            <p>Regardless of your pricing model, ensure you're accounting for all your costs, including software subscriptions, equipment, taxes, insurance, and the time spent on administration and marketing.</p>
            
            <h3>4. Build a Referral Network</h3>
            <p>Word-of-mouth referrals are often the most valuable source of new business. To cultivate referrals:</p>
            <ul>
                <li>Provide exceptional service to every client</li>
                <li>Stay in touch with past clients with occasional check-ins</li>
                <li>Network with complementary professionals (developers, copywriters, marketers)</li>
                <li>Offer referral incentives for clients who send new business your way</li>
            </ul>
            
            <h3>5. Establish Systems and Processes</h3>
            <p>Creating efficient workflows allows you to spend more time on billable work and less on administration. Develop systems for:</p>
            <ul>
                <li>Client onboarding and offboarding</li>
                <li>Project management and communication</li>
                <li>Invoicing and financial tracking</li>
                <li>Legal agreements and contracts</li>
            </ul>
            <p>Investing in good tools and templates upfront can save countless hours over the long term.</p>
            
            <h3>Conclusion</h3>
            <p>Building a successful freelance design business takes time and strategic thinking. By implementing these five strategies, you'll create a more stable, profitable practice that allows you to focus on doing your best creative work for clients who value your expertise.</p>
        `,
        image: "business.jpg",
        category: "business",
        date: "April 15, 2025",
        author: "Alen",
        comments: 20
    },
    {
        id: 5,
        title: "Creating Custom CSS Animations: A Step-by-Step Tutorial",
        excerpt: "Learn how to create engaging animations using CSS keyframes and transitions to enhance user experience.",
        content: `
            <p>CSS animations can bring websites to life, adding personality and improving the user experience when used thoughtfully. This tutorial will walk you through creating custom CSS animations from basic to advanced.</p>
            
            <h3>Understanding CSS Transitions</h3>
            <p>Transitions are the simplest form of CSS animation, allowing smooth changes from one state to another:</p>
            
            <pre><code>
.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.05);
}
            </code></pre>
            
            <p>The transition property specifies:</p>
            <ul>
                <li>What properties to animate (all, in this case)</li>
                <li>The duration (0.3 seconds)</li>
                <li>The timing function (ease)</li>
            </ul>
            
            <h3>Creating Keyframe Animations</h3>
            <p>For more complex animations, you'll need @keyframes rules:</p>
            
            <pre><code>
@keyframes bounce {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

.bouncing-element {
    animation: bounce 1s ease infinite;
}
            </code></pre>
            
            <p>The animation property specifies:</p>
            <ul>
                <li>The name of the keyframe rule (bounce)</li>
                <li>The duration (1 second)</li>
                <li>The timing function (ease)</li>
                <li>The iteration count (infinite)</li>
            </ul>
            
            <h3>Creating a Loading Spinner</h3>
            <p>Let's create a simple loading spinner:</p>
            
            <pre><code>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
            </code></pre>
            
            <h3>Animating on Scroll</h3>
            <p>Combining CSS animations with JavaScript can create effects triggered by user scrolling:</p>
            
            <pre><code>
/* CSS */
.fade-in {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
}

.fade-in.show {
    opacity: 1;
    transform: translateY(0);
}

/* JavaScript */
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    observer.observe(element);
});
            </code></pre>
            
            <h3>Performance Considerations</h3>
            <p>To ensure smooth animations:</p>
            <ul>
                <li>Animate only transform and opacity properties when possible</li>
                <li>Use will-change for elements that will animate frequently</li>
                <li>Test on lower-powered devices</li>
                <li>Consider reducing animations for users who prefer reduced motion</li>
            </ul>
            
            <pre><code>
@media (prefers-reduced-motion) {
    .animated-element {
        animation: none;
        transition: none;
    }
}
            </code></pre>
            
            <h3>Conclusion</h3>
            <p>CSS animations are a powerful tool for enhancing user interfaces when used with purpose. Start with simple transitions and gradually experiment with more complex keyframe animations as you become comfortable. Remember that animations should support the user experience, not distract from it.</p>
        `,
        image: "cssanimation.png",
        category: "tutorials",
        date: "April 5, 2025",
        author: "Alen",
        comments: 10
    },
    {
        id: 6,
        title: "Mastering Git for Web Developers",
        excerpt: "Essential Git commands and workflows to improve your development process and collaboration.",
        content: `
            <p>Git is an essential tool for modern web development, enabling effective collaboration, version control, and project management. This tutorial covers the fundamental Git commands and workflows that every web developer should master.</p>
            
            <h3>Getting Started with Git</h3>
            
            <h4>Setting Up</h4>
            <p>Configure your Git identity:</p>
            <pre><code>
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
            </code></pre>
            
            <h4>Initializing a Repository</h4>
            <pre><code>
# Start a new repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git
            </code></pre>
            
            <h3>Basic Workflow</h3>
            
            <h4>Checking Status</h4>
            <p>See which files are modified, staged, or untracked:</p>
            <pre><code>
git status
            </code></pre>
            
            <h4>Staging Changes</h4>
            <p>Add files to the staging area:</p>
            <pre><code>
# Add specific files
git add filename.html styles.css

# Add all changed files
git add .
            </code></pre>
            
            <h4>Committing Changes</h4>
            <p>Record staged changes to the repository:</p>
            <pre><code>
git commit -m "Add navigation component"
            </code></pre>
            
            <h4>Viewing History</h4>
            <pre><code>
# View commit history
git log

# Compact view
git log --oneline

# Show changes in each commit
git log -p
            </code></pre>
            
            <h3>Working with Branches</h3>
            
            <h4>Creating and Switching Branches</h4>
            <pre><code>
# Create a new branch
git branch feature-login

# Switch to a branch
git checkout feature-login

# Create and switch in one command
git checkout -b feature-navbar
            </code></pre>
            
            <h4>Merging Branches</h4>
            <pre><code>
# Switch to destination branch (usually main)
git checkout main

# Merge a branch into current branch
git merge feature-login
            </code></pre>
            
            <h4>Resolving Merge Conflicts</h4>
            <p>When Git can't automatically merge changes, you'll need to resolve conflicts manually:</p>
            <ol>
                <li>Git will mark the conflicted files</li>
                <li>Open the files and look for <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, and <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> markers</li>
                <li>Edit the files to resolve the conflicts</li>
                <li><code>git add</code> the resolved files</li>
                <li>Complete the merge with <code>git commit</code></li>
            </ol>
            
            <h3>Remote Repositories</h3>
            
            <h4>Working with Remotes</h4>
            <pre><code>
# Add a remote
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Fetch changes from remote
git fetch origin

# Pull changes (fetch + merge)
git pull origin main

# Push changes to remote
git push origin feature-branch
            </code></pre>
            
            <h3>Advanced Git Techniques</h3>
            
            <h4>Stashing Changes</h4>
            <p>Temporarily save changes without committing:</p>
            <pre><code>
# Stash changes
git stash

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply specific stash
git stash apply stash@{2}

# Apply and remove stash
git stash pop
            </code></pre>
            
            <h4>Rebasing</h4>
            <p>Reapply commits on top of another base:</p>
            <pre><code>
git checkout feature-branch
git rebase main
            </code></pre>
            
            <h3>Conclusion</h3>
            <p>Mastering Git takes practice, but the benefits for your development workflow are substantial. As you become more comfortable with these commands, you'll find Git becomes an indispensable tool in your development process.</p>
        `,
        image: "git.jpg",
        category: "tutorials",
        date: "March 25, 2025",
        author: "Alen",
        comments: 16
    }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog functionality
    initBlog();
    
    // Add event listeners for controls
    setupEventListeners();
});

// Initialize the blog
function initBlog() {
    // Initialize with first batch of posts
    const visiblePostsCount = 3;
    createBlogCards(blogPosts.slice(0, visiblePostsCount));
    
    // Set the initial active button
    const defaultFilterBtn = document.querySelector('.filter-btn[data-category="all"]');
    if (defaultFilterBtn) {
        defaultFilterBtn.classList.add('active');
    }
    
    // Check if there are more posts to load
    updateLoadMoreButtonVisibility(visiblePostsCount);
}

// Set up all event listeners
function setupEventListeners() {
    // Filter buttons
    setupFilterButtons();
    
    // Search functionality
    setupSearch();
    
    // Load more button
    setupLoadMoreButton();
    
    // Modal close buttons
    setupModalCloseButtons();
}

// Function to create blog cards
function createBlogCards(posts) {
    const blogGrid = document.querySelector('.blog-grid');
    
    // Check if the blog grid exists
    if (!blogGrid) {
        console.error('Blog grid element not found');
        return;
    }
    
    // Clear the grid
    blogGrid.innerHTML = '';
    
    // If no posts, show a message
    if (posts.length === 0) {
        const noPosts = document.createElement('div');
        noPosts.className = 'no-posts-message';
        noPosts.textContent = 'No posts found matching your criteria.';
        blogGrid.appendChild(noPosts);
        return;
    }
    
    // Add each post
    posts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card fade-in';
        blogCard.dataset.id = post.id;
        blogCard.dataset.category = post.category;
        
        blogCard.innerHTML = `
            <div class="blog-img">
                <img src="${post.image}" alt="${post.title}">

            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span class="blog-category">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="btn btn-sm read-more-btn">Read More</a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
        
        // Add click event to card to open blog post modal
        blogCard.addEventListener('click', function(e) {
            // Only open the modal if the event target is not the read more button
            // This prevents double-opening
            if (!e.target.classList.contains('read-more-btn')) {
                e.preventDefault();
                openBlogPost(post);
            }
        });
        
        // Add specific click handler for the read more button
        const readMoreBtn = blogCard.querySelector('.read-more-btn');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openBlogPost(post);
            });
        }
    });
    
    // Initialize fade-in animation with IntersectionObserver
    initFadeInAnimation();
}

// Function to handle fade-in animation
function initFadeInAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Create IntersectionObserver only if the browser supports it
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        fadeElements.forEach(element => {
            element.classList.add('show');
        });
    }
}

// Function to open blog post modal
function openBlogPost(post) {
    const modal = document.getElementById('blog-modal');
    const modalBody = document.getElementById('blog-modal-body');
    
    // Check if modal elements exist
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }
    
    // Populate modal content
    modalBody.innerHTML = `
        <div class="blog-post-header">
            <div class="blog-post-meta">
                <div class="blog-post-date">
                    <i class="far fa-calendar"></i> ${post.date}
                </div>
                <div class="blog-post-author">
                    <i class="far fa-user"></i> ${post.author}
                </div>
                <div class="blog-post-comments">
                    <i class="far fa-comment"></i> ${post.comments} Comments
                </div>
                <div class="blog-post-category">
                    <i class="far fa-folder"></i> ${post.category}
                </div>
            </div>
            <h1 class="blog-post-title">${post.title}</h1>
        </div>
        <img class="blog-post-img" src="assets/images/placeholder/${post.image}" alt="${post.title}">
        <div class="blog-post-content">
            ${post.content}
        </div>
    `;
    
    // Show the modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Function to set up filter buttons
function setupFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button styling
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter posts
            if (category === 'all') {
                // Get current visible posts count
                const visiblePostsCount = document.querySelector('#load-more-btn')?.dataset.visiblePosts || 3;
                createBlogCards(blogPosts.slice(0, visiblePostsCount));
            } else {
                const filteredPosts = blogPosts.filter(post => post.category === category);
                createBlogCards(filteredPosts);
                
                // Update load more button visibility for filtered posts
                updateLoadMoreButtonVisibility(0, category);
            }
        });
    });
}

// Function to set up search functionality
function setupSearch() {
    const searchBtn = document.getElementById('blog-search-btn');
    const searchInput = document.getElementById('blog-search-input');
    
    if (searchBtn && searchInput) {
        // Search button click
        searchBtn.addEventListener('click', function() {
            searchBlogPosts();
        });
        
        // Enter key press in search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBlogPosts();
            }
        });
    }
}

// Function to search blog posts
function searchBlogPosts() {
    const searchInput = document.getElementById('blog-search-input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        // If search is empty, reset to default view
        const defaultFilterBtn = document.querySelector('.filter-btn[data-category="all"]');
        if (defaultFilterBtn) {
            defaultFilterBtn.click();
        }
        return;
    }
    
    // Search in title, excerpt, and content
    const searchResults = blogPosts.filter(post => {
        return post.title.toLowerCase().includes(searchTerm) || 
               post.excerpt.toLowerCase().includes(searchTerm) || 
               post.content.toLowerCase().includes(searchTerm);
    });
    
    // Display search results
    createBlogCards(searchResults);
    
    // Hide load more button during search
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
    
    // Update filter buttons (deactivate all)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
}

// Function to set up load more button
function setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Get current number of visible posts
            const currentCount = parseInt(this.dataset.visiblePosts) || 3;
            const nextCount = currentCount + 3; // Load 3 more posts
            
            // Get active category filter
            const activeFilterBtn = document.querySelector('.filter-btn.active');
            const activeCategory = activeFilterBtn ? activeFilterBtn.dataset.category : 'all';
            
            if (activeCategory === 'all') {
                // Load more for all posts
                createBlogCards(blogPosts.slice(0, nextCount));
                this.dataset.visiblePosts = nextCount;
            } else {
                // Load more for filtered category
                const filteredPosts = blogPosts.filter(post => post.category === activeCategory);
                createBlogCards(filteredPosts.slice(0, nextCount));
                this.dataset.visiblePosts = nextCount;
            }
            
            // Update load more button visibility
            updateLoadMoreButtonVisibility(nextCount, activeCategory);
        });
    }
}

// Function to setup modal close buttons
function setupModalCloseButtons() {
    const closeBtn = document.querySelector('.blog-modal-close');
    const modal = document.getElementById('blog-modal');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scroll
        });
    }
}


// Function to close modal
function closeModal() {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}

// Function to update load more button visibility
function updateLoadMoreButtonVisibility(visibleCount, category = 'all') {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (!loadMoreBtn) {
        return;
    }
    
    // Determine total posts count based on category
    let totalPostsCount;
    if (category === 'all') {
        totalPostsCount = blogPosts.length;
    } else {
        totalPostsCount = blogPosts.filter(post => post.category === category).length;
    }
    
    // Update button visibility
    if (visibleCount >= totalPostsCount) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
    
    // Update dataset
    loadMoreBtn.dataset.visiblePosts = visibleCount;
}