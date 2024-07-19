export default [
    {
        name: "Code Writer",
        desc: "An AI tool to write error-free code based on your provided information",
        catagory: "code",
        icon: "/code.png",
        aiPrompt: "Give me the code based on the given information. Note: Check the code twice before providing it. Give me the result in rich text editor format.",
        slug: "generate-code",
        form: [
            {
                label: "Enter your code information",
                field: "input",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Code Explainer",
        desc: "An AI tool to explain code and break it down into easily understandable parts",
        catagory: "code",
        icon: "/explain-code.webp",
        aiPrompt: "Analyze the provided code and explain its functionality. Break down complex parts, describe the purpose of each section, and highlight any important programming concepts used. Provide the explanation in a clear, step-by-step format. give the output in the rich text editor format",
        slug: "explain-code",
        form: [
            {
                label: "Paste your code here",
                field: "textarea",
                name: "codeToExplain",
                required: true
            },
            {
                label: "Specify programming language (optional)",
                field: "input",
                name: "language",
                required: false
            }
        ]
    },
    {
        name: "Blog Title",
        desc: "An AI tool to generate blog title depends on your blog information",
        catagory: "blog",
        icon: "/blog-title.png",
        aiPrompt: "Give me five blog topic idea in bullet wise and only based on given niche and outline give me result in rich text editor format ",
        slug: "generate-blog-title",
        form: [
            {
                lable: "Enter your blog niche",
                field: 'input',
                name: "niche",
                required: true
            }, {
                lable: "Enter your blog outline",
                field: 'textarea',
                name: "outline",

            }
        ]
    },
    {
        name: "Blog Content",
        desc: "An AI tool to generate blog content depends on your blog information",
        catagory: "blog",
        icon: "/blog-content.png",
        aiPrompt: "Generate blog content based on given topic and outline , give me the result in rich text editor format",
        slug: "generate-blog-content",
        form: [
            {
                lable: "Enter your blog topic",
                field: 'input',
                name: "topic",
                required: true
            }, 
            {
                lable: "Enter your blog outline",
                field: 'textarea',
                name: "outline",
            }
        ]
    },
    {
        name:"Blog Topic Ideas",
        desc: "An AI tool to generate blog topic ideas depends on your given niche information",
        catagory: "blog",
        icon: "/blog-topic-ideas.png",
        aiPrompt: "Give me five blog topic idea in bullet wise and only based on given niche and give me the result in rich text editor format",
        slug: "generate-blog-topic-ideas",
        form:[
            {
                lable: "Enter your blog niche",
                field: 'input',
                name: "niche",
                required: true
            }
        ]
    },
    {
        name:"Youtube SEO Title",
        desc: "An AI tool to generate youtube seo title depends on your given video keywords and description",
        catagory:"youtube",
        icon: "/youtube-seo-title.png",
        aiPrompt: "Give me the youtube seo title based on given video keywords and description outline, give me the result in rich text editor format",
        slug: "generate-youtube-seo-title",
        form: [
            {
                lable: "Enter your video topic keywords",
                field: 'input',
                name: "keywords",
                required:true
            },
            {
                lable:"Enter youtube description Outline here",
                field: 'textarea',
                name: "outline",
            }
        ]
    },
    {
        name:"Youtube Description",
        desc: "An AI tool to generate youtube description depends on your given video keywords and description outline",
        catagory:"youtube",
        icon: "/youtube-description.png",
        aiPrompt: "Give me the youtube description with emoji based on given video topic/title and outline, give me the result in rich text editor format",
        slug: "generate-youtube-description",
        form: [
            {
                lable: "Enter your video topic/title",
                field: 'input',
                name: "title",
                required:true
            },
            {
                lable:"Enter your video Outline",
                field: 'textarea',
                name: "outline"
            }
        ]
    },
    {
        name:"Youtube Tags",
        desc: "An AI tool to generate youtube tags depends on your given video title and description outline",
        catagory:"youtube",
        icon: "/youtube-tags.png",
        aiPrompt: "Give me 10-15 youtube tags based on given video title and description outline, give me the result in rich text editor format",
        slug: "generate-youtube-tags",
        form: [
            {
                lable: "Enter your video title",
                field: 'input',
                name: "title",
                required:true
            },
            {
                lable:"Enter your video Outline",
                field:"textarea",
                name: "outline"
            }
        ]
    },
    {
        name:"Text Improver",
        desc: "This is an Handy AI tool to improve your text and eliminate errors, depends on your given text and outline",
        catagory:"Writing Assistant",
        icon: "/text-improver.png",
        aiPrompt: "Give me the improved text and rewrite it without error based on given text and outline, give me the result in rich text editor format",
        slug: "text-improver",
        form: [
            {
                lable: "Enter your text",
                field: 'textarea',
                name: "textToImprove",
                required:true
            }
        ]
    },
    {
        name:"Rewrite (Plagiarism Free)",
        desc: "Use this AI tool to rewrite existing Article or Blog Post to eliminate plagiarism, depends on your given text and outline",
        catagory:"Writing Assistant",
        icon: "/rewrite-article.png",
        aiPrompt: "Give me the rewritten article or blog post without plagiarism based on given text , give me the result in rich text editor format",
        slug: "rewrite-article",
        form: [
            {
                lable: "Enter your text/article",
                field: 'textarea',
                name: "article",
                required:true
            }
        ]
    },
    {
        name:"Instagram Post Generator",
        desc: "Use this AI tool to generate Instagram Post, depends on your given topic and outline",
        catagory:"Social Media Assistant",
        icon: "/instagram-post.png",
        aiPrompt:"Generate 3 Instagram post depend on the given keywords provided it should be different and give me the result in the rich text editor format",
        slug: "instagram-post-generator",
        form: [
            {
                lable:"Enter your keywords for your post",
                field:"textarea",
                name: "keywords",
                required:true
            }
        ]
    }
]